import React, { Component } from 'react';
import AddMemberModal from './AddMemberModal';
import GroupMemberList from './GroupMemberList';
import { connect } from 'react-redux';
import {newChatMessage} from '../reduxFiles/actions';
import {handleBackToGroupList} from '../reduxFiles/actions';
import {v4 as uuidv4} from 'uuid'

class MessageSection extends Component {
	
	state = {
		chats : '',
		memberList: [],
		groupChatLog: [],
		groupChatID: null
	}
	
	onChange = (e) => { 
        this.setState({ chats : e.target.value})
	}

	onSubmit = (e) => {
        e.preventDefault();
        let today = new Date();
        let day;
        switch (today.getDay()){
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
        }
        console.log(day)
        let hour = today.getHours();
		let minute = today.getMinutes();
		console.log(this.state.chats)
       const newChat = {
		   message: this.state.chats,
		   hour,
		   minute,
		   day
	   }
		const newChatDetails = {
			msgId: uuidv4(),
			messages: newChat,
			groupId: this.state.groupChatID
		}
		
		this.props.newChatMessage(newChatDetails)

        this.setState({  
			chats: '',
        })
    }


    render() {
		const messages = this.props.currChatLog.map(msg => {
			return (
				<div className="d-flex justify-content-end mb-4">
					<div className="msg_cotainer_send">
							{ msg.messages.message } 
						<span className="msg_time_send" style={{marginLeft:'0px'}}> {msg.messages.hour} {' '}: {' '}{msg.messages.minute}, {msg.messages.day} </span>
					</div>
					<div className="img_cont_msg">
						<img src="" className="rounded-circle user_img_msg" />
					</div>
				</div>
			)
		})
        return (
            <div className="col-md-8 col-xl-6 chat">
					<div className="card">
						<div className="card-header msg_head">
							<div className="d-flex bd-highlight">
								<div className="img_cont">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img"/>
									<span className="online_icon"></span>
								</div>
								<div className="user_info">
                                    <button className='goBackBtn' onClick={this.props.handleBackToGroupList} ><i className="fas fa-arrow-left"></i> Go back</button>
								</div>
								<div className="video_cam">
									<span><i className="fas fa-video"></i></span>
									<span><i className="fas fa-phone"></i></span>
								</div>
							</div>
                            <span id='action_menu_btn'>
                                <div className='dropdown'>
                                    <a  href="#" id="dropdownMenuLink" data-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div className='dropdown-menu action_menu' aria-labelledby="dropdownMenuLink">
                                        <a className='dropdown-item' data-toggle="modal" data-target="#groupList"><i className="fas fa-user-circle"></i> View group members</a>
                                        <a className='dropdown-item'><i className="fas fa-users"></i> Add to friend List</a>
                                        <a className='dropdown-item' data-toggle="modal" data-target="#staticBackdrop"><i className="fas fa-plus"></i> Add new member</a>
                                        <a className='dropdown-item'><i className="fas fa-ban"></i> Block</a>
                                    </div>
                                </div>
                            </span>
                                <AddMemberModal handleAddNewMember={this.handleAddNewMember} />
								<GroupMemberList memberList={this.state.memberList}/>
						</div>
						<div className="card-body msg_card_body">
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									Hi, how are you?
									<span className="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div className="d-flex justify-content-end mb-4">
								<div className="msg_cotainer_send">
									I am good tnx, how about you?
									<span className="msg_time_send">8:55 AM, Today</span>
								</div>
								<div className="img_cont_msg">
							        <img src="" className="rounded-circle user_img_msg"/>
								</div>
							</div>
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									I am good too, thanks
									<span className="msg_time">9:00 AM, Today</span>
								</div>
							</div>
							
							<div className="d-flex justify-content-start mb-4">
								<div className="img_cont_msg">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img_msg"/>
								</div>
								<div className="msg_cotainer">
									Bye, see you
									<span className="msg_time">9:12 AM, Today</span>
								</div>
							</div>
								{messages}
						</div>
						<div className="card-footer">
							<form className="input-group" onSubmit={this.onSubmit}>
								<div className="input-group-append">
									<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
								</div>
                                <textarea 
                                className = "form-control type_msg" 
                                placeholder = "Type your message..."
                                value = {this.state.chats}
                                onChange = {this.onChange}
                                />
								<div className="input-group-append">
									<button type='submit' className="input-group-text send_btn"><i  className="fas fa-location-arrow"></i></button>
								</div>
							</form>
						</div>
					</div>
				</div>
        )
    }
}

const mapStateToProps = (state) => { 
	return { 
	  reduxStateAsProp: state,
	  newChatMsg: state.newChatMsg,
	  currChatLog: state.currChatLog
	}
  }

  const mapDispatchToProps = {newChatMessage, handleBackToGroupList}

  export default connect(mapStateToProps, mapDispatchToProps)(MessageSection)