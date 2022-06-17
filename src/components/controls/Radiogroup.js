import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,  } from "@mui/material";

const Radiogroup = (props) => {
  const { name, label, value, onChange, items } = props;
    console.log('my item', items)
    console.log('my props',props)
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      
      <RadioGroup row value={value} name={name} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
          key={item.id}
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
        ))}
      </RadioGroup>

    </FormControl>
  );
};

export default Radiogroup;
