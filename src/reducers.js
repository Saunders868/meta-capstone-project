import { FIRST_FORM, SECOND_FORM } from "./actions";

export function formReducer(state, action) {
  switch (action.type) {
    case FIRST_FORM: {
      return {
        time: action.time,
        date: action.date,
        diners: action.diners,
        occasion: action.occasion,
      };
    }
    case SECOND_FORM: {
      return {
        time: action.time,
        date: action.date,
        diners: action.diners,
        occasion: action.occasion,
        name: action.name,
        email: action.email,
      };
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}
