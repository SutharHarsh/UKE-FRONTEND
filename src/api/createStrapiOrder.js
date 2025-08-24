// createStrapiOrder.js

const createStrapiOrder = async ({
    productData,
    cartSubTotal,
    discount,
    finalPrice,
    orderId
} = {}) => {
    try {

        const shippingInfo = await fetch("https://uke-strapi.onrender.com/api/shippings");
        const shippingData = await shippingInfo.json();

        const shipping = shippingData.data.filter((item) => item.order_id == orderId);
        const shipping_documentId = shipping[0].documentId;


        // build orderItems from productData
        const orderItems = productData.map((item) => ({
            product: item.documentId,
            quantity: item.quantity,
        }));

        const response = await fetch("https://uke-strapi.onrender.com/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: {
                    total_price: finalPrice,
                    cart_subtotal_price: cartSubTotal,
                    discount,
                    order_item: orderItems,
                    shipping: shipping_documentId,
                },
            }),
        });

        if (!response.ok) {
            throw new Error(`Failed to create order: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Error creating order:", error.message);
        return null;
    }
};

export default createStrapiOrder;
