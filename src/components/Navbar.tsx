import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate, NavLink} from 'react-router-dom'


const Navbar = () => {
    /*
    CLICK HANDLER FUNCTION
    const navigate = useNavigate();

    const someEventHandler = (to:string) => {
        navigate(to);
    }
    const handlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const button: HTMLButtonElement = event.currentTarget;
       // console.log('tets:'+button.name);
        navigate(button.name);

    }*/
    return (

            <header className="p-3 bg-white text-black">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <h1 className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
                        🔄 Demo Front End
                    </h1>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><NavLink to="/" className="nav-link px-2 link-secondary active" >Home</NavLink></li>
                            <li><NavLink to="/about" className="nav-link px-2 link-dark ">AboutUs</NavLink></li>
                            <li><NavLink to="/login" className="nav-link px-2 link-dark ">Login</NavLink></li>
                        </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/></form>
                    <div className="text-end">

                        <NavLink to="/login"><button type="button" className="btn btn-outline-primary me-2" name="login">Login</button></NavLink>
                        <NavLink to="/register"><button type="button" className="btn btn-primary" name="register">Sign-up</button></NavLink>

                    </div>
                 </div>
              </div>
            </header>
        );
}

export default Navbar;