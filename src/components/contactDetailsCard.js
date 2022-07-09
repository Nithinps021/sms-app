import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useParams,useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function ContactDetailsCard(props) {
    const { phoneno } = useParams()
    const navigate = useNavigate()
    let data = JSON.parse(localStorage.getItem('data'))
    const user = data.filter((ele) => ele.phoneno == phoneno)[0]
    const url = "https://avatars.dicebear.com/api/initials/" + user.fname + " " + user.lname + ".svg"
    return (
        <Card sx={{ maxWidth: "100%", margin: 3 }} elevation={8}>
            <CardContent>
                <Grid container spacing={1} direction="column">
                    <Grid item xs={12} sx={{ marginBottom: 3,textAlign:"center" }}  >
                        <img src={url} style={{ borderRadius: "50%", height: 100}} ></img>
                    </Grid >
                    <Grid item xs={12}  >
                        <Grid container>
                            <Grid item xs={6} sx={{textAlign:"center"}}>
                                <Typography variant='h5'>Name</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                                <Typography variant='h6'>{user.fname + " " + user.lname}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid item xs={6} sx={{textAlign:"center"}}>
                                <Typography variant='h5'>Phone Number</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                                <Typography variant='h6'>{user.phoneno}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid item xs={6} sx={{textAlign:"center"}}>
                                <Typography variant='h5'>Address</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                                <Typography variant='h6'>{user.address}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container>
                            <Grid item xs={6} sx={{textAlign:"center"}}>
                                <Typography variant='h5'>PIN</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                                <Typography variant='h6'>{user.pincode}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: 3, textAlign: "center" }}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={()=>navigate('/sendmessage/'+user.phoneno)}>
                        Send Message
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
}