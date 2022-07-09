import Grid from "@mui/material/Grid"
import SendMessageUi from "../components/sendMessageUI"
import AppBar from "@mui/material/AppBar"

export default function SendMessage() {
    return (
        <div>
            <Grid container spacing={1} sx={{ marginTop: 10 }}>
                <Grid item xs={1} md={2} lg={3} ></Grid>
                <Grid item xs={10} md={8} lg={6}>
                    <SendMessageUi/>
                </Grid >
                <Grid item xs={1} md={2} lg={3} ></Grid>

            </Grid>
        </div>
    )
}