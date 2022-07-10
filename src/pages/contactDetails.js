import Grid from "@mui/material/Grid"
import ContactDetailsCard from "../components/contactDetailsCard"
import AppBar from "@mui/material/AppBar"

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