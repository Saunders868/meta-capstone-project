import { ADD_TIME, REMOVE_TIME, SECOND_FORM_ADD, SECOND_FORM_REMOVE, TIME } from "./actions";
import { fetchAPI } from "./api";

export function formReducer(state, action) {
  switch (action.type) {
    case SECOND_FORM_ADD: {
      return [...state, {
        time: action.time,
        date: action.date,
        diners: action.diners,
        occasion: action.occasion,
        name: action.name,
        email: action.email,
        id: action.id
      }];
    }
    case SECOND_FORM_REMOVE: {
      return state.filter((t) => t.time !== action.time);;
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function updateTimes(state, action) {
  switch (action.type) {
    case ADD_TIME: {
      return [...state, action.time].sort();
    }
    case REMOVE_TIME: {
      return state.filter((t) => t !== action.time);
    }
    case TIME: {
      return fetchAPI(action.date)
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function initializeTimes(date) {
  const times = fetchAPI(date)
  return times;
}
