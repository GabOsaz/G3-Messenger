import React, { Component } from 'react'

export default class SideNewGroupMsg extends Component {
    render() {
        return (
            <div className="col-md-4 col-xl-3">
                <div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search"/>
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">
                        <ul className="contacts"> 
                        {/* Tope, these list items are what the router Link should wrap. Like <li><Link>Content<Link/></li> */}
                            <li className="active">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                                        <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>General Group</span>
                                        <p>Facebook dev-team</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img" />
                                        <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>Back end engineers</span>
                                        <p>Teragon Task</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img" />
                                        <span className="online_icon offline"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>Designers</span>
                                        <p>Teragon Task</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg" className="rounded-circle user_img" />
                                        <span className="online_icon offline"></span>
                                    </div>
                                    <div className="user_info">
                                        <span> Front end Engineers</span>
                                        <p>Teragon Task</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
					</div>
					<div className="card-footer"></div>
				</div>
				
            </div>
        )
    }
}
