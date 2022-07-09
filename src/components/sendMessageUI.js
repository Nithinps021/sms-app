import{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid,TextField} from '@mui/material';
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function SendMessageUi(props) {
    const { phoneno } = useParams()
    let data = JSON.parse(localStorage.getItem('data'))
    const user = data.filter((ele) => ele.phoneno == phoneno)[0]
    const [value, setValue] = useState()
    const handleChange = () => {

    }
    return (
        <Card sx={{ maxWidth: "100%", margin: 3 }} elevation={8}>
            <CardContent>
                <Grid container spacing={1} direction="column">
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Message "
                            multiline
                            fullWidth={true}
                            minRows={8}
                            value={value}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: 3, textAlign: "center" }}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
}