import { useSelector } from "react-redux";

const createOrder = async () => {

    const { cartSubTotal, discount, finalPrice } = useSelector((store) => store.delivery);
    const productData = useSelector((store) => store.product.productData)

    const orderItems = productData.map((item) => (
        {
            product: item.documentId,
            quantity: item.quantity
        }))

    const response = await fetch("https://uke-strapi.onrender.com/api/orders", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                total_price: finalPrice,
                cart_subtotal_price: cartSubTotal,
                discount: discount,
                order_item: orderItems,
                shipping: [
                    {
                        id: 80,
                    }
                ]
            },
        }),
    });

    const data = await response.json();
    console.log(data);
};

export default createOrder;