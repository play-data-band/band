import React, {useEffect, useState} from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classes from "../../../styles/pages/ClassDetailBoard.module.css";
import like from "../../../asset/images/like.png";
import comment from "../../../asset/images/comment.png";
import addBtn from "../../../asset/images/add.png";
import {useNavigate} from "react-router-dom";
import Loading from "../../atoms/Loading";
import {likeInsert, likeInsertFunc} from "../../../common/api/ApiPostService";
import {useSelector} from "react-redux";

const ClassDetailBoard = (props) => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const userInfo = useSelector(state => state.loginCheck.loginInfo);

  const createBoardHandler = () => {
    setLoading(true);

    setTimeout(() => {
      nav(`/createBoard?communityId=${props.communitiyId}`);
    }, 500);

  }

  const likeHandler = (data) => {

    likeInsertFunc('board', data.id, userInfo.userSeq).then((res) => {
      props.findByCommunityBoardService(props.communitiyId);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className={myClasses.mainSwiperSection}>

      {props.communityBoards.length != 0 && <div className={classes.notiArea}>
        <div className={classes.notiAreaContent}>
          <p className={classes.notiHighLight}>[필독]</p>
          <p>정모 참석 여부</p>
        </div>
      </div>}

      {props.communityBoards.length != 0 ? props.communityBoards.map((item, idx) => (
        <div key={idx}>
          <div className={classes.boardWrap}>
            <div className={classes.boardContent}>
              <div className={classes.boardTop}>
                <div className={classes.btLeft}>
                  <div className={classes.btLeftImg}>
                    <img src={item.memberImage} />
                  </div>
                  <p>{item.memberName}</p>
                </div>
                <div className={classes.btRight}>
                  <p>9월 11일 오후 16:23</p>
                </div>
              </div>

              <div className={classes.boardTitle}>
                <p>{item.title}</p>
              </div>

              <div className={classes.boardDetail}>
                <p>{item.content}</p>
              </div>

              <div className={classes.likeArea}>
                <div className={classes.likeLeft}>
                  <div onClick={() => {likeHandler(item)}} className={classes.like}>
                    <img src={like} />
                    <p>좋아요</p>
                    <span>{item.likeCount}</span>
                  </div>
                  <div className={classes.comment}>
                    <img src={comment} />
                    <p>댓글</p>
                    <span>0</span>
                  </div>
                </div>
                <div className={classes.likeRight}>
                  <p>가입인사</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.space}></div>
        </div>
      )) : <p style={{textAlign : 'center', height: '100%', background : '#fff', paddingTop: '10vw'}}>등록된 게시글이 없습니다.</p>}

      <div onClick={createBoardHandler} className={classes.createCommunity}>
        <img src={addBtn} />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default ClassDetailBoard;