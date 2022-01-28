import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import IconButton from '@mui/material/IconButton';


export default function PasswordInput(props) {
    let {handleChange,handleClickShowPassword,
        id,
        inputLabel,
        label,
        variant,
        // name,
        value,
        // type,
        showPassword,
        required
    
    } =props;
    return (
        <FormControl sx={{ m: 1, width: '25ch' }} variant={variant}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <FilledInput
          id={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(event)=>{
              return handleChange(event.target.value, id);
          }  }
          required={required}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={inputLabel}
                onClick={()=>{return handleClickShowPassword(id)}}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    )
}