import React, { useState, useEffect } from "react";
import axios from axios;
import { useNavigate, Link } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [ values, setValues] = useState({ username: "", password: ""});
    const toastOptions = {
        positon: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/");
        }
    }, []);

}