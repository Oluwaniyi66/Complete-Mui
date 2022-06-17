import { styled } from "@mui/material";
import { useState } from "react";

const useForm = (initialValues,validateOnChange=false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    if(validateOnChange)
    validate({[name]:value})
  };
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
  };
};

const StyledForm = styled("form")(({ theme }) => ({
  "& .MuiFormControl-root": {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

const Form = (props) => {
  const { children, ...other } = props;
  return (
    <StyledForm autoComplete="off" {...other}>
      {props.children}
    </StyledForm>
  );
};

const myFormData = {
  useForm,
  Form,
};

export default myFormData;
