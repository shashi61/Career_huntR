import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormRow = ({ type, name, value, handleChange,  fontAwesome}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-style"
        placeholder={`Your ${name}`}
        
        autocomplete="off"
      />
      <FontAwesomeIcon
        className="input-icon uil uil-at"
        icon={fontAwesome}
        fixedWidth
      />
    </div>
  );
};

export default FormRow;
