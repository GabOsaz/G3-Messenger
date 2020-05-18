import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatSquare from './ChatSquare';
import {fetchGroups} from '../reduxFiles/actions';
import {handleContentToggle} from '../reduxFiles/actions';
import GroupList from './GroupList';
import Modal from './Modal';

class Content extends Component{
  render(){
    return(
      // <div className='main_section'>
      <div>
        <GroupList />
        <Modal />
        <ChatSquare />
    </div>
  )}
}

const mapStateToProps = (state) => { 
  return { 
    reduxStateAsProp: state,
    newGroup: state.group
  }
}

const mapDispatchToProps = {fetchGroups, handleContentToggle}

export default connect(mapStateToProps , mapDispatchToProps)(Content);
