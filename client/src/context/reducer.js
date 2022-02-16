import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_SIDEBAR, LOGOUT_USER } from "./actions";
import { initialState } from './appContext'

const reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state, //current state
			showAlert: true,
			alertType: "danger",
			alertText: "Please provide all values!",
		};
	}
	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: "",
			alertText: "",
		};
	}
	if (action.type === TOGGLE_SIDEBAR) {
		return { ...state, showSidebar: !state.showSidebar }
	}
	if (action.type === LOGOUT_USER) {
		return {
		  ...initialState,
		  user: null,
		  token: null,
		  userLocation: '',
		  jobLocation: '',
		}
	  }

	throw new Error(`no such action :${action.type}`);
};
export default reducer;
