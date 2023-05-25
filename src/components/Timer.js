import React, { useEffect, useState } from 'react'

function Timer() {
  //연도부터 요일까지 관련 데이터값 state
  let [year,yearSet] = useState();
  let [month,monthSet] = useState();
  let [date,dateSet] = useState();
  let [hours,hoursSet] = useState();
  let [minuts,minutsSet] = useState();
  let [seconds,secondsSet] = useState();
  let [days,daysSet] = useState();
  let [daysList,daysListSet] = useState(["일","월","화","수","목","금","토"]);

  //사이트 작업시 작업자가 필요한 이벤트나 기능구현을 하고 싶다? side effect
  useEffect(()=>{
    //컴포넌트가 로딩이 되었을 때 (장착되었을 때 app.js에) mount
    //1초마다 한번씩 현재시간을 갱신해서 화면에 보여주는 작업
    let autoTimer = setInterval(()=>{
        let dateTest = new Date(); //시간관련 객체 생성
        yearSet(dateTest.getFullYear()); //연도
        monthSet(dateTest.getMonth() + 1); // 월
        dateSet(dateTest.getDate()); // 일
        hoursSet(dateTest.getHours()); //시
        minutsSet(dateTest.getMinutes()); //분
        secondsSet(dateTest.getSeconds()); //초
        daysSet(dateTest.getDay());
        //요일 -> 정수값 -> 해당 정수값으로 배열에 있는 순번과 매칭되는 문자열을 꺼내와야함
    },1000);
   
    return()=>{
        clearInterval(autoTimer);
         //컴포넌트가 제거가 되었을 때  unmount 
         // window에 이벤트가 걸려있을 때 제거하는 용도
         // 자동실행함수 setInterval() 를 멈추게 하는 용도    
    }
   
  })

  return (
    <div id="timer">
        <div className="year">{year}년</div>
        <div className="month">{month}월</div>
        <div className="date">{date}일</div>
        <div className="hours">{hours}시</div>
        <div className="minuts">{minuts}분</div>
        <div className="seconds">{seconds}초</div>
        <div className="days">{daysList[days]}요일</div>
    </div>
  )
}

export default Timer

