import { useContext } from "react";
import AppContext from "../context/appContext";


const useLogin = () => {
    const { appLogin } = useContext(AppContext);
    const login = async ({ email, password }) => {
        try {
            console.log("--login called --");
            const URL = "http://localhost:1400/api/v1/auth/login";
            const OPTIONS = {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            };

            const res = await fetch(URL, OPTIONS);
            const data = await res.json();
            if (data.status === "Success") {
                appLogin(data.data);
                localStorage.setItem("authorization", data.token);
            }
            else {
                alert("Error", data.message);
            }
        }
        catch (err) {
            alert(err.message);
        }
    };

    return { login };
};

export default useLogin;
