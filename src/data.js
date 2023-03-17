import moment from "moment";
const date = new Date();

export const initialState = {
  time: "17:00",
  date: `${moment(date).format("YYYY-MM-d")}`,
  diners: 1,
  occasion: "birthday",
  name: "",
  email: "",
};

export const availableTimesInitialState = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];
