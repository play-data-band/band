import React, {useState} from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classes from "../../../styles/pages/ClassDetailAlbum.module.css";
import classImg from "../../../asset/images/class.jpeg";
import like from "../../../asset/images/like.png";
import addBtn from "../../../asset/images/add.png";
import Loading from "../../atoms/Loading";
import {useNavigate} from "react-router-dom";

const ClassDetailAlbum = (props) => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();


  const createAlbumHandler = () => {
    setLoading(true);

    setTimeout(() => {
      nav(`/createAlbum?communityId=${props.communitiyId}`);
    }, 500);
  }

  return (
    <div className={myClasses.mainSwiperSection}>
      <div className={classes.albumWrap}>
        <div className={classes.albumWrapInner}>
          {props.communityAlbums.length != 0  ? props.communityAlbums.map((item, idx) => (
            <div key={idx} className={classes.albumItem}>
              <img src={item.imgPath} />
              <div className={classes.likeArea}>
                <img src={like} /><p>{item.likeCount}</p>
              </div>
            </div>
          )) : <p style={{margin: '0 auto', height: '100%', background : '#fff', paddingTop: '10vw'}}>등록된 사진이 없습니다.</p>}
        </div>
      </div>
      <div onClick={createAlbumHandler} className={classes.createCommunity}>
        <img src={addBtn} />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default ClassDetailAlbum;