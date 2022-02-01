import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";


const Nav = () => {
    const [user, setUser] = useState({
        first_name: ''
    });

    const logout = async () => {
        await axios.post('logout', {});
    }
    //get user login
    useEffect(() =>{
        (
            async () => {
                const {data} = await axios.get('user');
                setUser(data);
            }
        )()
    },[]);

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Products App</a>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link to="/profile"
                      className="p-2 text-white text-decoration-none">{user?.first_name}</Link>
                <NavLink to="/login"> <button  onClick={logout} type="button" className="btn btn-primary" name="register">Sign out</button></NavLink>
            </ul>

        </nav>
    );
}

export default Nav;
