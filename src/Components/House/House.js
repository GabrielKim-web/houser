import React, {Component} from 'react';

class House extends Component {
   constructor() {
      super();

      this.state = {

      }
   }
   render() {
      const {id, name, address, city, state, zipcode} = this.props;
      return(
         <div id = "House">
            <h1>House</h1>
            <span>{name}</span>
            <span>{address}</span>
            <span>{city}</span>
            <span>{state}</span>
            <span>{zipcode}</span>
            <button onClick={() => this.props.removeHouse(id)}>Delete</button>
         </div>
      )
   }
}

export default House;