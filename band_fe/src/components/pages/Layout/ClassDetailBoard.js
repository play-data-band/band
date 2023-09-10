import React from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classes from "../../../styles/pages/ClassDetailBoard.module.css";
import like from "../../../asset/images/like.png";
import comment from "../../../asset/images/comment.png";

const ClassDetailBoard = () => {
  return (
    <div className={myClasses.mainSwiperSection}>

      <div className={classes.notiArea}>
        <div className={classes.notiAreaContent}>
          <p className={classes.notiHighLight}>[필독]</p>
          <p>피아노 모임 회칙</p>
        </div>
        <div className={classes.notiAreaContent}>
          <p className={classes.notiHighLight}>[필독]</p>
          <p>정모 참석 여부</p>
        </div>
      </div>

      <div>
        <div className={classes.boardWrap}>
          <div className={classes.boardContent}>
            <div className={classes.boardTop}>
              <div className={classes.btLeft}>
                <div className={classes.btLeftImg}></div>
                <p>정민균</p>
              </div>
              <div className={classes.btRight}>
                <p>9월 11일 오후 16:23</p>
              </div>
            </div>

            <div className={classes.boardTitle}>
              <p>가입인사에요~</p>
            </div>

            <div className={classes.boardDetail}>
              <p>안녕하세요. 처음 뵙겠습니다.</p>
            </div>

            <div className={classes.likeArea}>
              <div className={classes.likeLeft}>
                <div className={classes.like}>
                  <img src={like} />
                  <p>좋아요</p>
                  <span>3</span>
                </div>
                <div className={classes.comment}>
                  <img src={comment} />
                  <p>댓글</p>
                  <span>3</span>
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

      <div>
        <div className={classes.boardWrap}>
          <div className={classes.boardContent}>
            <div className={classes.boardTop}>
              <div className={classes.btLeft}>
                <div className={classes.btLeftImg}></div>
                <p>정민균</p>
              </div>
              <div className={classes.btRight}>
                <p>9월 11일 오후 16:23</p>
              </div>
            </div>

            <div className={classes.boardTitle}>
              <p>가입인사에요~</p>
            </div>

            <div className={classes.boardDetail}>
              <p>안녕하세요. 처음 뵙겠습니다.</p>
            </div>

            <div className={classes.likeArea}>
              <div className={classes.likeLeft}>
                <div className={classes.like}>
                  <img src={like} />
                  <p>좋아요</p>
                  <span>3</span>
                </div>
                <div className={classes.comment}>
                  <img src={comment} />
                  <p>댓글</p>
                  <span>3</span>
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

      <div>
        <div className={classes.boardWrap}>
          <div className={classes.boardContent}>
            <div className={classes.boardTop}>
              <div className={classes.btLeft}>
                <div className={classes.btLeftImg}></div>
                <p>정민균</p>
              </div>
              <div className={classes.btRight}>
                <p>9월 11일 오후 16:23</p>
              </div>
            </div>

            <div className={classes.boardTitle}>
              <p>가입인사에요~</p>
            </div>

            <div className={classes.boardDetail}>
              <p>안녕하세요. 처음 뵙겠습니다.</p>
            </div>

            <div className={classes.likeArea}>
              <div className={classes.likeLeft}>
                <div className={classes.like}>
                  <img src={like} />
                  <p>좋아요</p>
                  <span>3</span>
                </div>
                <div className={classes.comment}>
                  <img src={comment} />
                  <p>댓글</p>
                  <span>3</span>
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


    </div>
  );
};

export default ClassDetailBoard;