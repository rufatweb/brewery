import React from 'react'
import ReactDOM from 'react-dom'
import BreweryList from '../containers/BreweryList'


class BrewryListContainer extends React.Component {

  render () {
    return <div className='brewery-list-container'>
      <BreweryList />
    </div>
  }
}

export default BrewryListContainer;
