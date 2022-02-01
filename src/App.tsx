import { Routes, Route, Outlet, useParams } from "react-router-dom";
import './App.css'
//pages
//import Navbar from "./components/Navbar"
import Nav from "./components/Nav"
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path='/users/:id/edit' element={<UserEdit />} />
            <Route path="/register" element={<Register />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>

    </div>
  );
}

function Layout() {
  return (
      <div>
        {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}


        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}

        <Outlet />
      </div>
  );
}

export default App
