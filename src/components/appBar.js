import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MessageIcon from '@mui/icons-material/Message';
import {useNavigate} from 'react-router-dom'

export default function ButtonAppBar() {
  let navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MessageIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , textAlign:"left" , marginLeft:2 }}>
            SMS APP
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
          <Button color="inherit" onClick={()=>navigate('/history')}>History</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
