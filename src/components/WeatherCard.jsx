import {Card, CardContent, Typography, Stack} from '@mui/material'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function WeatherCard({data}) {
    if (!data) return null;

    const current = data.current_condition[0];
    const area = data["nearest_area"][0].areaName[0].value;


    return(
        <Card sx={{ p : 2}}>
            <CardContent>
                <Typography variant='h5' gutterBottom>{area}</Typography>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <DeviceThermostatIcon color='error'/>
                    <Typography>Temperature : {current.temp_C} &#8451;</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <AirIcon color='primary'/>
                    <Typography>Feels Like : {current.FeelsLikeC} &#8451;</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <WaterDropIcon color='info'/>
                    <Typography>Humidity : {current.humidity}%</Typography>
                </Stack>
                
                
                
            </CardContent>
        </Card>
    )
}