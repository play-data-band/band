import React, {useEffect, useRef, useState} from 'react';
import classes from "../../styles/blocks/SuggestComunity.module.css";
import piano from "../../asset/images/piano.jpeg";

const UserClass = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const backgroundRef = useRef();


  const suggestionClickMethod = () => {
    backgroundRef.current.style.background = 'rgb(229 226 226)';

    setTimeout(() => {
      backgroundRef.current.style.background = '#fff';
    }, 100);
  }

  return (
    <div style={{marginBottom : '2vw'}}>
      <div ref={backgroundRef} onClick={suggestionClickMethod} className={classes.suggestionArea}>
        <div className={classes.suggestionLeft}>
          <div className={classes.suggestionLeftInner}><img src={piano} /></div>
        </div>
        <div className={classes.suggestionRight}>
          <div className={classes.classRightInner}>
            <h2 className={classes.classTitle}>피아노를 사랑하는 사람들의 모임</h2>
            <div className={classes.suggestionDetail}>
              <p className={classes.location}>강남구</p>
              <p className={classes.gb}>|</p>
              <p className={classes.member}>멤버&nbsp;<span>250</span></p>
              <div className={classes.cateWrap}><p>음악/악기</p></div>
            </div>
          </div>
        </div>
      </div>
      <p className={classes.schedule}>9/10 (일) 오후 5:00 - 음치탈출 클래스</p>
    </div>
  );
};

export default UserClass;