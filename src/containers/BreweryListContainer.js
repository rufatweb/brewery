import React from 'react'
import ReactDOM from 'react-dom'
import BreweryList from '../containers/BreweryList'
import BreweryDetails from '../components/BreweryDetails'
import {Route, Switch} from 'react-router-dom'


class BrewryListContainer extends React.Component {

  state = {
    breweries: [],
    selectedBrewery: '',
    backBtnClicked: false
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
    this.setState({backBtnClicked: !this.state.backBtnClicked})
  }

  render () {
    return (
    <div className='brewery-list-container'>
      {(this.state.selectedBrewery && !this.state.backBtnClicked) ? <BreweryDetails handleClickBack={this.handleClickBack} brewery={this.state.selectedBrewery}/> : <BreweryList handleClick={this.handleClick} breweries={this.state.breweries}/>}
    </div>
  )
  }
}

export default BrewryListContainer;
