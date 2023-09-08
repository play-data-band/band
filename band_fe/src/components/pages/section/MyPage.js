import React, {useState} from 'react';
import {Mobile, PC} from "../../config/Responsive";
import MyPageHeader from "../Layout/MyPageHeader";
import FixedMenuBar from "../Layout/FixedMenuBar";
import classes from "../../../styles/pages/Main.module.css";
import myClasses from "../../../styles/pages/MyPage.module.css";
import set from "../../../asset/images/setblack.png";
import Carousel2 from "../../blocks/Carousel2";

const MyPage = () => {
  const [dummy, setDummy] = useState([
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
    {
      title : '친목 피아노 모임',
      desc : '혼자 연습하는게 재미 없으시죠 ?',
      location: '수원시',
      member : 42,
      tag : '음악/악기'
    },
  ]);

  return (
    <div className={classes.fixedSpace}>
      <PC>
        <div className={classes.pcWrap} >
          <p className={classes.pcWrapInner}>화면을 550px 이하로 줄여 주세요.</p>
        </div>
      </PC>
      <Mobile>
        <MyPageHeader />

        <div className={myClasses.myArea}>
          <div className={myClasses.myAreaLeft}>
            <div className={myClasses.myProfileImg}>
              <div className={myClasses.modiImg}>
                <img src={set} />
              </div>
            </div>
          </div>
          <div className={myClasses.myAreaRight}>
            <h2>이동명</h2>
            <p>
              <span>경기도</span>
              <span>1994.09.11</span>
            </p>
          </div>
        </div>

        <div className={myClasses.mySubj}>
          <div className={myClasses.mySubjWrap}>
            <span className={myClasses.mySubjWrapItem}>헬스/크로스핏</span>
            <span className={myClasses.mySubjWrapItem}>헬스/크로스핏</span>
            <span className={myClasses.mySubjWrapItem}>헬스/크로스핏</span>
            <span className={myClasses.mySubjWrapItem}>헬스/크로스핏</span>
            <span className={myClasses.mySubjWrapItem}>헬스/크로스핏</span>
          </div>
        </div>

        <div className={myClasses.myPageClassWrap}>
          <div><h2 className={myClasses.titleText}>찜한 모임</h2></div>
        </div>

        <div className={myClasses.slideWrap}>
          <Carousel2 data={dummy} />
        </div>

        <div className={myClasses.myPageClassWrap}>
          <div><h2 className={myClasses.titleText}>최근 본 모임</h2></div>
        </div>

        <div className={myClasses.slideWrap}>
          <Carousel2 data={dummy} />
        </div>

        {/* bottom={showFixedMenuBar ? '0' : '-20vw'} */}
        <FixedMenuBar />
      </Mobile>
    </div>
  );
};

export default MyPage;