import { withIronSession } from "next-iron-session";
export function withSession(handler) {
    return withIronSession(handler, {
        password: "bTZ5DJmVXoJGZ5xhZdtjisJkQnPKso8NTzgu0",
        cookieName: "user",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        },
    });
}
