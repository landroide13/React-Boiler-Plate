import React from 'react';


const PriceList = (props) =>{

  let list ='';

  return (
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
    );


}


export default PriceList