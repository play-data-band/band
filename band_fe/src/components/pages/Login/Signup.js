import classes from "../../../styles/pages/Main.module.css";
import mainLogo from "../../../asset/images/mainlogo2.png";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import {useNavigate} from "react-router-dom";
import {Mobile, PC} from "../../config/Responsive";
import Loading from "../../atoms/Loading";
import {useState} from "react";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const loginMethods = () => {
    nav('/');
  }

  const signupHandler = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      nav('/category');
    }, 700);

  }

  const loginHandler = () => {
    nav('/');
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // 선택한 파일
    // 여기에서 파일 업로드 로직을 구현하거나, 서버로 파일을 전송하는 등의 처리를 수행할 수 있습니다.
    console.log("업로드된 파일:", file);
  };

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
          <Input placeholder="홍길동" value="성함" type="text" />
          <Input placeholder="ENFJ" value="Mbti" type="text" />
          {/*<Input placeholder="" value="프로필 이미지" type="text" />*/}
          <Input
            placeholder="프로필 이미지"
            value="프로필 이미지"
            type="file"
            accept="image/*" // 이미지 파일만 허용
            onChange={(e) => handleImageUpload(e)}
          />
          <div className={classes.findArea}></div>
          <Button onClick={signupHandler} value="회원가입" />
        </div>
        <div className={classes.signupArea}>
          <div className={classes.signupAreaInner}>
            <span onClick={loginHandler}>이미 회원이신가요 ?</span>
          </div>
        </div>
        {loading && <Loading />}
      </Mobile>
    </div>
  );
}

export default Signup;