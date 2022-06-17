import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  const convertToDefEeventPara = (name, value) => (
      {
          target:{
              name, value
          }
      }
  )

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={e => onChange(convertToDefEeventPara(name, e.target.checked))}
          /> 
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox
