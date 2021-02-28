const colors = require("tailwindcss/colors");
module.exports = {
    purge: ["./src/pages/**/*.ts", "./components/**/*.ts"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "dark-blue": {
                    50: "#e2fbff",
                    100: "#bcecf5",
                    200: "#94deed",
                    300: "#6dd1e6",
                    400: "#4bc5df",
                    500: "#38abc5",
                    600: "#298599",
                    700: "#1b606e",
                    800: "#0a3943",
                    900: "#001418",
                },
                cyan: {
                    50: "#d8ffff",
                    100: "#acfeff",
                    200: "#7dfcff",
                    300: "#4dfaff",
                    400: "#27f9ff",
                    500: "#18e0e6",
                    600: "#00aeb3",
                    700: "#007c80",
                    800: "#004c4e",
                    900: "#001b1d",
                },
                "light-blue": {
                    50: "#e5faff",
                    100: "#bbeffc",
                    200: "#90e5fa",
                    300: "#6adbf8",
                    400: "#52d1f7",
                    500: "#46b8de",
                    600: "#368eac",
                    700: "#26667a",
                    800: "#133d4a",
                    900: "#00151a",
                },
                orange: {
                    50: "#fef1e7",
                    100: "#f8d7bb",
                    200: "#f5bb8c",
                    300: "#f3a05d",
                    400: "#f08630",
                    500: "#d76c1c",
                    600: "#a75415",
                    700: "#773c0e",
                    800: "#472409",
                    900: "#180c01",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
