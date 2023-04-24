import App from "../App";
// Features
import Homepage from "../features/homepage/Homepage";
import Projects from "../features/projects/Projects";
import Project from "../features/projects/Project";
// Components
import NotFound from "../components/static/NotFound";

const routesConfig = [
  {
    path: "/", 
    element: <App/>,
    errorElement: <NotFound/>,
    children:[
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/projects",
        children:[
          {
            index: true,
            element: <Projects/>
          },
          {
            path: ":id",
            element: <Project/>
          }
        ]
      }
    ]
  }
];

export default routesConfig;