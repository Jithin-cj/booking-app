import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Curosal from "../../components/Curosal/Curosal";
import RequestCard from "../../components/Card/RequestCard/RequestCard";
import { customerData } from "../../ExternalJson";
import "./Request.css";
const Request = (props) => {
  const dispatch = useDispatch();
  const bookingStatus = useSelector((state) => state.bookingStatus);
  const [showMoreFlag, setshowMoreFlag] = useState("N");

  const statusHandler = (bookingId) => {
    dispatch({ type: "UPDATE_STATUS", id: bookingId, status: "ACTIVE" });
  };

  let requestDataAll = useCallback(() => {
    const requestStatusId = [];
    bookingStatus.map((booking) => {
      if (booking.status === "PENDING") {
        requestStatusId.push(booking.id);
      }
      return 0;
    });
    return customerData.filter((booking) => {
      console.log("booking" + booking);
      return requestStatusId.indexOf(booking.bookingId) >= 0;
    });
  }, [bookingStatus]);
  console.log("requestData" + requestDataAll.length);
  const [requestData, setrequestData] = useState(requestDataAll);
  useEffect(() => {
    setrequestData(requestDataAll);
  }, [requestDataAll]);

  const showMoreHandler = () => {
    setshowMoreFlag("Y");
  };
  return (
    <div className="Request">
      <Curosal />
      {showMoreFlag === "N" && requestData.length > 5
        ? requestData
            .slice(0, 5)
            .map((requestData) => (
              <RequestCard
                key={requestData.bookingId}
                data={requestData}
                updateStatus={statusHandler}
              />
            ))
        : requestData.map((requestData) => (
            <RequestCard
              key={requestData.bookingId}
              data={requestData}
              updateStatus={statusHandler}
            />
          ))}
      <p onClick={showMoreHandler}>
        {showMoreFlag === "Y" || requestData.length <= 5
          ? "No more Details"
          : "View more"}
      </p>
    </div>
  );
};
export default Request;
