import { useSelector } from "react-redux";

const createOrder = async () => {

    const { cartSubTotal, discount, finalPrice } = useSelector((store) => store.delivery);
    const productData = useSelector((store) => store.product.productData)
    // console.log(productData)

    const documentIds = productData.map(item => item.documentId);
    // console.log(documentIds)

    const sample = productData.map((item) => ({
        produt: item.id,
        quantity: documentIds[0],
    }))
    console.log(sample);

    // const orderItems = productData.map((item) => (
    //     {
    //     product: item.id,
    //     quantity: item.quantity
    // }))

    const orderItems = {
        product: 17,
        quantity: 2,
    }

    // console.log(orderItems)

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
                order_item: [
                    {
                        quantity: 2,
                        product: 7,
                    }
                ],
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