import React, {Component} from 'react';
import userProfile from '../utils/userProfile.jpg';
import ToggleSidebar from './ToggleSidebar';
import {connect} from 'react-redux';
import {showModal} from '../reduxFiles/actions'


class Header extends Component{
  render(){
    return ( 
      <div className="header">
      <div className="title"> 
       <div className="logo">
         {/* This is the left side hand bugger for extra opptions */}

          <ToggleSidebar/>
        <div className="logoLandingPg">
          <i className="far fa-comments"></i>
          <h3><span style={{marginLeft:"20px"}}>G3</span> <span>Messenger</span></h3>
        </div>
      </div>
      {/* This for small screen view at the top of the application when the screen is lower than 620px 
      skip if you are not working on the responsiveness yet
      */}
      <div className="user">
        <div className="userProfile">
          <div className="userImage">
            <img src={userProfile} alt="User Profile" />
          </div>
          <div className="userDetails">
            <h3>Jerrycaffe</h3>
            <h4 className="domantColor">Active Now</h4>
          </div>
        </div>
        {/* The class below is responsible for the three dots in mobile view */}
        <div className="mobileMenu">
          <i className="fas fa-ellipsis-v"></i></div>
      </div>
      {/* The user profile details for the small screen ends here */}
    </div>
      {/* below the header in the desktop view and the search box in the mobile view */}
    <div className="searchArea">
      {/* this search box only displays for the mobile view alone if you are not working on responsiveness you can skip this */}
      <form className='searchAreaForm' >
        <input type="text"  placeholder="Search for a group" />
      </form>
      {/* mobile search ends here */}

      <div className="settings">
        {/* contains tabs where users can select to configure their application */}
        <ul>
          {/* Button Tool bar is from react bootstrap component is used to pop the modal box once the add group button is clicked*/}
          <button 
            className="button"
            onClick={this.props.showModal}>
            Create Group
          </button>
          
          <button className="button">Settings</button>
          <button className="button">Support</button>          
        </ul>
        
      </div>
    </div>
  </div> );
  }
}

 
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state
}
}
const mapDispatchToProps = {showModal}

export default connect(mapStateToProps , mapDispatchToProps)(Header);