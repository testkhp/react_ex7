import React, { useEffect, useState } from 'react'
import "../style/slide.css";

function Slider() {
  //슬라이드 번호값
  let [sNum,sNumSet] = useState(0);
  //마우스 올렸을 때 슬라이드 멈춤 / 마우스 내리면 다시 재생
  let [toggle,toggleSet] = useState(true);

  //sNum 숫자값이 1초마다 0->1->2->0->1->2
  //리액트 컴포넌트에서는 state값이 어떤것이든 변경사항이 발생해 버리면
  //화면을 다시 재구성해서 보여준다 (랜더링 rendering)
  //useEffect구간이 재호출 됩니다. (여러번 호출되기 때문에)

  useEffect(()=>{
     let autoSlide = setInterval(()=>{
        if(sNum === 2){
            sNumSet(0); //스테이트값 변경함수 호출해서 데이터 전달
        }
        else{
            sNumSet(++sNum); //1씩 증가
        }
     },3000)
     //여기가 바로 자동실행 멈추게 하는 구간
     return()=>{
        clearInterval(autoSlide);
     }
  })

  return (
    <div id="slider">
        <div className='view' style={{marginLeft:(sNum * -100) + "%"}}>
            <div>화면1</div>
            <div>화면2</div>
            <div>화면3</div>
        </div>
        <div className='btns'>
            {/*조건부 삼항연산자로 참 거짓 표현 */}
            <div className='prevBtn' onClick={()=>{(sNum === 0)?sNumSet(2):sNumSet(--sNum)}}>이전</div>
            <div className='nextBtn' onClick={()=>{(sNum === 2)?sNumSet(0):sNumSet(++sNum)}}>이후</div>
        </div>
        <ul className='circleBtn'>
            <li className={(sNum === 0)?"on":""} onClick={()=>{sNumSet(0)}}></li>
            <li className={(sNum === 1)?"on":""} onClick={()=>{sNumSet(1)}}></li>
            <li className={(sNum === 2)?"on":""} onClick={()=>{sNumSet(2)}}></li>
        </ul>
    </div>
  )
}

export default Slider