import { Box, Grid } from "@mui/material";
import Controls from "../../components/controls/Controls";
import myFormData from "../../components/UseForm";
import * as employeeService from "../../services/EmployeeServices";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const validate = (fieldValues = values) => {
    let temp = {...errors};
    if('fullName' in fieldValues)
    temp.fullName = fieldValues.fullName ? "" : "This field is required";
    if('city' in fieldValues)
    temp.city = fieldValues.city ? "" : "This field is required";
    if('email' in fieldValues)
    temp.email = (/$^|.+@.+..+/).test(fieldValues.email)
      ? ""
      : "Email  is not valid ";
      if('mobile' in fieldValues)
    temp.mobile =
    fieldValues.mobile.length > 9 ? "" : "Minimum of 10 character is required";
   if('departmentId' in fieldValues)
      temp.departmentId =
      fieldValues.departmentId.length !==0? "" : "This field is required";
  
      setErrors({
        ...temp
      })
      if(fieldValues === values)
      return Object.values(temp).every(x => x === "")
  };
  const { values, setValues, handleInputChange, errors, setErrors,resetForm } =
    myFormData.useForm(initialValues, true, validate);

    const handleSubmit =(e) => {

     e.preventDefault()
     if(validate()){
    //  window.alert('testing....')
    console.log('my values', values) 
    employeeService.insertEmployee(values)
    resetForm()
     }
    }
  return (
    <myFormData.Form onSubmit ={handleSubmit} >
      <Grid container>
        <Grid item xs={6}>
          <Grid item xs={10}>
            <Controls.Input
              name="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleInputChange}
              error = {errors.fullName}
            />
            <Controls.Input
              name="email"
              label="Email"
              value={values.email}
              onChange={handleInputChange}
              error = {errors.email}
            />
          </Grid>
          <Grid item xs={10}>
            <Controls.Input
              label="Mobile"
              value={values.mobile}
              name="mobile"
              onChange={handleInputChange}
              error = {errors.mobile}
            />
            <Controls.Input
              label="City"
              value={values.city}
              name="city"
              onChange={handleInputChange}
              error = {errors.city}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Controls.Radiogroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error = {errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <Box>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button color="grey" text="Reset" onClick={resetForm} />
          </Box>
        </Grid>
      </Grid>
    </myFormData.Form>
  );
};

export default EmployeeForm;
