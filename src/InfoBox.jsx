import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css"
import { Info } from '@mui/icons-material';

export default function InfoBox({info}){
    // const DUSTY_URL = "https://images.unsplash.com/photo-1572687413625-cb2c4d9c4d32?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1587910030090-af0cd8077e9e?q=80&w=899&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1623567932970-576132e5d056?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : (info.temp < 15 ? COLD_URL : HOT_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >   
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp < 15 ? <AcUnitIcon/> : <SunnyIcon/> )} 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity} </div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>The Weather can be described as <i>{info.weather}</i> and  feels like {info.feelsLike}&deg;C</div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}