import React from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const style = {
  width: '100%',
  height: '50%',
}


const BreweryDetails = (props) => {

const url = props.brewery.website_url

    console.log(props)
    return (
      <div className='brewery-details'>
      <Typography variant="caption">
        {props.brewery.name}
      </Typography>
      <Typography variant="body2" component="p" >
        {props.brewery.street}, {props.brewery.city}, {props.brewery.postal_code}
      </Typography>
      <Typography variant="body2" component="p">
        <Link href={url} >{props.brewery.website_url}</Link>
      </Typography>

    <Map style={style} google={props.google} zoom={12}
    initialCenter={{lat: props.brewery.latitude, lng: props.brewery.longitude}}>

        <Marker />

      </Map>
    </div>
  )

}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBW5HcovXrhEhRczJiucXzRh3oHuIMR7SQ')
})(BreweryDetails)
