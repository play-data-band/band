import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import UserCategoryType from "./components/pages/Login/UserCategoryType";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
  },
  {
    path : '/signUp',
    element : <Signup />,
  },
  {
    path : '/category',
    element : <UserCategoryType />,
  }
]);

export default router;