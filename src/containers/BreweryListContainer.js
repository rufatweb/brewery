import React from 'react'
import BreweryList from '../containers/BreweryList'
import BreweryDetails from '../components/BreweryDetails'
import {Typography, Icon} from '@material-ui/core';

class BrewryListContainer extends React.Component {

  state = {
    breweries: [],
    selectedBrewery: '',
    backBtnClicked: ''
  }


  componentDidMount() {
  fetch('https://api.openbrewerydb.org/breweries?by_city=harrisburg')
  .then(res => res.json())
  .then(json => this.setState({breweries: json}))
  }

  handleClick = (brewery) => {
    this.setState({selectedBrewery: brewery, backBtnClicked: !this.state.backBtnClicked})
  }

  handleClickBack = () => {
    this.setState({backBtnClicked: !this.state.backBtnClicked, selectedBrewery: !this.state.selectedBrewery })
  }

  render () {
    return (
    <div className='brewery-list-container'>
    <Typography variant="h1" >
      Breweries in Harrisburg <Icon style={{ fontSize: 8 }}>beer</Icon>
    </Typography><br/>
      {(this.state.selectedBrewery) ? <BreweryDetails handleClickBack={this.handleClickBack} brewery={this.state.selectedBrewery}/> : <BreweryList handleClick={this.handleClick} breweries={this.state.breweries}/>}
    </div>
  )
  }
}

export default BrewryListContainer;
