import { useEffect } from "react";
import useSWR from "swr";

export const useUser = () => {
    const { data, mutate, error } = useSWR("/api/user");

    console.log(data)
};
