import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "../assets/pages/Home/Home";
import CollegeDetails from "../assets/pages/Details/CollegeDetails";
import Colleges from "../assets/pages/Colleges/Colleges";
import Register from "../assets/pages/Register/Register";
import Login from "../assets/pages/Login/Login";
import PrivateRout from "./PrivateRout";
import Admission from "../assets/pages/Admission/Admission";
import AdmissionForm from "../assets/pages/Admission/AdmissionForm";
import MyCollege from "../assets/pages/MyCollege/MyCollege";
import ErrorPage from "../assets/pages/ErrorPage/ErrorPage";
import AddCollegeOrCourse from "../assets/pages/AddCollegeOrCourse/AddCollegeOrCourse";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            // {
            //     path: "/colleges",
            //     element: <Colleges></Colleges>
            // },
            {
                path: "/collegeDelails/:id",
                element: <PrivateRout><CollegeDetails></CollegeDetails></PrivateRout>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/admission",
                element: <PrivateRout><Admission></Admission></PrivateRout>
            },
            {
                path: "/admissionform/:id",
                element: <PrivateRout><AdmissionForm></AdmissionForm></PrivateRout>
            },
            {
                path: "/mycollege",
                element: <PrivateRout><MyCollege></MyCollege></PrivateRout>
            },
            {
                path: "/addCourse",
                element: <PrivateRout><AddCollegeOrCourse></AddCollegeOrCourse></PrivateRout>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);

export default router;