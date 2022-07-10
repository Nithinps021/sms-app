import Grid from "@mui/material/Grid"
import ContactDetailsCard from "../components/contactDetailsCard"
import AppBar from "@mui/material/AppBar"
import ContactCard from "../components/allContactsCard"

const data = require('../contact.json')
console.log(data)

localStorage.setItem('data', JSON.stringify(data))

export default function ContactDetails() {
    return (
        <div>
            <Grid container spacing={1} sx={{ marginTop: 10 }}>
                <Grid item xs={1} md={2} lg={3} ></Grid>
                <Grid item xs={10} md={8} lg={6}>
                    <ContactDetailsCard view={true} />
                </Grid >
                <Grid item xs={1} md={2} lg={3} ></Grid>
            </Grid>
            
        </div>
    )
}