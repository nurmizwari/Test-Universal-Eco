import { createBrowserRouter } from "react-router-dom";
import SignupForm from "../components/formPage";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/edit/:id",
    element: <SignupForm />,
  },
]);

export default router;
