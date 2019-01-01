import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashbord from './Dahboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
   
    return (
      <div>
      <LoadingBar/>
      { 
        this.props.loading === true
        ? null
        : <Dashbord/>
      }        
      </div>
    )
  }
}

function mapStateToPropos({ authedUser }){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToPropos)(App)