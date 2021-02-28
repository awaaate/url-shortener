import { NextApiResponse } from "next";
import { ApiRequest } from "../../../lib/interfaces/api";
import { withSession } from "../../../lib/with.session";


async function handler(req: ApiRequest, res: NextApiResponse) {
    req.session.destroy();
    res.statusCode = 200;

    res.send({
        message: "Logged out",
    });
}

export default withSession(handler);
