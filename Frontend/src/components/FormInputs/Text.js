import TextField from '@mui/material/TextField';
import { Fragment } from 'react';

export default function TextInput(props) {
    let {handleChange,
        id,
        label,
        variant,
        value,
        type,
        error,
        errorText
    
    } =props;
    return (
      <Fragment>
          <TextField
    id={id}
    label={label}
    type={type}
    InputLabelProps={{
      shrink: true,
    }}
    value={value}
    margin="dense"
    onChange={(event)=>{
                 return handleChange(event.target.value, id);
             }  }
    variant={variant}
    // errortext={errorText}
    error={error}
  />
  {error ? <p style={{color: 'red', fontSize:'8px'}}>{errorText}</p> : ''}

      </Fragment>
  
  
    )
}