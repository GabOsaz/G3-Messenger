import React from 'react';
import {connect} from 'react-redux';
import {handleSidebarToggle} from '../reduxFiles/actions'


const ToggleSidebar = props => {
  return  (<div 
    className={(props.reduxStateAsProp.isToggled)?'displayNone': 'menu'} 
    onClick={()=>{props.handleSidebarToggle()}}>
    <i style={{marginTop: '1.0rem'}} className="fas fa-bars"></i>
  </div>)
}
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state

}
}

const mapDispatchToProps = {handleSidebarToggle}


export default connect(mapStateToProps , mapDispatchToProps)(ToggleSidebar);