import React from 'react'
import './AppXY.css'
import {useState} from 'react';

export default function AppXY() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const [position, setPosition] = useState({x:0, y:0}) // 상태를 객체 단위로 보관하, 업데이트 함

  return (
    <div className='container' onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        //setPosition({x: e.clientX, y: e.clientY})
        // 만약 수평으로만 이동이 가능하다면?
        setPosition(prev => ({...prev, x: e.clientX, }))

        // 하나의 콜백함수 안에서 set을 여러번 하면 React가 자동으로 상태를 업데이트 해줌
        // 상태 변경시 변동 사항을 묶어서 Virtual DOM을 만들어서 브라우저에서 업데이트
        // But, 비동기적으로 여러 곳에서 set을 사용하면 효율적이지 않음
        // 따라서, 한번에 set 해주는게 좋음(position 참고)
    }}>
        <div className='pointer' style = {{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
    </div>
  )
}
