import React from 'react'
import BreweryCard from '../components/BreweryCard'
import {Grid} from '@material-ui/core';





class BreweryList extends React.Component {



  listBreweries = () => {
    return this.props.breweries.map(brewery => <Grid key={brewery.id} item xs={4}><BreweryCard handleClick={this.props.handleClick}  brewery={brewery}/></Grid>)
  }

  render () {

    return <div>
    <Grid container spacing={5}>
      {this.listBreweries()}
      </Grid>
    </div>
  }
}

export default BreweryList;
