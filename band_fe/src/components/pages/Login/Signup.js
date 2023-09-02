import classes from "../../../styles/pages/main.module.css";
import mainLogo from "../../../asset/images/mainlogo2.png";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";
import {Mobile, PC} from "../../config/Responsive";

const Signup = () => {
  const nav = useNavigate();
  const loginMethods = () => {
    nav('/');
  }

  const signupHandler = () => {
    nav('/category');
  }

  return (
    <div>
      <PC>
        <div className={classes.pcWrap} >
          <p className={classes.pcWrapInner}>화면을 550px 이하로 줄여 주세요.</p>
        </div>
      </PC>
      <Mobile>
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
            <span>이미 회원이신가요 ?</span>
          </div>
        </div>
      </Mobile>
    </div>
  );
}

export default Signup;