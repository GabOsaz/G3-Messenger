import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {removeMember} from '../reduxFiles/actions'

class GroupMemberList extends Component {
    componentDidMount = () => {
        const memberList = this.props.reduxStateAsProp
        this.setState({
            memberList
        })
    }
    
    removeMember = (id) => {
		axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(res => this.setState({memberList: [...this.state.memberList.filter( member => member.id !== id )]})
	    )
	}
   
     render() {
         const members = this.props.groupMemberList.map( member => {
            const {id, name, email} = member;
            return (
                <li key={id}>
                    <div className="d-flex justify-content-between bd-highlight">
                        <div className="d-flex justify-content-start">
                            <div className="img_cont" style={{marginRight:'15px'}}>
                                <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img" />
                            </div>
                            <div className="new_member_info">
                                <span><strong> {name} </strong></span>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger" onClick={this.props.removeMember.bind(this, id)}> Remove </button>
                        </div>
                    </div>
                </li>
            )
         })
        
        //  let members = 
        //     this.props && this.props.memberList.length > 0 ?
        //      this.props.memberList.map( member => {
        //      return member
        //  }): <span></span>
        return(
            <div>
                <div className="modal fade" id="groupList" tabIndex="-1" role="dialog" aria-labelledby="#groupList" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="#groupList">Group Member List </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="contacts"> 
                                    {members}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        groupMemberList: state.groupMemberList 
    }
}

const mapDispatchToProps = {removeMember}

export default connect (mapStateToProps, mapDispatchToProps)(GroupMemberList)