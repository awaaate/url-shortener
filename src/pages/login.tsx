import { Formik } from "formik";
import { useRouter } from "next/router";
import { Button } from "../components/button";
import { Input } from "../components/input";
function Login() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center w-full pt-20">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    errors: "",
                }}
                onSubmit={async (values, formikBag) => {
                    const response = await fetch("/api/auth/login", {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json",
                        }),
                        body: JSON.stringify(values),
                    });
                    const result = await response.json();
                    if (!result.error) {
                        router.push("/");
                        return;
                    }
                    formikBag.setFieldValue("errors", result.message);
                    return;
                }}
            >
                {({ handleSubmit, getFieldProps, values }) => (
                    <div className="w-96  bg-dark-blue-800 rotate-6 transform rounded-lg">
                        <form
                            onSubmit={handleSubmit}
                            className="transform  -rotate-6 bg-cyan-600 w-full h-full rounded-lg p-4 space-y-4"
                        >
                            <h1 className="font-bold text-3xl text-white text-center">
                                login
                            </h1>
                            <Input
                                {...getFieldProps("email")}
                                placeholder="your@email.com"
                            />
                            <Input
                                {...getFieldProps("password")}
                                type="password"
                                placeholder="password"
                            />
                            <Button className="bg-dark-blue-800 text-white w-full py-3">
                                submit
                            </Button>
                            {values.errors && (
                                <div className="bg-red-200 border-t-2 border-red-500 p-4 text-center font-medium rounded-lg">
                                    {values.errors}
                                </div>
                            )}
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Login;
