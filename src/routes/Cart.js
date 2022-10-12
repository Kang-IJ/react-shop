import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "./../store/cartSlice";
import { addAge } from "./../store/userSlice";

function Cart() {
  
  let state = useSelector((state) => state);
  let dispatch = useDispatch(); /* store.js로 요청 보내주는 함수. dispatch(state변경함수()); 이렇게 사용.*/

  return (
    <div>
    <h6>{ state.user.name }의 장바구니</h6>
    <h6>{ state.user.age }</h6>
    <button onClick={() => {
      dispatch(addAge());
    }}>버튼</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          { 
            state.cart.map((a, i) => {
              return (
                <tr>
                  <td>{ state.cart[i].id }</td>
                  <td>{ state.cart[i].name }</td>
                  <td>{ state.cart[i].count }</td>
                  <td>
                    <button onClick={() => {
                      dispatch(changeQuantity(state.cart[i].id));
                    }}>+</button>
                  </td>
                  <td>
                    <button onClick={()=>{
                      
                    }}>
                      delete
                    </button>
                  </td>
                </tr>
                )
            })
          }

        </tbody>
      </Table>
    </div>
  );
}

export default Cart;