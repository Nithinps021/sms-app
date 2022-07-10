import { Grid, Typography } from '@mui/material';
import nodata from '../noData.jpg'



const NoData = () => {

    return (
        <div>
            <Grid container spacing={1} sx={{ marginTop: 10 }}>
                <Grid item xs={1} md={2} lg={3} ></Grid>
                <Grid item xs={10} md={8} lg={6}>
                   <img src={nodata} width="100%" ></img>
                </Grid >
                <Grid item xs={1} md={2} lg={3} ></Grid>

            </Grid>
        </div>
    )
}
export default NoData;