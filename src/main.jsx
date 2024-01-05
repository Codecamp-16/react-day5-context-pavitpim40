import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// React Context : Store ไว้เก็บข้อมูล,ฟังก์ชันที่เป็นส่วนกลาง (ให้ Componet หยิบไปใช้ได้)

// Step-1 : สร้าง Context
const MyContext = React.createContext();
export { MyContext };
// Keyword : Provider ผู้ที่จัดหาข้อมูล,ฟังก์ชันให้
// Keyword : Consumer ผู้ที่ใช้งานข้อมูล,ใช้งานฟังก์ชันจาก Provider

// Step-2 : สร้าง​ Provider => สร้าง FC 1 ตัว
function MyContextProvider({ children }) {
  //  Step-2.1 : สิ่งที่ต้องการ share
  const data = 41;
  const add = (x, y) => x + y;

  // Step-2.2 : แพ็ครวมสิ่งที่ต้องการ share
  const sharedObj = { data, add };

  // Step-2.3 : ส่งของผ่าน attribute ชื่อว่า value
  return <MyContext.Provider value={sharedObj}>{children}</MyContext.Provider>;
}

// Step-3 : เอา Provide ไปครอบ Tag ที่ต้องการเรียกใช้งานของที่ share
ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);

// Step-4 : ฝั่ง consumer => จะทำใน Component ที่ใช้งาน
