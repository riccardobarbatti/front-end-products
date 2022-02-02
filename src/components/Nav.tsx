import axios from "axios";
import React, {Dispatch, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {User} from "../models/user";
import {setUser} from "../redux/actions/setUserAction";

const Nav = (props:{user: User}) => {


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
                      className="p-2 text-white text-decoration-none">{props.user.name}</Link>
                <NavLink to="/login"> <button  onClick={logout} type="button" className="btn btn-primary" name="register">Sign out</button></NavLink>
            </ul>

        </nav>
    );
}

//send event to other components
export default connect(
    (state: { user: User }) => {
        return {
            user: state.user
        };
    }
)(Nav);
