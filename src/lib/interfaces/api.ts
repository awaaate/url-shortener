import { NextApiRequest } from "next";
import { Session } from "next-iron-session";

export interface ApiRequest extends NextApiRequest {
    session: Session;
}
