import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleCreatedGroupSubmit, showModal} from '../reduxFiles/actions'

class CreateGroupForm extends Component{
  state = {
    groupName: '',
    groupDescription: '',
    groupImage: null
  }
  
  handleSelectImage=(event)=>{
      let selectedImage = URL.createObjectURL(event.target.files[0])
      this.setState({groupImage : selectedImage})
    }
    
    handleInputChange=(event)=>{
      this.setState({[event.target.name] : event.target.value})
    }

    handleSubmitInputs=(event)=>{
      event.preventDefault();
      
      const userInputs = {
        name : this.state.groupName,
        description : this.state.groupDescription,
        groupImage : this.state.groupImage,
        chatLog : {},
        groupMemberList : []
      };
      this.props.handleCreatedGroupSubmit(userInputs);
      this.setState({
        groupName: '',
        groupDescription: '',
        groupImage: null
      })
    }

    render(){  
      return (
        <form onSubmit={this.handleSubmitInputs} action="post">
          <div className="form-title">
            <h1>Create A Group</h1>
          </div>
          <div className="form-group">
            <label><h4>Group Name: </h4></label>
            <input
              className="form-control"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.groupName}
              name="groupName"
              placeholder="input a name for the group"
            />
          </div>
          <div className="form-group">
            <label><h4>Group Description: </h4></label>
            <input
              className="form-control"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.groupDescription}
              name="groupDescription"
              placeholder="Describe the reason for creating the group"
            />
          </div>
          <div className="form-group">
            <label><h4>Select Group Icon: </h4></label>
            <div className="imaging">
              {
                (this.state.groupImage !== null) ?
                  <img src={this.state.groupImage}
                    alt="Group icon preview"
                  /> : ""
              }
            </div>
            <input
              className="form-control"
              type="file"
              onChange={this.handleSelectImage}
              placeholder="Select an Image for the group"
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary">Create Group
                </button>
            <button
              type="button"
              className="btn btn-danger offset-2"
              onClick={this.props.showModal}> Cancel
              </button>
          </div>
        </form>
      )}}

const mapDispatchToProps = { handleCreatedGroupSubmit, showModal };

export default connect(null , mapDispatchToProps )(CreateGroupForm);
