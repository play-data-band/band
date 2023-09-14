import React from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classes from "../../../styles/pages/ClassDetailAlbum.module.css";
import classImg from "../../../asset/images/class.jpeg";
import like from "../../../asset/images/like.png";

const ClassDetailAlbum = () => {
  return (
    <div className={myClasses.mainSwiperSection}>
      <div className={classes.albumWrap}>
        {[1,2,3,4,5,6,7,8,9,10].map((item, idx) => (
          <div key={idx} className={classes.albumItem}>
            <img src={classImg} />
            <div className={classes.likeArea}>
              <img src={like} /><p>82</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDetailAlbum;