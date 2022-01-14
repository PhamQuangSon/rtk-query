import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loginUrl } from "../../spotify";
import { selectToken } from "../auth/authSlice";
import { useNavigate } from "react-router-dom"
import './Login.scss';

export function Login() {
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    

    useEffect(() => {
        if (token) {
            navigate('/login')
            return;
        }
    }, []);
    return (
        <div className="login">
         
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>



        </div>
    )
}