import { Button as MuiButton, styled } from "@mui/material"


const StyledMuiButton = styled(MuiButton)(({ theme }) => ({
   
        margin: theme.spacing(0.5),
        textTransform:'none',
        
  }));

const Button = (props) =>{

    const {text, size, color, variant, onClick, ...other} = props
    return (
            <StyledMuiButton 
            variant={variant || "contained"}
            size ={size || "large"}
            color={color || "primary"}
            onClick = {onClick}
            {...other}

            
            >{text}</StyledMuiButton>

          

    )
}

export default Button