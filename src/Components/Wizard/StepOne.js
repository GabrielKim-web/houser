import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class StepOne extends Component {
   constructor() {
      super();

      this.state = {
         name: '',
         address: '',
         city: '',
         state: '',
         zipcode: ''
      }
   }
   handleNameChange(value) {
      this.setState({name: value});
   }
   handleAddressChange(value) {
      this.setState({address: value});
   }
   handleCityChange(value) {
      this.setState({city: value});
   }
   handleStateChange(value) {
      this.setState({state: value});
   }
   handleZipcodeChange(value) {
      this.setState({zipcode: value});
   }
   addHouse(obj) {
      console.log(obj);
      axios.post('/api/houses', obj).then(() => {
         this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
         })
      }).catch(err => console.log(err));
   }

   render() {
      const {name, address, city, state, zipcode} = this.state;
      return(
         <div id="StepOne">
            <h1>Step 1</h1>
            <input placeholder="Name" value={name} onChange={e => this.handleNameChange(e.target.value)}/>
            <input placeholder="Address" value={address} onChange={e => this.handleAddressChange(e.target.value)}/>
            <input placeholder="City" value={city} onChange={e => this.handleCityChange(e.target.value)}/>
            <input placeholder="State" value={state} onChange={e => this.handleStateChange(e.target.value)}/>
            <input placeholder="Zipcode" value={zipcode} onChange={e => this.handleZipcodeChange(e.target.value)}/>
            <button onClick={() => this.addHouse({name, address, city, state, zipcode})}>Complete</button>
            <Link to="/wizard/step2">Next</Link>
         </div>
      )
   }
}

export default StepOne;