import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../component/cart-tile";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => acc + curr.price, 0);
    setTotalCart(total);
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col judtify=center items-center p-3">
                {
                    cart.map(cartItem=><CartTile cartItem={cartItem}/>)
                }
            </div>

        </div>
        <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-bold text-lg text-gray-950">Your Cart Summary</h1>
                <p>
                    <span className="text-blue-900 font-bold">Total Items</span>
                    <span>:{cart.length}</span>
                </p>
                <p>
                    <span className="text-blue-900 font-bold">Total Amount</span>
                    <span>:{"₹"+totalCart}</span>
                </p>


            </div>

        </div>
                </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2 ">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-blue-950 text-white border-3 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
