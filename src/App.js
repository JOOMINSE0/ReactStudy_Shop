import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
    <Routes>
      <Route path="/" element={<div>
        <div className='main-bg'></div>
      <div className="container">
        <div className="row">
          {
            shoes.map((a, i)=>{
              return(
                <Card shoes={shoes[i]} i={i} ></Card>
              )
            })}
        </div>
      </div>
      <button onClick={()=>{
        //로딩중 ui띄우기
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{ 
          console.log(result.data); //핵심 데이터만 보고싶은 경우
          console.log(shoes);
          let copy = [...shoes, ...result.data];
          setShoes(copy);
          //로딩중 ui숨기기
        })
        .catch(()=>{
          //로딩중 ui숨기기
          console.log('데이터를 가져오는데 실패했습니다.');
        })

        axios.post('url', {name: 'kim'}) //서버로 데이터 전송하는 post

        Promise.all([axios.get('url1'), axios.get('url2') ])

      }}>더보기</button>
      </div>}/>
      
    <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
    </Routes>

    <button onClick={()=>{
      let copy  = [...shoes].sort((a,b) => a.title.localeCompare(b.title));
      setShoes(copy);
    }}>가나다순정렬</button>
 
    
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;
