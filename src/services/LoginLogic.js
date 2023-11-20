// src/services/LoginService.js
import { toast } from "react-toastify";

const LoginLogic = {
    proceedLogin: (username, password, usenavigate) => {
        if (LoginLogic.validate(username, password)) {
            fetch("http://localhost:8000/user/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            sessionStorage.setItem('userrole', resp.role);
                            usenavigate('/');
                        } else {
                            toast.error('Please Enter valid credentials');
                        }
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    },

    

    validate: (username, password) => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    },
};

export default LoginLogic;
