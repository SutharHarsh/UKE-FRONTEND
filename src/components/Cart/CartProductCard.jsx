import { useDispatch } from "react-redux";
import { updateCartQuantity, removeFromCart } from "../../store/productSlice";
import { Trash2, Plus, Minus } from "lucide-react";

const CartProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const addQuantity = () => {
    dispatch(updateCartQuantity({ id: data.id, quantity: data.quantity + 1 }));
  };

  const minusQuantity = () => {
    if (data.quantity > 1) {
      dispatch(
        updateCartQuantity({ id: data.id, quantity: data.quantity - 1 })
      );
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div
      key={data.id}
      className="border-b border-gray-700 py-4 md:py-6 lg:grid grid-cols-12 items-center gap-4"
    >
      {/* Product Info */}
      <div className="col-span-5 flex items-center space-x-4">
        <button
          onClick={() => removeItem(data.id)}
          className="text-red-500 hover:text-red-400 p-1 cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
        <div className="bg-gray-800 rounded-lg p-3">
          <img src={data.image} className="w-50" alt="product_image" />
        </div>
        <div>
          <div className="text-white font-medium">{data.title}</div>
          <div className="text-gray-400 text-sm">{data.description}</div>
        </div>
      </div>

      {/* Price */}
      <div className="col-span-2 text-center text-green-400 font-medium">
        ${data.price}
      </div>

      {/* Quantity */}
      <div className="col-span-3 flex items-center justify-center">
        <div className="flex items-center bg-green-600 rounded">
          <button
            onClick={minusQuantity}
            className="px-3 py-1 hover:bg-green-700 cursor-pointer"
          >
            <Minus size={16} />
          </button>
          <span className="px-4 py-1 bg-white text-black min-w-[3rem] text-center">
            {data.quantity}
          </span>
          <button
            onClick={addQuantity}
            className="px-3 py-1 hover:bg-green-700 cursor-pointer"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="col-span-2 text-center text-green-400 font-medium">
        ${(data.price * data.quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartProductCard;