import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Detail(props) {

  const {id} = useParams();
  const value = props.shoes[id].id;
  const [alert, setAlert] = useState(true);
  const [input, setInput] = useState('');
  const [tab, setTab] = useState(0);

  useEffect(()=>{
    let timer = setTimeout(()=>{  
      setAlert(false);
    }, 2000);

      if (isNaN(input) === true) { 
        alert("숫자를 넣어주세요");
      }

    
    
    return ()=>{
      clearTimeout(timer);
    };
  });
  
  return (
    id < 3 &&  value == id
    ?  <div className="container">
      {
        alert === true 
        ? <div className="alert alert-warning">
            2초 이내 구매 시 할인
          </div>
        : null
      }
        
        <div className="row">
          <div className="col-md-6">
            <img src={ 'https://codingapple1.github.io/shop/shoes' + (props.shoes[id].id + 1) + '.jpg' } width="100%" alt="img"/>
            <input onChange={(e)=>{setInput(e.target.value);}} />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}원</p>
            <button className="btn btn-danger">주문하기</button>

          </div>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={ tab }/>

      </div>
    : <div>없는 페이지입니다.</div>
  );
}
function TabContent({tab}) {
  let [fade, setFade] = useState('');
  
  useEffect(()=>{
    setTimeout(()=>{setFade("end")}, 10);
    return () => {
      setFade("");
    }
  }, [tab])
  return ( <div className={"start " + fade }>
  {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
  </div>
  )
}


export default Detail;