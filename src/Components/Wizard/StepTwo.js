import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class StepTwo extends Component {
   constructor() {
      super();

      this.state={
         image_url: ''
      }
   }

   handleURLChange(value) {
      this.setState({image_url: value});
   }
   render() {
      const {image_url} = this.state;
      return(
         <div id="StepTwo">
            <h1>Step 2</h1>
            <input placeholder="Image URL" value={image_url} onChange={e => this.handleURLChange(e.target.value)} />
            <Link to="/wizard/step1">Previous</Link>
            <Link to="/wizard/step3">Next</Link>
         </div>
      )
   }
}

export default StepTwo;