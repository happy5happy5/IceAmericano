import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
    const API_ENDPOINT = 'http://localhost:9090'; // 스프링 부트 서버의 주소

    const [count, setCount]=useState(0);
    const fetchData = async () => {
        const result = await axios.get(`${API_ENDPOINT}/api/data`);
        console.log(result.data); // 스프링 부트에서 반환한 데이터 출력
    };



    // 아래쪽은 vite로 프로잭트 생성시 만들어지는 template
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <button onClick={() => {
              fetchData()
              setCount((count) => count + 1)
          }}>버튼 눌러보셈
        </button>
          <h1>{count}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
          <h1>
              받아온 데이터는 콘솔에 찍히게 해놨음요
          </h1>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
