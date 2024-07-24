import { useEffect } from "react";
import CartCard from "./Components/CartCard"
import "./Components/cart.css"
import 'bootstrap'
import { saveAllProducts, quantityChange } from "./Redux/Reducers/Cart";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const dispatcher = useDispatch()
  const {items=[]}=useSelector((store)=>store.Cart)
  useEffect(() => {
    fetch("http://localhost:5173/products.json").then((response) => response.json()).then((result) => {dispatcher( saveAllProducts(result.products)); }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <div>
        <div className="cart-items-container py-5 divider ">
          {items.map((item, index) => (
            <CartCard
              key={`${item.title}-${index}`}
              data={item}
              dispatcher={dispatcher}
              quantityChange={quantityChange}
            />
          ))}
        </div>
        <div className="py-5 divider">
          <div className="row mb-3">
            <div className="col-6">SUBTOTAL</div>
            <div className="col-6 d-flex justify-content-end">
              <b>$249.00</b>
            </div>
          </div>
          <div className="row">
            <div className="col-6">SHIPPING</div>
            <div className="col-6 d-flex justify-content-end">
              <b>Free</b>
            </div>
          </div>
        </div>
        <div className="py-5 divider">
          <div className="row mb-3">
            <div className="col-6">TOTAL</div>
            <div className="col-6 d-flex justify-content-end">
              <b>$249.00</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
