import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleContentToggle} from '../reduxFiles/actions';

class GroupList extends Component {
    render() {
        const {group, groups} = this.props
        return (
                // (Object.keys(group).length===0) ? 
            (groups.length===0 )?
                <div className="groupChats">
                        <h2 style={{margin:'5rem 5rem', fontWeight: '700'}}>
                        Welcome Aboard! <br />
                        Click on 'Create Group' to begin
                        </h2>
                </div>
                :
            <div className={this.props.contentToggle ? "contentArea main_section" : "displayNone"}>
                <div className="groupChats">
                {groups.map((group)=>{
                    console.log(group, 'Each group')
                    const id = group.id;
                    return(
                        <div key={group.id}>
                            <div className="d-flex justify-content-between groupOne" onClick={this.props.handleContentToggle.bind(this, id)}>
                                <div className=" d-flex justify-content-start groupDetails">
                                    <div className="groupImage" style={{marginRight:'15px'}}>
                                        <img src={group.imageUrl} alt='' />
                                    </div>
                                    <div className="groupName">
                                        <h3>{group.name}</h3> 
                                        <h5 className="domantColor"> {group.description} </h5>
                                    </div>
                                </div>
                                <div className="noOfParticipant">
                                    <h3 className="domantColor">Active Members</h3>
                                    <h5>{group.activeMembers}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
      group: state.group,
      groups: state.groups,
      contentToggle: state.contentToggle
    }
  }
  
  const mapDispatchToProps = { handleContentToggle }
  
  export default connect(mapStateToProps , mapDispatchToProps)(GroupList);
