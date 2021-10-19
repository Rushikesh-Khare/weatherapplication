import { Box ,makeStyles,Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness6Icon from '@material-ui/icons/Brightness6';


const useStyle = makeStyles({
    component:{
        margin:50
    },
    row:{
        padding:10,
        fontSize:20,
        letterSpacing:2

    },
    value:{
        color:'#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 15
    },
})
const Information = ({data}) =>{
    const classes = useStyle();
    return (
        data ?
        <Box className = {classes.component}>
              <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location:  <Box className={classes.value} component="span">{data.name}, {data.sys.country} </Box></Typography>
                <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature:  <Box className={classes.value} component="span">{data.main.temp}°C </Box></Typography>
                <Typography className={classes.row}><OpacityIcon className={classes.icon} />Humidity:  <Box className={classes.value} component="span">{data.main.humidity}% </Box></Typography>
                <Typography className={classes.row}><Brightness5Icon className={classes.icon} />Sun Rise:  <Box className={classes.value} component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                <Typography className={classes.row}><Brightness6Icon className={classes.icon} />Sun Set: <Box className={classes.value} component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Box></Typography> 
            <Typography className = {classes.row}></Typography>
        </Box>:''
    )
}
export default Information;