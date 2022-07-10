import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, TextField } from '@mui/material';
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function SendMessageUi(props) {
    const { phoneno } = useParams()
    let data = JSON.parse(localStorage.getItem('data'))
    const user = data.filter((ele) => ele.phoneno == phoneno)[0]
    const rand = Math.floor(Math.random()*1000000)
    const [value, setValue] = useState('Your OTP number is '+rand)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(loading)
    },[loading])

    const handleChangeOtp=()=>{
        setValue('Your OTP number is '+Math.floor(Math.random()*1000000))
    }

    const handleSend = async() => {
        const body = {
            message: value,
            phoneno: user.phoneno
        }
        const id = toast.loading("Please wait...")
        setLoading(true)
        await axios.post('/send', body).then(res => {
            console.log(res.data)
            if (res.data.error) {
                console.log(res.data)
                if (res.data.error.code == 21608) {
                    toast.update(id, { render: "Sorry 🥲🥲 can't send, the number is not verified", type: "error", isLoading: false, autoClose: true });
                }
                else {
                    toast.update(id, { render: "Something went wrong 🤦‍♂️🤦‍♂️", type: "error", isLoading: false, autoClose: true });
                }
            }
            else {
                toast.update(id, { render: "Message has been send successfully 🙌🙌", type: "success", isLoading: false, autoClose: true });
                let history = JSON.parse(localStorage.getItem('history'))
                if(history){
                    const messageData={
                        contact:user.fname+" "+user.lname,
                        message:res.data.res.body,
                        date:res.data.res.dateCreated,
                        from:res.data.res.from,
                        to:user.phoneno
                    }
                    history.push(messageData)
                    localStorage.setItem('history',JSON.stringify(history))
                }
                else{
                    let history =[]
                    const messageData={
                        contact:user.fname+" "+user.lname,
                        message:res.data.res.body,
                        date:res.data.res.dateCreated,
                        from:res.data.res.from,
                        to:user.phoneno
                    }
                    history.push(messageData)
            
                    localStorage.setItem('history',JSON.stringify(history))
                }
            }
        })
            .catch(error => {
                console.log(error)
                toast.update(id, { render: "Something went wrong 🤦‍♂️🤦‍♂️", type: "error", isLoading: false, autoClose: true });
            })
        setLoading(false)
    }
    return (
        <Card sx={{ maxWidth: "100%",minHeight:"100%",borderRadius:5 }} elevation={8}>
            <ToastContainer />
            <CardContent >
                <Grid container spacing={1} direction="column">
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Message "
                            multiline
                            fullWidth={true}
                            minRows={8}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item sx={{ marginTop: 3, textAlign: "center" }}>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend} disabled={loading} >
                        Send
                    </Button>
                    <Button variant="text" onClick={handleChangeOtp} disabled={loading} >
                        change Otp
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
}