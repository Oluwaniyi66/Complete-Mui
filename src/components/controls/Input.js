import { TextField } from "@mui/material";

const Input = (props) => {
  const { name, label, value, error=null, onChange } = props;

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && {error:true, helperText:error})}
    />
  );
};

export default Input;
