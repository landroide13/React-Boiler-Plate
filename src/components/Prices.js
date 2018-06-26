import React, { Component } from 'react'



class Prices extends Component{

  state = {
    currencyCode: 'USD',
    currency:''
  }

  onCurrencyHandler = () => {
    let inn = e.target.value;
    this.setState({seriesName: inn})
    fetch(`https: //api.coindesk.com/v1/bpi/currentprice/${inn}.json`)
      .then(res => res.json())
      .then(json => this.setState({currency: json}))
  }

  

  render(){
      let list =''

      if(this.state.currency === 'USD'){
              list = <li className="list-group-item" >
                  BitCoin rate for {this.onCurrencyHandler.USD.disclaimer} 
                : <span className="badge badge-primary">{this.onCurrencyHandler.USD.code}</span> <strong>{this.onCurrencyHandler.USD.rate}</strong>
              </li>
            } else if (this.state.currency === 'GBP') {
                list = <li className="list-group-item" >
                        BitCoin rate for {this.onCurrencyHandler.GBP.disclaimer} 
                        : <span className="badge badge-primary">{this.onCurrencyHandler.GBP.code}</span> <strong>{this.onCurrencyHandler.GBP.rate}</strong>
                      </li>
            } else if(this.state.currency === 'EUR'){
                list = <li className="list-group-item" >
                        BitCoin rate for {this.onCurrencyHandler.EUR.disclaimer} 
                        : <span className="badge badge-primary">{this.onCurrencyHandler.EUR.code}</span> <strong>{this.onCurrencyHandler.EUR.rate}</strong>
                      </li>
           } 


    return(
        <div>
          <h3>Select Currency</h3>

          <div className="col-md-6">
            <ul className="list-group">
              { list }
            </ul>
            <br />
            <select className="form-control" onChange={e => this.setState({currency: e.target.value})}>
              <option value="USD"> USD </option>
              <option value="EUR"> EUR </option>
              <option value="GBP"> GBP </option>
            </select>
        </div>

          
        </div>  
    )

  }
}


export default Prices