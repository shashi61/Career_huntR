import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()

  //alert component changes dynamically
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert