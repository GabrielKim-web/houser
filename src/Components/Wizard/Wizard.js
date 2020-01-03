import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {Link} from 'react-router-dom';

class Wizard extends Component {
   render() {
      return(
         <div id = "Wizard">
            <h1>Wizard</h1>
            <Switch>
               <Route component={StepOne} path="/wizard/step1" />
               <Route component={StepTwo} path="/wizard/step2" />
               <Route component={StepThree} path="/wizard/step3" />
            </Switch>
            <Link to="/">Cancel</Link>
         </div>
      )
   }
}

export default Wizard;