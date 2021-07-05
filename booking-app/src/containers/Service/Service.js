import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ServiceCard from "../../components/Card/ServiceCard/ServiceCard";
import { customerData } from "../../ExternalJson";
import "./Service.css";
const Service = (props) => {
  const dispatch = useDispatch();
  const [showMoreFlag, setshowMoreFlag] = useState("N");

  const bookingStatus = useSelector((state) => state.bookingStatus);
  const statusHandler = (bookingId) => {
    dispatch({ type: "UPDATE_STATUS", id: bookingId, status: "PAYMENT" });
  };
  let serviceDataAll = useCallback(() => {
    const paymentStatusId = [];
    bookingStatus.map((booking) => {
      if (booking.status === "ACTIVE") {
        paymentStatusId.push(booking.id);
      }
      return 0;
    });
    return customerData.filter((booking) => {
      console.log("booking" + booking);
      return paymentStatusId.indexOf(booking.bookingId) >= 0;
    });
  }, [bookingStatus]);
  const [serviceData, setServiceData] = useState(serviceDataAll);
  useEffect(() => {
    setServiceData(serviceDataAll);
  }, [serviceDataAll]);

  const showMoreHandler = () => {
    setshowMoreFlag("Y");
  };

  return (
    <div className="Service">
      {showMoreFlag === "N" && serviceData.length > 5
        ? serviceData
            .slice(0, 5)
            .map((serviceData) => (
              <ServiceCard
                key={serviceData.bookingId}
                data={serviceData}
                updateStatus={statusHandler}
              />
            ))
        : serviceData.map((serviceData) => (
            <ServiceCard
              key={serviceData.bookingId}
              data={serviceData}
              updateStatus={statusHandler}
            />
          ))}
      <p onClick={showMoreHandler}>
        {showMoreFlag === "Y" || serviceData.length <= 5
          ? "No more Details"
          : "View more"}
      </p>
    </div>
  );
};

export default Service;
