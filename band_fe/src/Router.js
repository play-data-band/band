import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Signup from "./components/pages/Login/Signup";
import UserCategoryType from "./components/pages/Login/UserCategoryType";
import Main from "./components/pages/section/Main";
import MyClass from "./components/pages/section/MyClass";
import MyPage from "./components/pages/section/MyPage";

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
  },
  {
    path : '/main',
    element : <Main />,
  },
  {
    path : '/myClass',
    element : <MyClass />,
  },
  {
    path : '/myPage',
    element : <MyPage />,
  },
]);

export default router;