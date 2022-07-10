import Grid from "@mui/material/Grid"
import SendMessageUi from "../components/sendMessageUI"
import AppBar from "@mui/material/AppBar"
import ContactDetailsCard from "../components/contactDetailsCard"

export default function SendMessage() {
    return (
        <div>
            <Grid container sx={{ marginTop: 10 }} spacing={2}>
                <Grid item xs={0} md={2} lg={3}></Grid>
                <Grid item xs={10} md={5} lg={3} >
                    <ContactDetailsCard view={false}/>
                </Grid>
                <Grid item xs={10} md={5} lg={3}>
                    <SendMessageUi/>
                </Grid >
                <Grid item xs={1} md={2} lg={2}></Grid>
            </Grid>
        </div>
    )
}