import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_SIDEBAR } from "./actions";

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

	throw new Error(`no such action :${action.type}`);
};
export default reducer;
