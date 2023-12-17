import Order from "./Order";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../store/auth-context";
const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/order/${user._id}`)
      .then((res) => {
        setOrders(res.data);
        console.log(res.data[0].items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [user]);

  return (
    <div className="flex flex-col gap-4 max-h-[500px] pr-8 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-gray-100">
      {orders &&
        orders.map((order, index) => {
          const originalTimestamp = order.order_date;
          const date = new Date(originalTimestamp);

          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const day = String(date.getDate()).padStart(2, "0");

          const formattedDate = `${year}/${month}/${day}`;
          return (
            <div
              key={index}
              className="flex items-center gap-4 border-b border-orange-700"
            >
              <p className="font-medium">{formattedDate}</p>
              <Order orders={order.items} total={order.totalAmount} />
            </div>
          );
        })}
    </div>
  );
};

export default OrderHistory;
