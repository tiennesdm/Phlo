import React, {useContext, Fragment} from 'react';
import Box from '@mui/material/Box';
import UserCard from '../../components/Card/Card';
import EnqueueSnackBar from '../../hooks/snackbar';
import { AppContext } from '../../GlobalContexts/AppContext';


export default function UserComponent(){
    const {
        setIsLoading,
        setAuthenticated,
        data, 
        setData,
         setIsAuthUser
        
      } = useContext(AppContext);
      const message = EnqueueSnackBar();
    let userInfo = JSON.parse(data);
    const handleLogout = () =>{
        localStorage.clear();
        setAuthenticated(false);
        setData(null);
        setIsAuthUser(null);
        setIsLoading(false);
        message('Logout Successful', 'success');
    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'10%' }}>
        <Fragment>
            {data ?  <UserCard username={userInfo.username} age={userInfo.age} score={userInfo.score} handleLogout={handleLogout} /> : ''}
           
              
         </Fragment>
      </Box>
    )
}