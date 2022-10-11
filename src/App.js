import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import EmailVerification from "../src/components/EmailVerification/EmailVerification";
import UpdateResetPassword from "./components/ResetPassword/UpdateResetPassword/UpdateResetPassword";
import Error404 from "./components/404Page/Error404";

//Dashboard Layout
//adminDashboard routes
import AdminDashboardTopBar from "./Dashboards/AdminDashboard/components/TopNavbar/TopBar";
import AdminDashboardSideBar from "./Dashboards/AdminDashboard/components/SideBar/SideBar";
import Admin_Dashboard_Home from "./Dashboards/AdminDashboard/Pages/Home/Home";
import AdminDashboardProfile from "./Dashboards/AdminDashboard/components/Profile/Profile";
import AdminDashboardEditProfile from "./Dashboards/AdminDashboard/components/Profile/EditProfile";
import CreateCourse from "./Dashboards/AdminDashboard/Pages/AddBlogs/CreateBlogs";
import ManageBlogs from "./Dashboards/AdminDashboard/Pages/ManageBlogs/ManageBlogs";
import Logout from "./components/Logout/Logout";

//import context
import FetchedData from "./Context/FetchedData";
import Blog from "./pages/Blogs/Blog";

//Main website Layout
const StaticPagesRoutes = () => (
  <div>
    <Navbar />
    <FetchedData>
      <Outlet />
    </FetchedData>
    {/* <Footer /> */}
  </div>
);

const AuthorDashboard = () => (
  <div>
    {/* <AuthorDashboardSideBar /> */}
    <AdminDashboardTopBar />
    <AdminDashboardSideBar />
    <FetchedData>
      <Outlet />
    </FetchedData>
  </div>
);

function App() {
  return (
    <>
      <Routes>
        {/* main website routes */}
        <Route path="/" element={<StaticPagesRoutes />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blogs/:id" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/join" element={<Signup />} />
          <Route
            exact
            path="/author/forgot-password"
            element={<ForgotPassword />}
          />
          <Route
            exact
            path="/author/:id/verify/:token"
            element={<EmailVerification />}
          />
          <Route
            exact
            path="/author/:id/reset/:resetToken"
            element={<UpdateResetPassword />}
          />
          <Route exact path="*" element={<Error404 />} />
        </Route>

        {/* authorDashboard routes */}
        <Route path="/author-dashboard" element={<AuthorDashboard />}>
          <Route path="/author-dashboard" element={<Admin_Dashboard_Home />} />
          <Route
            exact
            path="/author-dashboard/profile"
            element={<AdminDashboardProfile />}
          />
          <Route
            exact
            path="/author-dashboard/profile/edit-profile"
            element={<AdminDashboardEditProfile />}
          />

          <Route
            exact
            path="/author-dashboard/create-blog"
            element={<CreateCourse />}
          />
          <Route
            exact
            path="/author-dashboard/manage-blogs"
            element={<ManageBlogs />}
          />
          <Route
          exact
          path="/author-dashboard/logout"
          element={<Logout />}
        />
        </Route>
      </Routes>
    </>
  );
}

export default App;
