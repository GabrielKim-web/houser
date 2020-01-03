import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import House from '../House/House';

class Dashboard extends Component {
   constructor() {
      super();

      this.state = {
         houseList: []
      }
      this.removeHouse=this.removeHouse.bind(this);
   }

   componentDidMount() {
      this.getAllHouses();
   }
   getAllHouses() {
      axios.get('/api/houses/all').then(response => {
         this.setState({houseList: response.data});
      }).catch(err => console.log(err));
   }
   removeHouse(id) {
      axios.delete(`/api/houses/${id}`).then(() => {
         this.getAllHouses();
      }).catch(err => console.log(err));
   }
   render() {
      const {houseList} = this.state;
      return(
         <div id = "Dashboard">
            <h1>Dashboard</h1>
            {/* <Link to="/wizard">Add New Property</Link> */}
            <Link to="/wizard/step1">Add New Property</Link>
            {houseList.map((element, index) => {
               return(<div className="house" key={index}>
                  <House 
                  id={element.house_id}
                  name={element.name}
                  address={element.address}
                  city={element.city}
                  state={element.state}
                  zipcode={element.zipcode}
                  removeHouse={this.removeHouse}/>
               </div>
               )
            })}
            
         </div>
      )
   }
}

export default Dashboard;