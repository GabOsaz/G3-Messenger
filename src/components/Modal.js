import React, {Component} from 'react';
import {connect} from 'react-redux'
import {showModal} from '../reduxFiles/actions';
import CreateGroupForm from './CreateGroupForm';

class Modal extends Component{
  
  render(){  
      return (<div>
    {/* The create group form is hidden by default and the Addgroup trigger the state to display
    Addgroup button is found on the Header component
  */}
  <div className={(this.props.reduxStateAsProp.toggleModal)? "showModal": "hideModal"}>
  <div className="popup">
    <CreateGroupForm />
  {/* Below is the close button to the right of the form */}
	<h2 className="close" onClick={this.props.showModal}>&times;</h2>
	{/* End of the form */}
</div>
</div>
</div>)
  }
}
const mapStateToProps = (state)=> { 
  return {
    reduxStateAsProp: state
  }
}

const mapDispatchToProps = {showModal}

export default connect(mapStateToProps , mapDispatchToProps)(Modal);