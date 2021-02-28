import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma.client";

import argon2 from "argon2";
import { ApiRequest } from "../../../lib/interfaces/api";
import { withSession } from "../../../lib/with.session";

async function handler(req: ApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        res.statusCode = 403;
        res.send({ error: true, message: "Invalid password or email" });
        return;
    }
    const validPassword = await argon2.verify(user.password, password);

    if (!validPassword) {
        res.statusCode = 403;
        res.send({ error: true, message: "Incorrect password or email" });
        return;
    }
    req.session.set("user", {
        id: user.id,
    });
    await req.session.save();
    res.statusCode = 200;

    const { password: _, ...cleanUser } = user;
    res.send({
        error: false,
        user: cleanUser,
    });
}

export default withSession(handler);
