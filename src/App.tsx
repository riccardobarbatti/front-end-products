import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'
//pages
import Home from './pages/Home'
import Error404 from './pages/Error404'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/users/Users";
import UserCreate from "./pages/users/UserCreate";
import UserEdit from "./pages/users/UserEdit";
import Roles from "./pages/roles/Roles";
import RoleCreate from "./pages/roles/RoleCreate";
import RoleEdit from "./pages/roles/RoleEdit";
import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import ProductEdit from "./pages/products/ProductEdit";
import Orders from "./pages/orders/Orders";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/profile" element={<Profile />} />
            <Route index element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path='/users/:id/edit' element={<UserEdit />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/create" element={<RoleCreate />} />
            <Route path="/roles/:id/edit" element={<RoleEdit />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/create" element={<ProductCreate />} />
            <Route path="/products/:id/edit" element={<ProductEdit />} />
            <Route path="/orders" element={<Orders />} />


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
