import React, {useEffect, useState} from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classImg from "../../../asset/images/class.jpeg";
import newImg from "../../../asset/images/new.png";
import {communityInsert} from "../../../common/api/ApiPostService";
import {useSelector} from "react-redux";

const ClassDetailMain = (props) => {

  const [dummy, setDummy] = useState([1,2,3])
  const [schedule, setSchedule] = useState(false);
  const [scheduleStates, setScheduleStates] = useState(dummy.map(() => false));
  const userInfo = useSelector(state => state.loginCheck.loginInfo);


  const scheduleHandler = (idx) => {
    const newScheduleStates = [...scheduleStates];
    newScheduleStates[idx] = !newScheduleStates[idx];
    setScheduleStates(newScheduleStates);
  }

  const communityInsertHandler = () => {

    props.setIsConfirmPopupOpen({ show: true, msg: '모임에 가입 하시겠습니까 ?', gb : 'community' });

  }

  const communityInsertCancelHandler = () => {
    props.setIsConfirmPopupOpen({ show: true, msg: '모임을 취소 하시겠습니까 ?', gb : 'communityCancel' });
  }


  return (
    <>
      <div className={myClasses.mainSwiperSection}>
        <div className={myClasses.background}>
          <div className={myClasses.classBackground}>
            <img src={props.communityInfo.profileImage} />
          </div>

          <div className={myClasses.tags}>
            <div className={myClasses.tagsItem}>독산동 클래스</div>
            <div className={myClasses.tagsItem}>{props.communityInfo.interest}</div>
            <div className={myClasses.tagsItem}>멤버 <span>{props.communityCount.length === 0 ? '없음' : props.communityCount.length}</span></div>
          </div>

          <div className={myClasses.descArea}>
            <h2>{props.communityInfo.description}</h2>

            <p className={myClasses.descAreaParam}>{props.communityInfo.description}</p>

            <div className={myClasses.insertBtnWrap}>
              {!props.isCommunityMember && <div onClick={communityInsertHandler} className={myClasses.insertBtn}><p>가입하기</p></div>}
              {props.isCommunityMember && <div onClick={communityInsertCancelHandler} className={myClasses.insertBtn}><p>취소하기</p></div>}

            </div>
          </div>


          <div className={myClasses.scheduleArea}>

            <div className={myClasses.scheduleAreaTitle}>
              <h2>일정</h2>
            </div>

            {dummy.map((item, idx) => (
              <div key={idx} className={myClasses.scheduleWrap}>
                {!scheduleStates[idx] && <div onClick={() => scheduleHandler(idx)} className={myClasses.scheduleBtn}><p>참여</p></div>}
                {scheduleStates[idx] && <div onClick={() => scheduleHandler(idx)} className={myClasses.scheduleBtnCancel}><p>취소</p></div>}
                <div className={myClasses.scheduleItem}>

                  <div className={myClasses.topSchedule}>
                    <h2>9/12 (화)</h2><p>D-1</p>
                  </div>

                  <div className={myClasses.secondSchedule}>
                    <p>피아노모임(오후9시~10시25분)</p>
                  </div>

                  <div className={myClasses.descSchedule}>
                    <div>
                      <p>일시</p>
                      <p>9/11 (월) 오후 9:00</p>
                    </div>
                    <div>
                      <p>위치</p>
                      <p>독산동 근처 마라탕 집</p>
                    </div>
                    <div>
                      <p>금액</p>
                      <p>월 회비 32,000원</p>
                    </div>
                    <div>
                      <p>참여</p>
                      <p><span>2</span>/20 (18자리 남음)</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={myClasses.scheduleMember}>

            <div className={myClasses.scheduleAreaTitle}>
              <h2>모임 멤버 (1)</h2>
            </div>

            <div className={myClasses.memberListWrap}>
              <div className={myClasses.memberProfile}>
                <div className={myClasses.memberLeft}>
                  <img />
                </div>
                <div className={myClasses.memberRight}>
                  <div className={myClasses.memberRightInner}>
                    <h2>정민균</h2>
                    <img src={newImg} />
                  </div>
                  <div>
                    <p>안녕하세요.</p>
                  </div>
                </div>
              </div>
              <div className={myClasses.memberProfile}>
                <div className={myClasses.memberLeft}>
                  <img />
                </div>
                <div className={myClasses.memberRight}>
                  <div className={myClasses.memberRightInner}>
                    <h2>정민균</h2>
                    <img src={newImg} />
                  </div>
                  <div>
                    <p>안녕하세요.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassDetailMain;