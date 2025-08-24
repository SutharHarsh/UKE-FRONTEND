// src/api/orders.js
import axios from "axios";

const API_URL = "https://uke-strapi.onrender.com/api/shippings"; // change to your strapi url

// Function to create an order
export const sendShippingData = async (orderData) => {
    const {
        firstName,
        middleName,
        lastName,
        address,
        zipCode,
        country,
        city,
        state,
        cellPhone,
        telephone,
        deliveryTime,
        shippingType,
        email,
        orderId,
    } = orderData;

    const full_name = firstName + " " + middleName + " " + lastName;

    const updatedData = {
        full_name: full_name,
        address: address,
        city: city,
        postal_code: zipCode,
        country: country,
        phone: cellPhone,
        state: state,
        delivery_time: deliveryTime,
        shipping_type: shippingType,
        email: email,
        order_id: orderId,
    }

    try {
        // console.log("📦 Sending data:", JSON.stringify({ data: updatedData }, null, 2));

        const response = await fetch("https://uke-strapi.onrender.com/api/shippings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: updatedData,  // 👈 Strapi requires payload inside "data"
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("❌ Error creating order:", errorData);
            throw new Error(errorData.error?.message || "Failed to create order");
        }

        const data = await response.json();
        console.log("✅ Order created:", data);
        return data;

    } catch (error) {
        console.error("❌ Error creating order:", error.message);
        throw error;
    }


};
