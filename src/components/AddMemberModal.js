import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPotentialGroupMembers} from '../reduxFiles/actions';
import {addGroupMember} from '../reduxFiles/actions';
import {v4 as uuidv4} from 'uuid'

class AddMemberModal extends Component {
    
    componentDidMount = () => {
        this.props.fetchPotentialGroupMembers()
    }

    render() {
        const potentialMember = this.props.potentialMember.map(person => {
            const {id, name, email} = person;
            console.log(name)
        const newGroupMember = {
                id: uuidv4(),
                name,
                email
            }
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
                            <button type="button" className="btn btn-success" onClick={this.props.addGroupMember.bind(this, id, newGroupMember)}>Add</button>
                        </div>
                    </div>
                </li>
            );
        })

        return(
            <div>
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="#staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="#staticBackdropLabel">Add Some Members to Your Group</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="contacts"> 
                                    {potentialMember}
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
    return{
        potentialMember: state.potentialMember
    }
}

const mapDispatchToProps = {fetchPotentialGroupMembers, addGroupMember}

export default connect(mapStateToProps, mapDispatchToProps) (AddMemberModal);