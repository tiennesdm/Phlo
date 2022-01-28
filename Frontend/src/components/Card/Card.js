import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


export default function UserCard(props) {
    let {username, age, score, handleLogout} = props;

  return (      
      <React.Fragment>
      <Card variant="outlined">
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {`Hi ${username}`}
      </Typography>
      <Typography variant="h5" component="div">
        {`You are ${age} years older`}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {`You have got ${score} points out of 100`}
      </Typography>
    </CardContent>
    <CardActions>
    <Button variant="outlined"
           margin="dense"
           size='small'
           color="error"
           onClick={handleLogout}
           >Logout</Button>
      </CardActions>
    </Card>
  </React.Fragment>
  );
}
