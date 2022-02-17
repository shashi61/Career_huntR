import { FormRow, Alert } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

const AddJob = () => {
    const {
        isEditing,
        showAlert,
        displayAlert,
        position,
        company,
        jobLocation,
        jobType,
        jobTypeOptions,
        status,
        statusOptions,
    } = useAppContext()

  
    const handleJobInput = (e) => { 
        const name = e.target.name
        const value = e.target.value
        console.log((`${name}: ${value}`));
      }

    return (
        <Wrapper>
            <form className='form'>
            <h3>{isEditing ? 'edit job' : 'add job'}</h3>
           
          
        </Wrapper>
  )
}



export default AddJob