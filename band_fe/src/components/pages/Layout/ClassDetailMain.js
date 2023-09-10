import React, {useState} from 'react';
import myClasses from "../../../styles/pages/ClassDetail.module.css";
import classImg from "../../../asset/images/class.jpeg";
import newImg from "../../../asset/images/new.png";

const ClassDetailMain = () => {

  const [dummy, setDummy] = useState([1,2,3])
  const [schedule, setSchedule] = useState(false);
  const [scheduleStates, setScheduleStates] = useState(dummy.map(() => false));

  const scheduleHandler = (idx) => {
    const newScheduleStates = [...scheduleStates];
    newScheduleStates[idx] = !newScheduleStates[idx];
    setScheduleStates(newScheduleStates);
  }

  return (
    <div className={myClasses.mainSwiperSection}>
      <div className={myClasses.background}>
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

          <p>상냥한 쌤들께 피아노 배우실분 !</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailMain;