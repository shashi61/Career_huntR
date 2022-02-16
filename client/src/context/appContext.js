import React, { useReducer, useContext } from 'react'
import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_SIDEBAR, LOGOUT_USER } from './actions'

import reducer from './reducer'


const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showSidebar: false
}
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  
  // reducer function will handle dispatch 
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }
  
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    // removeUserFromLocalStorage()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
      displayAlert, 
      toggleSidebar,
      logoutUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }