
// components
import { Grid, Typography } from '@mui/material';
import ContactCard from '../components/allContactsCard';
import AppBar from '@mui/material/AppBar';

const data = require('../contact.json')
console.log(data)

localStorage.setItem('data', JSON.stringify(data))

const MainPage = () => {
    return (
        <div>
            <Typography sx={{ margin: 5 }} variant="h4">All Contacts</Typography>
            <Grid container spacing={1}>
                <Grid item xs={1} md={2} lg={3} >
                </Grid>
                <Grid item xs={10} md={8} lg={6}>
                    {data.map((ele) => <ContactCard data={ele} />)}
                </Grid >
                <Grid item xs={1} md={2} lg={3} ></Grid>

            </Grid>
        </div>
    )
}
export default MainPage;