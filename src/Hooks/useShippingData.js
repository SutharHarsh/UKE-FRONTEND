import axios from "axios"

const useShippingData = async (id) => {
    const API_URL = "https://uke-strapi.onrender.com/api/shippings";

    const res = await axios.get(API_URL);

    // Array of orders
    const info = res.data.data;
    // console.log(info)

    const yoo = info.filter((shippingData) => shippingData.id !== id);

    // console.log(yoo);

    // Get last object
    const shippingInfo = info[info.length - 1];

    // console.log("Last Order:", shippingInfo);


    return shippingInfo;

}

export default useShippingData
