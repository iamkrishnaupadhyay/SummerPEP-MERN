import { useState } from "react";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
    const { signUp } = useSignUp();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        const validate1 = email.length > 4;
        const validate2 = password.length >= 8;
        if (validate1 && validate2) {
            signUp({ email, password });
        } else if (!validate1) {
            alert("Incorrect Email");
        } else {
            alert("Password must be greater than 7 characters");
        }
    };

    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={validate}>Sign Up</button>
        </div>
    );
};

export default SignUp;
