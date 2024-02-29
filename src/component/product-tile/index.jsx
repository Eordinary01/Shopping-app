import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div
        className={`group flex flex-col items-center border-2 border-red-950 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl transition-transform duration-300 transform ${
          isHovered ? "hover:border-gray-950 hover:scale-105" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-[180px] relative overflow-hidden">
          <img
            src={product?.image}
            alt="Not Avaiable"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="text-lg font-bold text-grey-450 ">{product?.title}</div>
        <div className="text-xl text-blue-800 ">{"₹" + product?.price}</div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={
              cart.some((item) => item.id === product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className=" bg-blue-950 text-white border-3 rounded-lg font-bold p-4"
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from Cart"
              : " Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
