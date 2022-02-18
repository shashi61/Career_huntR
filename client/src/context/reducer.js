import { 
	DISPLAY_ALERT, 
	CLEAR_ALERT, 
	SETUP_USER_BEGIN,
	SETUP_USER_SUCCESS,
	SETUP_USER_ERROR,
	TOGGLE_SIDEBAR, 
	LOGOUT_USER, 
	UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
	SHOW_STATS_BEGIN,
	SHOW_STATS_SUCCESS,
} from "./actions";

import { initialState } from './appContext';

// Alerts
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
	
	// Setup user
	if (action.type === SETUP_USER_BEGIN) {
		return { ...state, isLoading: true }
	}
	if (action.type === SETUP_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token: action.payload.token,
			user: action.payload.user,
			userLocation: action.payload.location,
			jobLocation: action.payload.location,
			showAlert: true,
			alertType: 'success',
			alertText: action.payload.alertText,
		}
	}
	if (action.type === SETUP_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		}
	}

	// Toggle and Logout
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

// Update User
	if (action.type === UPDATE_USER_BEGIN) {
		return { ...state, isLoading: true }
	}
	
	if (action.type === UPDATE_USER_SUCCESS) {
		return {
			...state,
			isLoading: false,
			token:action.payload.token,
			user: action.payload.user,
			userLocation: action.payload.location,
			jobLocation: action.payload.location,
			showAlert: true,
			alertType: 'success',
			alertText: 'User Profile Updated!',
		}
	}
	if (action.type === UPDATE_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		}
	}
 
// Show Stats
	if (action.type === SHOW_STATS_BEGIN) {
		return { ...state, isLoading: true, showAlert: false }
	}
	if (action.type === SHOW_STATS_SUCCESS) {
		return {
			...state,
			isLoading: false,
			stats: action.payload.stats,
			monthlyApplications: action.payload.monthlyApplications,
		}
	}

	throw new Error(`no such action :${action.type}`);
};
export default reducer;
