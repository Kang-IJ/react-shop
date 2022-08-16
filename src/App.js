import { createContext, useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import data from './data.js';
import Card from './Card.js';
import Detail from './routes/Detail.js';

export const Context1 = createContext();

function App() {

  let [shoes, setShoes] = useState(data);
  let [stock] = useState([10, 11, 12]);
  let [click, setClick] = useState(0);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  // let arr = [1, 2, 3];
  // arr.push(4, 5, 6);
  // console.log(arr);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                  {
                    shoes.map((a, i)=>{
                      return (
                        <Card shoes={shoes[i]} i={i}></Card>
                      )
                    })
                  }
              </div>
            </div>
            {
              loading === true
              ? <div>로딩중입니다.</div>
              : null
            }
            <button onClick={()=>{
              function fetchData(i) {
                fetch(`https://codingapple1.github.io/shop/data${i}.json`)
                .then((response) => response.json())
                .then((data)=> {
                    let copy = [...shoes];
                    copy.push(...data);
                    console.log(copy);
                    setShoes(copy);
                  });
              }
              setClick(click+1);

              if(click === 0) {
                fetchData(2);
              } else if (click === 1){
                fetchData(3);
              } else if (click > 1) {
               alert("더 불러울 상품이 없습니다.");
              };
            }}>버튼</button>
          </>
        } />
        <Route path="/detail/:id" element={ 
          <Context1.Provider value={{stock}}>
            <Detail shoes={shoes}/>  {/* 이제 context로 감싼 컴포넌트들은 모두 stock state의 사용이 가능하다. */}
          </Context1.Provider>
        } />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        <Route path="/about" element={
          <About />
        }>
          <Route path="member" element={
            <div>멤버 정보</div>
          } />
          <Route path="location" element={
            <div>장소 정보</div>
          }/>
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={
            <div>첫 주문시 양배추즙 서비스</div>
          } />
          <Route path="two" element={
            <div>생일기념 쿠폰받기</div>
          } />
        </Route>
      </Routes>

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}
function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}


export default App;
