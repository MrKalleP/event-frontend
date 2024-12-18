import ProjectPage from "../pages/ProjectPage"
import App from "../App"
import NotFound from "./NotFound"


export default [
    { path: "/", element: <App />, menuLabel: "Homepage", title: "Homepage" },
    { path: "*", element: <App />, menuLabel: "Homepage", title: "Homepage" },
    { path: "/Projects", element: <ProjectPage />, menuLabel: "Projects", title: "Projects" },
    { path: "/NotFound", element: <NotFound />, menuLabel: "NotFound", title: "NotFound" },
]