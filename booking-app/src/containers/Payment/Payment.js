import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PaymentCard from "../../components/Card/PaymentCard/PaymentCard";
import { customerData } from "../../ExternalJson";
import "./Payment.css";
const Payment = (props) => {
  const dispatch = useDispatch();
  const [showMoreFlag, setshowMoreFlag] = useState("N");

  const bookingStatus = useSelector((state) => state.bookingStatus);
  console.log("Service" + bookingStatus);
  const statusHandler = (bookingId) => {
    dispatch({ type: "UPDATE_STATUS", id: bookingId, status: "PAYMENT" });
  };

  let paymentDataAll = useCallback(() => {
    const paymentStatusId = [];
    bookingStatus.map((booking) => {
      if (booking.status === "PAYMENT") {
        paymentStatusId.push(booking.id);
      }
      return 0;
    });
    return customerData.filter((booking) => {
      console.log("booking" + booking);
      return paymentStatusId.indexOf(booking.bookingId) >= 0;
    });
  }, [bookingStatus]);
  const [paymentData, setPaymentData] = useState(paymentDataAll);
  useEffect(() => {
    setPaymentData(paymentDataAll);
  }, [paymentDataAll]);

  const showMoreHandler = () => {
    setshowMoreFlag("Y");
  };
  return (
    <div className="Payment">
      {showMoreFlag === "N" && paymentData.length > 5
        ? paymentData
            .slice(0, 5)
            .map((paymentData) => (
              <PaymentCard
                key={paymentData.bookingId}
                data={paymentData}
                updateStatus={statusHandler}
              />
            ))
        : paymentData.map((paymentData) => (
            <PaymentCard
              key={paymentData.bookingId}
              data={paymentData}
              updateStatus={statusHandler}
            />
          ))}
      <p onClick={showMoreHandler}>
        {showMoreFlag === "Y" || paymentData.length <= 5
          ? "No more Details"
          : "View more"}
      </p>
    </div>
  );
};

export default Payment;
