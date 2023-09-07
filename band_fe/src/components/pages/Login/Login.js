import classes from "../../../styles/pages/Main.module.css";
import mainLogo from "../../../asset/images/mainlogo.png";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../../atoms/Loading";

const Login = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  // 페이지가 처음 로드될 때 스크롤을 가장 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const signUpMethods = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      nav('signUp');
    }, 700);

  }

  const loginSubmitHandler = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      nav('main');
    }, 700);
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
      {loading && <Loading />}
    </div>
  );
}

export default Login;