import { NextApiResponse } from "next";
import { ApiRequest } from "../../../lib/interfaces/api";
import { prisma } from "../../../lib/prisma.client";
import { withSession } from "../../../lib/with.session";

async function handler(req: ApiRequest, res: NextApiResponse) {
    const sessionUser = req.session.get("user");
    console.log(sessionUser)
    if (sessionUser) {
        const user = await prisma.user.findUnique({
            where: { id: sessionUser.id },
            include: {
                urls: true,
            },
        });
        if (!user) {
            res.statusCode = 401;
            res.send({ error: true, message: "User not authorized" });
            return;
        }

        const { password: _, ...cleanUser } = user;

        res.send({
            error: false,
            data: cleanUser,
        });
    } else {
        res.statusCode = 401;
        res.send({ error: true, message: "You must be logged" });
    }
}

export default withSession(handler);
