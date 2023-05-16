import React, {useState} from "react";
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from "@material-ui/core";

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const [type,setTypes] = useState('restaurants');
return  (
<div className={classes.container}>
    <Typography variant="h4">
        Restaurants,Hotels & Attractions around you
    </Typography>
    <FormControl className={classes.formControl}>
        <InputLabel id="rating">Rating</InputLabel>
<Select value={} onChange={}>
    <MenuItem value="restaurants">Restaurant</MenuItem>
    <MenuItem value="hotels">Hotels</MenuItem>
    <MenuItem value="attractions">Attractions</MenuItem>
</Select>
    </FormControl>
</div>
    )

}

export default List;