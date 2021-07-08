import axios from "axios";

const initState = {
  AdminList: [],
  progress: false,
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const ADMIN_GET_ALL_ACTION_TYPE = "ADMIN_GET_ALL_ACTION_TYPE";

// ACTIONS
export const getAllAdminAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/v1/admin/profile`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "ADMIN_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const AdminCreateAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/api/v1/`;
    await axios.post(url, payload);

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};


// REDURE FOR STATE UPDTE
export function AdminReducer(state = initState, action) {
  switch (action.type) {
    case ADMIN_GET_ALL_ACTION_TYPE:
      return { ...state, AdminList: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    default:
      return state;
  }
}