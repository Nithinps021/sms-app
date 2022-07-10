import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'


export default function HistoryCard(props) {
    const url = "https://avatars.dicebear.com/api/bottts/" + props.data.contact + ".svg"
    let navigate = useNavigate()
    const dt = new Date(props.data.date)

    return (
        <Card sx={{ width: "100%", margin: 1, borderRadius: 5 }} elevation={8}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={2} md={2}>
                            <img src={url} style={{ borderRadius: "50%", height: 50 }} ></img>
                        </Grid>
                        <Grid item xs={4} md={4}>
                            <Typography variant='h6' sx={{ textAlign: "left" }}>
                                {props.data.contact}
                            </Typography>
                            <Typography variant='subtitle1' sx={{ textAlign: "left" }}>
                                {props.data.to}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} md={4} sx={{ textAlign: "right" }}>
                            <Typography variant='subtitle1'>{dt.toString('YYYY-MM-dd').slice(0,21)}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} direction="column">
                        <Grid item xs={4} md={2}>
                        </Grid>
                        <Grid item >
                            <Stack>
                                <Typography variant='subtitle1'>Message</Typography>
                                <Typography variant= "body2">{props.data.message}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
        </Card>
    );
}
