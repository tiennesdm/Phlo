import  React, { Fragment, useEffect, useCallback, useContext } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../GlobalContexts/AppContext';
// import PasswordInput from '../../components/FormInputs/Password';
import TextInput from '../../components/FormInputs/Text';
import AuthDataService from '../../services/Auth.service';
import EnqueueSnackBar from '../../hooks/snackbar';

export default function SignupComponent() {
  const history = useHistory();
  const message = EnqueueSnackBar();
  const [disabled, setDisabled] = useState(true);
  const {
    setIsLoading,
    setAuthenticated,
    setData,
   setIsAuthUser
  } = useContext(AppContext);

  let [signUp, setSignUp] = useState( [
    {
      id:0,
      label:'Username',
      variant:'standard',
      name:'username',
      value:'',
      type: 'text',
      // regex:'/[^a-z0-9]/gi',
      error: false,
      errorText : 'Space is not Allowed'

    },
    {
      id:1,
      label:'Password',
      variant:'standard',
      name:'password',
      value:'',
      type: 'password',
      showPassword: false,
      error: false,
      errorText: 'Length should max 30',
      max: 30,

    },
    {
      id:2,
      label:'Age',
      variant:'standard',
      name:'age',
      value:'',
      type: 'number',
      max: 100,
      errorText: 'Age should not be more than 100',
      error: false,
    },
    {
      id:3,
    //  inputLabel:'Enter your score',
      label:'Score',
      variant:'standard',
      name:'score',
      value:'',
      type: 'number',
      max: 100,
      errorText: 'Score should not be more than 100',
      error: false,
    }
  ]);


  const signApiResponse = useCallback(async (body)=>{
    try{
      
      let response = await AuthDataService.signUpUser(body);
      console.log(response);
      let data = response.data;
      if(data){
        localStorage.setItem('auth', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userDetail', JSON.stringify(data));
        setAuthenticated(true);
        setData( JSON.stringify(data));
        setIsLoading(false);
        setIsAuthUser(data.token);
        message('Signup Successful', 'success');
        history.push('/');
      }
      setDisabled(false);

      
    }catch(err){
      setDisabled(false);
      message(err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err.message: err, "error");
    }
  }, [message, setAuthenticated,setData, setIsLoading, setIsAuthUser, history ])



  const handleChange = (value, id) =>{
    let newArray = [...signUp];
    if(newArray[id]?.name==='username'){
      console.log(newArray[id]);
      console.log(newArray[id].value.includes(' '));
      if(value.includes(' ')){
        newArray[id].error = true;
      }else{
        newArray[id].error = false;
      }
     

    }

    if(newArray[id]?.name==='password'){
      if(value.length > newArray[id].max){
        newArray[id].error = true;
      }else{
        newArray[id].error = false;
      }
     

    }

    if(newArray[id]?.name==='age'){
      if(value > newArray[id].max){
        newArray[id].error = true;
      }else{
        newArray[id].error = false;
      }
    

    }
    if(newArray[id]?.name==='score'){
      if( value > newArray[id].max){
        newArray[id].error = true;
      }else{
        newArray[id].error = false;
      }
     

    }
    newArray[id].value = value;
    setSignUp(newArray);
  };
  const displayText = (item) =>{
    return (<TextInput {...item} 
      key={`${item.id}-${item.name}`}
      handleChange={handleChange} />)
  }

  const handleSubmit = () =>{
    setDisabled(true);
    let createBody = {};
    for(let i=0; i<signUp.length; i++){
      createBody[signUp[i].name] = signUp[i].value;
    }
    signApiResponse(createBody);


  }
  const displayLogin = () =>{
    history.push('/auth/login')

  }
  useEffect(()=>{
     for(let i=0; i<signUp.length; i++){
       if(signUp[i].value && !signUp[i].error){
         setDisabled(false);
       }else{
         setDisabled(true);
       }

     }


  }, [signUp, setDisabled])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'10%' }}>
      <Fragment>
        <span>SignUp</span>
        {signUp.map((data)=>{
          return  displayText(data);
        })}
        <Button variant="outlined"
        margin="dense"
        size='small'
        color="error"
        disabled={disabled}
        onClick={handleSubmit}
        >Sign-Up</Button>
      </Fragment>
      <span>Do you have account ?</span>
      <Button variant="outlined"
        margin="dense"
        size='small'
        color="secondary"
        onClick={displayLogin}
        >Login</Button>
    </Box>
  );
}
