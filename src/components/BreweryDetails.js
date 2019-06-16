import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Typography, Button, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom'


 const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

const style = {
  width: '90%',
  height: '50%',

}


const BreweryDetails = (props) => {

const url = props.brewery.website_url

    return (
      <div className='brewery-details'>

      <Typography variant="h1" >
        {props.brewery.name}
      </Typography><br/>
      <Typography variant="h2" >
        {props.brewery.street}, {props.brewery.city}, {props.brewery.postal_code}
      </Typography><br/>
      <Typography variant="body2" component="p">
        <a href={url} >{props.brewery.website_url}</a>
      </Typography><br/>
    <Typography variant="body2"><Icon style={{ fontSize: 8 }}>phone</Icon> <Link>{formatPhoneNumber(props.brewery.phone)}</Link></Typography><br/>
    <Link style={{ textDecoration: 'none' }} to='/breweries'><Button onClick={props.handleClickBack} size="large"><Icon>navigate_before</Icon>Go Back</Button><br/><br/></Link>
    <Map
    style={style} google={props.google} zoom={17}
    initialCenter={{lat: props.brewery.latitude, lng: props.brewery.longitude}}>

        <Marker />

      </Map>

    </div>
  )

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCpnLOUUItPuOA5uvf4b2ohKGXiWJCPLhQ'
})(BreweryDetails)
