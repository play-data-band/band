import Header from "../Layout/Header";
import {Mobile, PC} from "../../config/Responsive";
import classes from "../../../styles/pages/Main.module.css";
import {useEffect, useRef, useState} from "react";
import banner from "../../../asset/images/banner.png";
import Category from "../../blocks/Category";
import {categoryMenu} from "../../../common/Menus";
import SuggestComunity from "../../blocks/SuggestComunity";
import FixedMenuBar from "../Layout/FixedMenuBar";
import {useNavigate} from "react-router-dom";

const Main = () => {
  const border = useRef();
  const [categoryMoreText, setCategoryMoreText] = useState(true);
  const [isCategoryMore, setIsCategoryMore] = useState(true);
  const [categoryMenuLength, setCategoryMenuLength] = useState(categoryMenu.length);
  const [categoryCount, setCategoryCount] = useState(10);
  const [showFixedMenuBar, setShowFixedMenuBar] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const borderAction = (idx) => {

    if (idx === 0) {
      border.current.style.left = '0%';
      return ;
    }

    border.current.style.left = `${idx * 33.3}%`;
  }

  const categoryMoreShow = () => {
    setIsCategoryMore(!isCategoryMore);
    setCategoryMoreText(false);
  }

  const goToDetail = () => {
    nav('/classDetail')
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
          <div className={classes.selectArea}>
            <div className={classes.selectAreaInner}>
              {["추천모임", "소모임 일정", "신규모임"].map((item,idx) => (
                <div key={idx} onClick={() => {borderAction(idx)}} className={classes.selectItem}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className={classes.border}>
              <div ref={border} className={classes.borderInner}></div>
            </div>
          </div>
          <div className={classes.bannerWrap}>
            <img className={classes.bannerImg} src={banner} />
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

            <div className={classes.suggestionWrap}>
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
            <SuggestComunity onClick={goToDetail} />
          </div>

          {/* bottom={showFixedMenuBar ? '0' : '-20vw'} */}
          <FixedMenuBar />
        </div>
      </Mobile>
    </>

  )
}

export default Main;