import React from 'react';
import Modal from './Modal';
import {connect} from 'react-redux';
import {showModal} from '../reduxFiles/actions';

const MobileNav = props=>{
  // this component is meant for the add group button for the mobile responsiveness alone if you are not working on the mobile view you have no business here

  return ( <div className="mobileNav">
  <ul>    
      <button className="button"
        onClick={props.showModal}>Add Group
      </button>
      <Modal />
  </ul>
</div>)
}
const mapStateToProps = (state) => { 
  return {
    reduxStateAsProp: state
  }
}
const mapDispatchToProps = {showModal}

export default connect(mapStateToProps , mapDispatchToProps)(MobileNav);