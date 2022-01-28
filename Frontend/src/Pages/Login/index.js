import  React, { Fragment, useCallback, useContext, useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import AuthDataService from '../../services/Auth.service';
import EnqueueSnackBar from '../../hooks/snackbar';
import { AppContext } from '../../GlobalContexts/AppContext';

// import PasswordInput from '../../components/FormInputs/Password';
import TextInput from '../../components/FormInputs/Text';

export default function LoginComponent() {
    const history = useHistory();
    const {
      setIsLoading,
      setAuthenticated,
      setData,
       setIsAuthUser
    } = useContext(AppContext);
    const message = EnqueueSnackBar();
    const [disabled, setDisabled] = useState(true);
  let [login, setLogin] = useState( [
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

    }
  ]);



  const handleChange = (value, id) =>{
    let newArray = [...login];
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
    newArray[id].value = value;
    setLogin(newArray);
  };
  const signApiResponse = useCallback(async (body)=>{
    try{
      
      let response = await AuthDataService.loginUser(body);
      console.log(response);
      console.log(response.data);
      let data = response.data;
      if(data){
        localStorage.setItem('auth', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userDetail', JSON.stringify(data));
        setAuthenticated(true);
        setData( JSON.stringify(data));
        setIsLoading(false);
        setIsAuthUser(data.token);
        message('Login Successful', 'success');
        history.push('/');
      }
      
      setDisabled(false);
      
    }catch(err){
      setDisabled(false);
      message(err?.response?.data?.message ? err?.response?.data?.message : err?.message ? err.message: err, "error");
    }
  }, [message, setAuthenticated,setData, setIsLoading, setIsAuthUser, history ])



  const displayText = (item) =>{   
    return (<TextInput {...item} 
      key={`${item.id}-${item.name}`}
      handleChange={handleChange} />)
  }
  const handleSubmit = () =>{
    setDisabled(true);
    let createBody = {};
    for(let i=0; i<login.length; i++){
      createBody[login[i].name] = login[i].value;
    }
    signApiResponse(createBody);


  }
const displayLogin = () =>{
  history.push('/auth/signup')

}
useEffect(()=>{
  for(let i=0; i<login.length; i++){
    if(login[i].value && !login[i].error){
      setDisabled(false);
    }else{
      setDisabled(true);
    }

  }


}, [login, setDisabled])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'10%' }}>
      <Fragment>
      <span>Login</span>
        {login.map((data)=>{
          return  displayText(data);
        })}
              <Button variant="outlined"
         margin="dense"
         size='small'
         color="error"
         disabled={disabled}
         onClick={handleSubmit}
         >Login</Button>
       </Fragment>
       <span>Do you have account ?</span>
       <Button variant="outlined"
         margin="dense"
         size='small'
         color="secondary"
        
         onClick={displayLogin}
         >Sign-Up</Button>  
    </Box>
   
  );
}
