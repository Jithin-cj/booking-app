import React from "react";
import Card from "../Card";
const paymentCard = (props) => {
  const btnDetails = {
    btn1: { btnText: "Start a Chat", btnType: "Primary" },
    btn2: {
      btnText: "Resend Invoice",
      btnType: "Secondary",
      updateStatus: props.updateStatus,
    },
  };
  const displayText = "Service is complete, please confirm payment amount";

  return (
    <Card
      data={props.data}
      btnDetails={btnDetails}
      displayText={displayText}
      status="Pending Payment"
    />
  );
};

export default paymentCard;
