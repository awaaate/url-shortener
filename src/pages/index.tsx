import { useToast } from "@chakra-ui/react";
import { Formik } from "formik";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { Button } from "../components/button";
import { Menu } from "../components/menu";
import { UrlCard } from "../components/url.card";
import { GlobalStyles } from "../lib/global.styles";
import { prisma } from "../lib/prisma.client";
import { withSession } from "../lib/with.session";

function Index(props) {
    const [myUrls, setMyUrls] = useState([]);
    async function submitHandler(values: any) {
        console.log(values);
        const response = await fetch("/api/url", {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify({ url: values.url }),
        });
        const result = await response.json();
        if (result.url) {
            setMyUrls((urls) => [...urls, result.url]);
            return;
        }

        return;
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const localUrls = localStorage.getItem("myUrls");
            if (props.urls[0]) {
                setMyUrls(props.urls);
            } else if (myUrls[0]) {
                setMyUrls(JSON.parse(localUrls));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined" && myUrls) {
            console.log(myUrls);
            localStorage.setItem("myUrls", JSON.stringify(myUrls));
        }
    }, [myUrls]);
    return (
        <div className="h-full">
            <div className="w-full max-w-screen-lg  m-auto  ">
                <div className="bg-cyan-600  justify-center  h-72 px-8 flex-col my-12 rounded-lg">
                    <div className="h-1/2 flex items-center justify-center">
                        <h1 className="from-orange-50 to-dark-blue-100 bg-gradient-to-r bg-clip-text text-transparent font-black text-5xl">
                            Make short links
                        </h1>
                    </div>

                    <Formik
                        initialValues={{ url: "" }}
                        onSubmit={submitHandler}
                    >
                        {({ handleSubmit, getFieldProps }) => (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white shadow-md rounded-lg flex px-8 py-3"
                            >
                                <input
                                    {...getFieldProps("url")}
                                    placeholder="Url to shortener"
                                    className="px-4 bg-transparent w-full outline-none"
                                />
                                <Button className="bg-dark-blue-800 text-white">
                                    shorten
                                </Button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div
                    className={`flex flex-col space-y-6 px-16 mb-16 rounded-lg h-full relative`}
                >
                    <div className="bg-dark-blue-800 w-full h-full absolute top-0 left-0 mt-10 rounded-lg z-0"></div>
                    {myUrls.map((url, idx) => (
                        <UrlCard
                            i={idx}
                            key={url.id}
                            hits={url.hits}
                            target={url.target}
                            id={url.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export const getServerSideProps: GetServerSideProps = withSession(
    async ({ req }) => {
        const userSession = req.session.get("user");
        if (userSession) {
            const urls = await prisma.user
                .findUnique({ where: { id: userSession.id } })
                .urls();
            return { props: { urls: JSON.parse(JSON.stringify(urls)) } };
        } else {
            return { props: { urls: [] } };
        }
    }
);
export default Index;
