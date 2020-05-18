import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import {connect} from 'react-redux';
import Content from './Content';
import Contents from './Contents';
import Landing from './Landing'


class App extends Component {
     render(){
    return (
      <div>
        <Switch>
          <Route exact path = "/" component = {Landing}/>
          <Route path='/dashboard' render={() => (
              <div className="body">
                  <Sidebar/>
                  <div className="bodyWrapper">
                    <Header/>
                    <Content />
                    <Contents />
                  </div>
              </div>
          )}/>
        </Switch>
        
      </div>
    );
  }
}
const mapStateToProps = (state)=>{ 
  return {reduxStateAsProp: state }
  }
const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(App);

