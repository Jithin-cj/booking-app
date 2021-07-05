import React from "react";
import Card from "../Card";
const requestCard = (props) => {
  const btnDetails = {
    btn1: { btnText: "Reschedule", btnType: "Primary" },
    btn2: {
      btnText: "Accept Request",
      btnType: "Secondary",
      updateStatus: props.updateStatus,
    },
  };
  const displayText = "This customer is available at";

  return (
    <Card
      data={props.data}
      btnDetails={btnDetails}
      displayText={displayText}
      status="Pending Request"
    />
  );
};

export default requestCard;
