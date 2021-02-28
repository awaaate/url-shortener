import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma.client";

import argon2 from "argon2";
import { ApiRequest } from "../../../lib/interfaces/api";
import { withSession } from "../../../lib/with.session";

async function handler(req: ApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    const emailAlreadyTaken = await prisma.user.findUnique({
        where: { email },
    });
    if (emailAlreadyTaken) {
        res.statusCode = 401;
        res.send({ error: true, message: "Email already taken" });
        return;
    }
    const hashedPassword = await argon2.hash(password);
    const user = await prisma.user.create({
        data: { email, password: hashedPassword },
    });

    req.session.set("user", {
        id: user.id,
    });
    res.statusCode = 200;

    const { password: _, ...cleanUser } = user;
    res.send({
        error: false,
        user: cleanUser,
    });
}

export default withSession(handler);
