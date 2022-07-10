import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import {useNavigate} from 'react-router-dom'


export default function ContactCard(props) {
    const url = "https://avatars.dicebear.com/api/bottts/"+props.data.fname + " "+props.data.lname+".svg"
    let navigate = useNavigate()
  return (
    <Card sx={{ maxWidth:"100%", margin:3, borderRadius:5 }}  elevation={8}>
      <CardActionArea onClick={()=>navigate('details/'+props.data.phoneno)} >
        <CardContent>
            <Grid container spacing={1}>
                <Grid item xs={4} md={2}>
                    <img src={url} style={{borderRadius:"50%",height:50}} ></img>
                </Grid>
                <Grid item xs={5} md={8}>
                    <Typography variant='h6' sx={{textAlign:"left"}}>
                        {props.data.fname + " "+ props.data.lname}
                    </Typography>
                    <Typography variant='subtitle1' sx={{textAlign:"left"}}>
                       {props.data.phoneno}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
