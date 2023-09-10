import React, {useRef, useState} from 'react';
import classes from "../../../styles/pages/Main.module.css";
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import {Mobile, PC} from "../../config/Responsive";
import back from "../../../asset/images/back.png";
import heart from "../../../asset/images/heartborder.png";
import heartFillImg from "../../../asset/images/heartfill.png";
import share from "../../../asset/images/share.png";
import more from "../../../asset/images/morepng.png";
import DetailCarousel from "../../blocks/DetailCarousel";
import {useNavigate} from "react-router-dom";
import ClassDetailMain from "../Layout/ClassDetailMain";
import ClassDetailBoard from "../Layout/ClassDetailBoard";
import ClassDetailAlbum from "../Layout/ClassDetailAlbum";
import ClassDetailChat from "../Layout/ClassDetailChat";

const ClassDetail = () => {
  const border = useRef();
  const [activeSlide, setActiveSlide] = useState(0); // 현재 활성화된 슬라이드 인덱스 상태
  const [heartFill, setHeartFill] = useState(false);
  const nav = useNavigate();


  const borderAction = (idx) => {

    if (idx === 0) {
      border.current.style.left = '0%';
      setActiveSlide(idx);
      return ;
    }

    border.current.style.left = `${idx * 25}%`;


    // 슬라이드 인덱스를 업데이트
    setActiveSlide(idx);
  }

  const sections = [
    {
      el : <ClassDetailMain />
    },
    {
      el : <ClassDetailBoard />
    },
    {
      el : <ClassDetailAlbum />
    },
    {
      el : <ClassDetailChat />
    }
  ];

  const likeHandler = () => {
    setHeartFill(!heartFill);
  }

  const backHandler = () => {
    nav(-1);
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
            <div className={myClasses.back} onClick={backHandler}>
              <img src={back} />
            </div>
            <h2>피아노를 사랑하는 사람들의 모임</h2>
            <div className={myClasses.iconWrap}>
              <div className={myClasses.heart} onClick={likeHandler}>
                <img src={heartFill ? heart : heartFillImg} />
              </div>
              <div className={myClasses.share}>
                <img src={share} />
              </div>
              <div className={myClasses.more}>
                <img src={more} />
              </div>
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

        <DetailCarousel activeSlide={activeSlide} onSlideChange={borderAction} section={sections} />

      </div>
      </Mobile>
    </div>
  );
};

export default ClassDetail;