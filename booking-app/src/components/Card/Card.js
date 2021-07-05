import React from "react";
import "./Card.css";
import Button from "../UI/Button/Button";
const card = (props) => {
  /*const [inputTitle, setInputTitle] = useState("");
    const [inputAmount, setInputAmount] = useState("");
    const submitHandler = (event) => {
      event.preventDefault();
      // ...
    };*/

  return (
    <div className="Card">
      <div className="Group">
        <div>
          <p className="Highlight">{props.status}</p>
          <p className="Dim">
            {props.data.bookingTime} , {props.data.bookingDate}
          </p>
        </div>
      </div>
      <div className="Group">
        <div>
          <p className="Highlight-blue">{props.data.customerName}</p>
          <p>{props.data.customerLocation}</p>
        </div>
        <div>
          <p>You two had {props.data.previousDeals} deals before</p>
        </div>
      </div>
      <div className="Group Dim">
        <p>{props.displayText}</p>
      </div>
      <div>
        <div className="Group">
          <p>{props.data.sessionDate}</p>
          <p>{props.data.sessionTime}</p>
        </div>
      </div>
      <div className="Group Highlight-blue">
        <p>{props.data.sessionlocation}</p>
      </div>

      <div className="Button-group">
        <Button btnType={props.btnDetails.btn1.btnType}>
          {props.btnDetails.btn1.btnText}
        </Button>
        <Button
          btnType={props.btnDetails.btn2.btnType}
          clicked={() =>
            props.btnDetails.btn2.updateStatus(props.data.bookingId)
          }
        >
          {props.btnDetails.btn2.btnText}
        </Button>
        <p className="Highlight-blue">...More</p>
      </div>
    </div>
  );
};

export default card;
