import PaymentInformationForm from "../../components/Cart/PaymentInformationForm";
import Summary from "../../components/Cart/Summary";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { sendShippingData } from "../../api/sendShippingData";
import { updateShipping } from "../../store/shippingSlice";
import createOrder from "../../api/createOrder";

const PaymentPage = () => {
  const shippingType = useSelector((store) => store.shipping.shippingType);
  const amount = useSelector((store) => store.delivery.finalPrice);
  const formData = useSelector((state) => state.shipping);

  const dispatch = useDispatch();

  // createOrder();
  // sendShippingData(formData);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center mb-8">
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            My Cart
          </div>
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            Delivery
          </div>
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            Payment
          </div>
          <div className="flex-1 bg-gray-600 text-gray-300 text-center py-2 font-semibold">
            Confirmation
          </div>
        </div>

        <div className="mx-auto w-full grid grid-cols-3 gap-8">
          {/* Payment Information */}

          <div className="col-span-1">
            <PaymentInformationForm />
          </div>

          {/* Summary */}
          <div className="bg-gray-900 col-span-2 rounded-lg p-6 border border-gray-800 h-fit">
            <div className="">
              <Summary />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                Shipping
                <NavLink to="/cart/productdelivery">
                  <button className="text-green-500 text-xs hover:underline cursor-pointer">
                    View Shipping Details
                  </button>
                </NavLink>
              </h3>
              <div>
                <div className="text-sm font-medium mb-1">{shippingType}</div>
                <div className="text-xs text-gray-400">
                  Delivery is expected to be delivered in 3 to 6 Working days if
                  it free of cost
                </div>
              </div>
            </div>

            <PayPalButtons
              createOrder={async () => {
                const res = await fetch(
                  "https://uke-backend.vercel.app/create-paypal-order",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      amount: amount, // optional: your data
                    }),
                  }
                );

                if (!res.ok) {
                  const text = await res.text();
                  console.error(
                    "create-paypal-order failed:",
                    res.status,
                    text
                  );
                  throw new Error(`createOrder failed: ${res.status}`); // Causes SDK to stop cleanly
                }

                const data = await res.json();
                if (!data?.id) {
                  console.error("No order id in response:", data);
                  throw new Error("No order id returned");
                }
                return data.id;
              }}
              onApprove={async (data) => {
                try {
                  // First store orderID in Redux
                  dispatch(updateShipping({ orderId: data.orderID }));

                  // Then send shipping data with orderId
                  const shippingDataWithOrderId = {
                    ...formData,
                    orderId: data.orderID,
                  };
                  await sendShippingData(shippingDataWithOrderId);

                  // Finally capture the order
                  const res = await fetch(
                    "https://uke-backend.vercel.app/capture-paypal-order",
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ orderID: data.orderID }),
                    }
                  );

                  if (!res.ok) {
                    const text = await res.text();
                    console.error(
                      "capture-paypal-order failed:",
                      res.status,
                      text
                    );
                    throw new Error(`captureOrder failed: ${res.status}`);
                  }

                  const details = await res.json();
                  console.log("PayPal capture details:", details);

                  alert(
                    "Transaction completed by " +
                      (formData.first_name || "Unknown Buyer")
                  );
                } catch (error) {
                  console.error("Payment process failed:", error);
                  alert("Payment process failed. Please try again.");
                }
              }}
              onError={(err) => {
                console.error("PayPal Buttons onError:", err);
                alert(
                  "Something went wrong with PayPal. Check console for details."
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
