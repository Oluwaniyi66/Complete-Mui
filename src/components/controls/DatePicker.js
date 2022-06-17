import { TextField } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DatePicker = (props) =>{

    const {name, label, value, onChange} = props

    const convertToDefEeventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return (
         <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label={label}
          inputFormat="MM/dd/yyyy"
          name = {name}
          value={value}
          onChange={date =>onChange(convertToDefEeventPara(name,date))}
          renderInput={(params) => <TextField {...params} />}
        />
        
        
        </LocalizationProvider>
    )
}

export default DatePicker