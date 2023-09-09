import React, {useRef} from 'react';
import classes from "../../../styles/pages/Main.module.css";
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import {Mobile, PC} from "../../config/Responsive";

const ClassDetail = () => {
  const border = useRef();

  const borderAction = (idx) => {

    if (idx === 0) {
      border.current.style.left = '0%';
      return ;
    }

    border.current.style.left = `${idx * 25}%`;
  }

  return (
    <div>
      <PC>
        <div className={classes.pcWrap} >
          <p className={classes.pcWrapInner}>화면을 550px 이하로 줄여 주세요.</p>
        </div>
      </PC>
      <Mobile>
      <div className={myClasses.classDetailWrap}>
        <div className={myClasses.detailHeader}>
          <div className={myClasses.detailHeaderWrap}>
            <div className={myClasses.back}></div>
            <h2></h2>
            <div className={myClasses.iconWrap}>
              <div className={myClasses.heart}></div>
              <div className={myClasses.share}></div>
              <div className={myClasses.more}></div>
            </div>
          </div>
        </div>

        <div className={myClasses.selectArea}>
          <div className={myClasses.selectAreaInner}>
            {["홈", "게시판", "사진첩", "채팅"].map((item,idx) => (
              <div key={idx} onClick={() => {borderAction(idx)}} className={myClasses.selectItem}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className={myClasses.border}>
            <div ref={border} className={myClasses.borderInner}></div>
          </div>
        </div>
      </div>
      </Mobile>
    </div>
  );
};

export default ClassDetail;