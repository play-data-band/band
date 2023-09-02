import classes from "../../../styles/pages/main.module.css";
import mainLogo from "../../../asset/images/mainlogo.png";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const signUpMethods = () => {
    nav('signUp');
  }

  const loginSubmitHandler = () => {

  }

  return (
    <div>
      <div className={classes.mainPageWrap}>
        <img className={classes.mainPageLogo} src={mainLogo} />
      </div>
      <div className={classes.inputArea}>
        <Input placeholder="example@email.com" value="아이디(이메일)" type="text" />
        <Input placeholder="********" value="비밀번호" type="password" />
        <div className={classes.findArea}></div>
        <Button onClick={loginSubmitHandler} value="로그인" />
      </div>
      <div className={classes.signupArea}>
        <div className={classes.signupAreaInner}>
          <span onClick={signUpMethods}>회원이 아니신가요 ?</span>
        </div>
      </div>
    </div>
  );
}

export default Login;