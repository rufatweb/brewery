import React from 'react'
import ReactDOM from 'react-dom'
import BreweryCard from '../components/BreweryCard'


class BreweryList extends React.Component {

  listBreweries = () => {
    return this.props.breweries.map(brewery => <BreweryCard handleClick={this.props.handleClick} key={brewery.id} brewery={brewery}/>)
  }

  render () {
    
    return <div className='brewery-list'>
      {this.listBreweries()}
    </div>
  }
}

export default BreweryList;
