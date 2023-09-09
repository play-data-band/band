import React, {useRef, useState} from 'react';
import classes from "../../../styles/pages/Main.module.css";
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import {Mobile, PC} from "../../config/Responsive";
import back from "../../../asset/images/back.png";
import heartFill from "../../../asset/images/heartfill.png";
import heart from "../../../asset/images/heartborder.png";
import share from "../../../asset/images/share.png";
import more from "../../../asset/images/morepng.png";
import classImg from "../../../asset/images/class.jpeg";
import DetailCarousel from "../../blocks/DetailCarousel";

const ClassDetail = () => {
  const border = useRef();
  const [activeSlide, setActiveSlide] = useState(0); // 현재 활성화된 슬라이드 인덱스 상태


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
      el : <div className={myClasses.mainSwiperSection}>
        <div className={myClasses.classBackground}>
          <img src={classImg} />
        </div>

        <div className={myClasses.tags}>
          <div className={myClasses.tagsItem}>독산동 클래스</div>
          <div className={myClasses.tagsItem}>음악/악기</div>
          <div className={myClasses.tagsItem}>멤버 <span>60</span></div>
        </div>

        <div className={myClasses.descArea}>
          <h2>[독산성인피아노]사랑이 넘치는 곳</h2>

          <p>상냥한 쌤들께 피아노 배우실분</p>
        </div>
      </div>
    },
    {
      el : <div className={myClasses.mainSwiperSection}>
        <div className={myClasses.classBackground}>
          <img src={classImg} />
        </div>

        <div className={myClasses.tags}>
          <div className={myClasses.tagsItem}>독산동 클래스</div>
          <div className={myClasses.tagsItem}>음악/악기</div>
          <div className={myClasses.tagsItem}>멤버 <span>61</span></div>
        </div>

        <div className={myClasses.descArea}>
          <h2>[독산성인피아노]사랑이 넘치는 곳</h2>

          <p>상냥한 쌤들께 피아노 배우실분</p>
        </div>
      </div>
    },
    {
      el : <div className={myClasses.mainSwiperSection}>
        <div className={myClasses.classBackground}>
          <img src={classImg} />
        </div>

        <div className={myClasses.tags}>
          <div className={myClasses.tagsItem}>독산동 클래스</div>
          <div className={myClasses.tagsItem}>음악/악기</div>
          <div className={myClasses.tagsItem}>멤버 <span>62</span></div>
        </div>

        <div className={myClasses.descArea}>
          <h2>[독산성인피아노]사랑이 넘치는 곳</h2>

          <p>상냥한 쌤들께 피아노 배우실분</p>
        </div>
      </div>
    },
    {
      el : <div className={myClasses.mainSwiperSection}>
            <div className={myClasses.classBackground}>
              <img src={classImg} />
            </div>

            <div className={myClasses.tags}>
              <div className={myClasses.tagsItem}>독산동 클래스</div>
              <div className={myClasses.tagsItem}>음악/악기</div>
              <div className={myClasses.tagsItem}>멤버 <span>63</span></div>
            </div>

            <div className={myClasses.descArea}>
              <h2>[독산성인피아노]사랑이 넘치는 곳</h2>

              <p>상냥한 쌤들께 피아노 배우실분</p>
            </div>
          </div>
    },

  ]

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
            <div className={myClasses.back}>
              <img src={back} />
            </div>
            <h2>피아노를 사랑하는 사람들의 모임</h2>
            <div className={myClasses.iconWrap}>
              <div className={myClasses.heart}>
                {/*<img src={heartFill} />*/}
                <img src={heart} />
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