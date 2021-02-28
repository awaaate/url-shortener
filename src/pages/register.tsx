
import { Formik } from "formik";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useRouter } from "next/router";
function Register() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-center w-full pt-20">
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                onSubmit={async (values, formikBag) => {
                    const response = await fetch("/api/auth/register", {
                        method: "POST",
                        headers: new Headers({
                            "Content-Type": "application/json",
                        }),
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password,
                        }),
                    });
                    const result = await response.json();
                    if (!result.error) {
                        router.push("/");
                    }
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
                                Register
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
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
}

export default Register;
