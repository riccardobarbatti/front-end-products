import React, {Component, Dispatch, useEffect, useState} from 'react';
import Navbar from "../components/Navbar";
import Nav from "../components/Nav";
import Menu from "./Menu";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";
import {User} from "../models/user";
import {setUser} from "../redux/actions/setUserAction";

class  Wrapper extends Component {

    // const navigate = useNavigate();
    // const [redirect, setRedirect] = useState(false);
    //
    // useEffect(() => {
    //     (
    //         async () => {
    //             try {
    //                 const {data} = await axios.get('user');
    //
    //                 props.setUser(new User(
    //                     data.id,
    //                     data.first_name,
    //                     data.last_name,
    //                     data.email,
    //                     data.role
    //                 ));
    //             } catch (e) {
    //                 setRedirect(true);
    //             }
    //         }
    //     )();
    // }, []);
    //
    // if (redirect) {
    //      navigate ("/login");
    // }
    render() {
        return (
            <>
                <Nav/>

                <div className="container-fluid">
                    <div className="row">
                        <Menu/>

                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </>
        );
    }
}
// const mapStateToProps = (state: { user: User }) => {
//     return {
//         user: state.user
//     };
// }
//
// const mapDispatchToProps = (dispatch: Dispatch<any>) => {
//     return {
//         setUser: (user: User) => dispatch(setUser(user))
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
export default Wrapper;