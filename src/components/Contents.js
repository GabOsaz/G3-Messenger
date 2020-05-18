import React, {Component} from 'react';
import MobileNav from './MobileNav';
import GroupList from './GroupList';
import Modal from './Modal';


class Contents extends Component{  
   render(){
    return(
      <div className="contentArea">
         <MobileNav/>
         <div>
            <Modal/>
         </div>
         {/* <GroupList/> */}
      </div>
      )}
   }

export default Contents;