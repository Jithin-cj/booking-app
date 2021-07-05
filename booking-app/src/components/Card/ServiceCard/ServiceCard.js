import React from "react";
import Card from "../Card";
const serviceCard = (props) => {
  const btnDetails = {
    btn1: { btnText: "Check In", btnType: "Secondary" },
    btn2: {
      btnText: "Generate Invoice",
      btnType: "Secondary",
      updateStatus: props.updateStatus,
    },
  };
  const displayText = "Check inhere  or scan customers QR code";
  console.log("service.length" + props.data.length);
  return (
    <Card
      data={props.data}
      btnDetails={btnDetails}
      displayText={displayText}
      status="Upcoming Service"
    />
  );
};

export default serviceCard;
