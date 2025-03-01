import { Map, fromJS } from "immutable";
import { INIT } from "../constants/reduxFormConstants";

const initialState = {
  usersLogin: Map({
    email: "",
    password: "",
    remember: false,
  }),
};
const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INIT:
      return state;
    default:
      return state;
  }
}
