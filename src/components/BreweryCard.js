import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom'




const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: '#dda75d'
  },
  title: {
    fontSize: 18,
  },
  type: {
    fontSize: 16,
  },
  address: {
    fontSize: 14,
  },
  website: {
    fontSize: 12,
  },
    root: {
    justifyContent: 'center',
    backgroundColor: '#f4ac41'
  },


});

const BreweryCard = (props) => {

  const classes = useStyles();
  const url = props.brewery.website_url

  const formatName = (name) => {
    return name.toLowerCase().split(' ').join('_')
  }
  const name = formatName(props.brewery.name)

    return (
      <Card className={classes.card}>
     <CardContent>
       <Typography noWrap className={classes.title}>
         {props.brewery.name}
       </Typography><br/>
       <Typography noWrap className={classes.type}>
         {props.brewery.brewery_type}
       </Typography><br/>
       <Typography noWrap className={classes.address} >
         {props.brewery.street}, {props.brewery.city}, {props.brewery.postal_code}
       </Typography><br/>
       <Typography noWrap className={classes.website}>
         <a href={url}>website</a>
       </Typography>
     </CardContent>
     <CardActions classes={{root: classes.root, label: classes.label, }}>
      <Link style={{ textDecoration: 'none' }} to={`/breweries/${name}`}><Button onClick={() => props.handleClick(props.brewery)} size="large">Details</Button></Link>
     </CardActions>
   </Card>
    )
}

export default BreweryCard;
