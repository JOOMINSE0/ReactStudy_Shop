import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail (props){
    let {id} = useParams();
    //let 찾은상품 = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [탭, 탭변경] = useState(0);

    useEffect(()=>{
        if(isNaN(num) == true){
            window.alert('숫자만 입력해주세요')
        }
    }, [num])

    useEffect(()=>{
        //useEffect안에 있는 코드는 hmtl 렌더링 후에 동작
        //어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 장착
        let a = setTimeout(()=>{ setAlert(false) }, 2000)

        return ()=>{
            clearTimeout(a)
        }
    }, [count])

    useEffect(() => { }) // 재렌더링마다 코드 실행하고 싶으면
    useEffect(() => { }, [ ]) // mount시 1회 코드 실행하고 싶으면
    useEffect(() => { 
        return () => {
            //unmount시 1회 코드 실행하고 싶으면
        }
    })



    return(
        
        <div className="container">
            <input onChange={ (e) => {setNum(e.target.value)}}></input>
            {
                alert == true
                ? <div className="alert alert-warning">
                2초이내 구매시 할인
                </div>
                : null
            }

        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        
        {/* defaultActiveKey 기본으로 눌려있을 버튼 */}
        <Nav variant="tabs"  defaultActiveKey="link0"> 
            <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>


        {/* {
            탭 == 0 ? <div>내용0</div> : null
        }
        {
            탭 == 1 ? <div>내용1</div> : null
        }
        {
            탭 == 2 ? <div>내용2</div> : null
        } */}

        </div> 
    )

}

function TabContent({탭}){
    let [fade, setFade] = useState('')

    useEffect(()=>{
        let a = setTimeout(()=>{setFade('end')}, 100)
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    }, [탭])

    return <div className={'start' + fade}>
     { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
     
}

export default Detail;
