import { createStore } from "redux";
import { customerData } from "../ExternalJson";

let bookingStatus = [];

bookingStatus = customerData.map((booking, id) => {
  console.log(bookingStatus);
  return {
    ...bookingStatus,
    id: booking.bookingId,
    status: booking.bookingStatus,
  };
});
console.log(bookingStatus);

const bookingStatusReducer = (
  state = { bookingStatus: bookingStatus },
  action
) => {
  if (action.type === "UPDATE_STATUS") {
    let updatedbookingStatus = state.bookingStatus.filter((booking) => {
      console.log("booking.bookingId" + booking.id);
      console.log(action.id);
      return booking.id !== action.id;
    });
    console.log("length" + updatedbookingStatus.length);
    updatedbookingStatus.push({ id: action.id, status: action.status });
    console.log(updatedbookingStatus);

    return { bookingStatus: updatedbookingStatus };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  console.log("state" + state);
  return state;
};

const store = createStore(bookingStatusReducer);

export default store;
