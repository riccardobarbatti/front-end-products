import React, {Component, Dispatch, useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import Menu from "./Menu";
import axios from "axios";
import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";
import {User} from "../models/user";
import {setUser} from "../redux/actions/setUserAction";

const  Wrapper =(props: any) => {
    // const navigate = useNavigate();
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');
                    //set redux  action
                    props.setUser(new User(
                        data.id,
                        data.first_name,
                        data.last_name,
                        data.email,
                        data.role
                    ));
                } catch (e) {
                    setRedirect(true);
                }
            }
        )();
    }, []);

    if (redirect) {
          <Navigate to="/login"/>;
    }

        return (
            <>
                <Nav/>

                <div className="container-fluid">
                    <div className="row">
                        <Menu/>

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {props.children}
                        </main>
                    </div>
                </div>
            </>
        );

}
//map get users state
const mapStateToProps = (state: { user: User }) => {
    return {
        user: state.user
    };
}
//send event to other components
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setUser: (user: User) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
//export default connect()(Wrapper);