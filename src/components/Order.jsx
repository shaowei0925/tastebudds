const Order = (props) => {
  return (
    <div className="flex justify-between items-center gap-10 w-full">
      <div className="flex flex-col gap-2">
        {props.orders &&
          props.orders.map((order, index) => {
            return (
              <div key={index} className="flex gap-4 text-left">
                <p>{order.quantity}x</p>
                <p>{order.name}</p>
              </div>
            );
          })}
      </div>
      <p className="font-medium">Total: ${props.total.toFixed(2)}</p>
    </div>
  );
};

export default Order;
