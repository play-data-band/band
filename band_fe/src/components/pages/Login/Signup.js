import classes from "../../../styles/pages/main.module.css";
import mainLogo from "../../../asset/images/mainlogo2.png";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();
  const loginMethods = () => {
    nav('/');
  }

  const signupHandler = () => {
    
  }

  return (
    <div>
      <div className={classes.signUpPageWrap}>
        <img className={classes.signUpPageLogo} src={mainLogo} />
      </div>
      <div className={classes.inputArea}>
        <Input placeholder="example@email.com" value="아이디(이메일)" type="text" />
        <Input placeholder="********" value="비밀번호" type="password" />
        <Input placeholder="" value="성함" type="text" />
        <Input placeholder="" value="Mbti" type="text" />
        <Input placeholder="" value="프로필 이미지" type="text" />
        <div className={classes.findArea}></div>
        <Button onClick={signupHandler} value="회원가입" />
      </div>
      <div className={classes.signupArea}>
        <div className={classes.signupAreaInner}>
          <span onClick={loginMethods}>이미 회원이신가요 ?</span>
        </div>
      </div>
    </div>
  );
}

export default Signup;