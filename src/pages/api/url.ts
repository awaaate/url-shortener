import { NextApiRequest, NextApiResponse } from "next";
import { ApiRequest } from "../../lib/interfaces/api";
import { prisma } from "../../lib/prisma.client";
import { urlValidation } from "../../lib/validations";
import { withSession } from "../../lib/with.session";

async function handler(req: ApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { url } = req.body;
        if (!urlValidation(url)) {
            res.statusCode = 200;
            res.send({ message: "Invalid url" });
            return;
        }
        const userSession = req.session.get("user");
       
        const createdUrl = await prisma.url.create({
            data: {
                creator: userSession
                    ? {
                          connect: {
                              id: userSession.id,
                          },
                      }
                    : undefined,
                target: url,
            },
            
        });
        console.log(createdUrl)
        //201 created
        res.statusCode = 201;
        res.send({ message: "Url created", url: createdUrl });
    }
}

export default withSession(handler);
