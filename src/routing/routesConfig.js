import App from "../App";
// Features
import Homepage from "../features/homepage/Homepage";
import Projects from "../features/projects/Projects";
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
        element: <Projects/>
      }
    ]
  }
];

export default routesConfig;