import React, {Component} from 'react' 
import Time from './Time'
import NavBar from './nav'
import Prices from './Prices'


class App extends Component{

  render() {

    return(
      <div>
        <NavBar / >
        <div className="container">
          <Time text='Today is' />

          <h1>Bit Tracker App</h1>

          <Prices />

        </div> 
      </div>
    )
  }
}

export default App