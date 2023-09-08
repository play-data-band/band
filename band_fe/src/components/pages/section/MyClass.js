import React, {useEffect, useState} from 'react';
import classes from "../../../styles/pages/Main.module.css";
import myClasses from "../../../styles/pages/MyClass.module.css";
import {Mobile, PC} from "../../config/Responsive";
import Header from "../Layout/Header";
import FixedMenuBar from "../Layout/FixedMenuBar";
import UserClass from "../../blocks/UserClass";
import {categoryMenu} from "../../../common/Menus";
import Category from "../../blocks/Category";
import SuggestComunity from "../../blocks/SuggestComunity";
import Carousel2 from "../../blocks/Carousel2";

const MyClass = () => {
  const [showFixedMenuBar, setShowFixedMenuBar] = useState(false);
  const [isCategoryMore, setIsCategoryMore] = useState(true);
  const [categoryCount, setCategoryCount] = useState(10);
  const [categoryMenuLength, setCategoryMenuLength] = useState(categoryMenu.length);
  const [categoryMoreText, setCategoryMoreText] = useState(true);
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

  useEffect(() => {
    const handleScroll = () => {
      // 여기에 스크롤 이벤트 핸들링 로직을 추가
      if (window.scrollY > 0) {
        // 스크롤이 내려갈 때
        setShowFixedMenuBar(true);
      } else {
        // 스크롤을 가장 위로 올릴 때
        setShowFixedMenuBar(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categoryMoreShow = () => {
    setIsCategoryMore(!isCategoryMore);
    setCategoryMoreText(false);
  }


  return (
    <>
      <PC>
        <div className={classes.pcWrap} >
          <p className={classes.pcWrapInner}>화면을 550px 이하로 줄여 주세요.</p>
        </div>
      </PC>
      <Mobile>
        <div className={classes.fixedSpace}>
          <Header />

          <div className={myClasses.classWrap}>
            <div><h2 className={myClasses.titleText}>내 주변에 새로 생겼어요</h2></div>
          </div>

          <div className={myClasses.slideWrap}>
            <Carousel2 data={dummy} />
          </div>

          <div className={myClasses.classWrap}>
            <div><h2 className={myClasses.titleText}>가입한 모임</h2></div>
          </div>

          <div className={myClasses.userClassWrap}>
            <UserClass />
            <UserClass />
            <UserClass />
            <UserClass />
          </div>

          <div style={{marginBottom : '0'}} className={myClasses.classWrap}>
            <div><h2 className={myClasses.titleText}>모임 찾기</h2></div>
          </div>

          <div className={classes.categoryArea}>
            {(isCategoryMore ? categoryMenu.slice(0, categoryCount) : categoryMenu.slice(0, categoryMenuLength)).map((item, idx) => (
              <div key={idx}  className={classes.categoryAreaWrap}>
                <Category mb='2vw' textWidth='auto' color='#333' width='13vw' height='13vw' imgPath={item.imgPath} value={item.menuName} />
              </div>
            ))}
          </div>

          <div className={classes.categoryMoreArea}>
            <p onClick={categoryMoreShow} className={classes.categoryMoreAreaParam}>{categoryMoreText ? '카테고리 더보기' : '카테고리 접기'}</p>
          </div>

          <div className={myClasses.classWrap}>
            <div><h2 className={myClasses.titleText}><span>음악/악기</span> 맞춤추천</h2></div>
          </div>

          <div className={myClasses.suggestionPadding}>
            <SuggestComunity />
            <SuggestComunity />
            <SuggestComunity />
            <SuggestComunity />
            <SuggestComunity />
          </div>

          {/* bottom={showFixedMenuBar ? '0' : '-20vw'} */}
          <FixedMenuBar />
        </div>
      </Mobile>
    </>
  );
};

export default MyClass;