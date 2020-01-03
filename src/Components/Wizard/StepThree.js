import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepThree extends Component {
   constructor() {
      super();

      this.state={
         monthMortgage: 0,
         monthRent: 0
      }
   }

   handleMortgage(value) {
      this.setState({monthMortgage: value});
   }

   handleRent(value) {
      this.setState({monthRent: value});
   }

   render() {
      const {monthMortgage, monthRent} = this.state;
      return(
         <div id="StepThree">
            <h1>Step 3</h1>
            <input placeholder="Enter mortgage amount" value={monthMortgage} onChange={e => this.handleMortgage(e.target.value)}/>
            <input placeholder="Enter rent amount" value={monthRent} onChange={e => this.handleRent(e.target.value)}/>
            <Link to="/wizard/step2">Previous</Link>
         </div>
      )
   }
}

export default StepThree;