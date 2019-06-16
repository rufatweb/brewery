import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class BreweryList extends React.Component {


  render () {

    return <div>
    <Grid container spacing={5}>
      { this.props.breweries.map(brewery => <Grid item xs={12} md={3} lg={3}> <BreweryCard handleClick={this.props.handleClick}  brewery={brewery}/> </Grid>) }
      </Grid>
    </div>
  }
}

export default BreweryList;
