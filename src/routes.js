import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard"
import Dashboard2 from "./Dashboard2";

export const ROOT = "/";
// export const LOGIN = "/";
export const REGISTER = "/register";
export const DASHBOARD = "/dashboard"
export const TABLE = "/table"

export const router = createBrowserRouter([
  { path: ROOT, element: <LoginPage /> },
  { path: DASHBOARD, element: <Dashboard /> },
  { path: TABLE, element: <Dashboard2 /> },
]);
