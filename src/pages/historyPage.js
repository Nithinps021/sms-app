import { Grid, Typography } from '@mui/material';
import HistoryCard from '../components/allHistory';
import NoData from './nodata';

const data = require('../contact.json')
console.log(data)


const HistoryPage = () => {
    var his = localStorage.getItem('history')
    if (his){
        his = JSON.parse(his)
        his=his.sort((ele1,ele2)=>new Date(ele2.date)-new Date(ele1.date) )
    }
    else{
        his=[]
    }
    return (
        <div>
             <Typography sx={{ margin: 5 }} variant="h4">All History</Typography>
            <Grid container spacing={1}>
                <Grid item xs={1} md={2} lg={3} ></Grid>
                <Grid item xs={10} md={8} lg={6}>
                    {his.length!==0?his.map((ele) => <HistoryCard data={ele} />):<NoData/>}
                </Grid >
                <Grid item xs={1} md={2} lg={3} ></Grid>

            </Grid>
        </div>
    )
}
export default HistoryPage;