import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma.client";
import { parseBase64 } from "../../lib/shortener";

function RedirectPage() {
    return (
        <div>
            <h1>[short_url]</h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({
    params,
    req,
}) => {
    const id = parseBase64(params.short_url as string);

    try {
        const url = await prisma.url.update({
            where: { id: Number(id) },
            data: {
                hits: {
                    increment: 1,
                },
            },
        });

        if (!url) {
            return {
                notFound: true,
            };
        }
        return {
            redirect: {
                destination: url.target,
                permanent: false,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default RedirectPage;
