import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions, CardContent, Button, Typography, Link } from '@material-ui/core';




const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  root: {
        justifyContent: 'center',

    }

});

const BreweryCard = (props) => {

  const classes = useStyles();
  const url = props.brewery.website_url

    return (
      <Card className={classes.card}>
     <CardContent>
       <Typography className={classes.title}>
         {props.brewery.name}
       </Typography>
       <Typography variant="subtitle2">
         {props.brewery.brewery_type}
       </Typography>
       <Typography variant="body1" component="p" >
         {props.brewery.street}, {props.brewery.city}, {props.brewery.postal_code}
       </Typography>
       <Typography variant="body2" component="p">
         <Link href={url}>{props.brewery.website_url}</Link>
       </Typography>
     </CardContent>
     <CardActions classes={{root: classes.root}}>
        <Button onClick={() => props.handleClick(props.brewery)} size="small">Details</Button>
     </CardActions>
   </Card>
    )
}

export default BreweryCard;
