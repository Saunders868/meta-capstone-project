import { ADD_TIME, FIRST_FORM, REMOVE_TIME, SECOND_FORM, TIME } from "./actions";

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
        ...state,
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

export function updateTimes(state, action) {
  switch (action.type) {
    case ADD_TIME: {
      return [...state, action.time];
    }
    case REMOVE_TIME: {
      return state.filter((t) => t !== action.time);
    }
    case TIME: {
      return state
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function initializeTimes(times) {
  return times;
}
