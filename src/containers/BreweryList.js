import React from 'react'
import ReactDOM from 'react-dom'
import BreweryCard from '../components/BreweryCard'


class BreweryList extends React.Component {

  render () {
    return <div className='brewery-list'>
      <BreweryCard />
    </div>
  }
}

export default BreweryList;
