import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail (props){
    let {id} = useParams();
    let 찾은상품 = props.shoes.find((x)=>x.id == id);
    let [count, setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');

    useEffect(()=>{
        if(isNaN(num) == true){
            window.alert('숫자만 입력해주세요')
        }
    }, [num])

    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false) }, 2000)

        return ()=>{
            clearTimeout(a)
            
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
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        </div> 
    )

}

export default Detail;
