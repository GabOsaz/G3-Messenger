import React, {Component} from 'react';
import {Link} from 'react-router-dom';
    
class Landing extends Component {
    render() {
        return (
            <div>
        <div className="showcase">
            <div className="showcase-top d-flex justify-content-between">
                <div className="logoLandingPg">
                    <i className="far fa-comments"></i>
                    <h3><span style={{marginLeft:"20px"}}>G3</span> <span>Messenger</span></h3>
                </div>
                <div>
                <button type='button' className="btnLanding btnLanding-x" data-toggle="modal" data-target="#signUpModal">
                    Sign In
                </button>
                </div>
            </div>
            <div className = "showcase-content">
                <h1>Be in touch with your team.<br></br> Anytime, anywhere.</h1>
                <p>Don't have an account? Click the button below to sign up.</p>
                <button type="button" className="btnLanding btnLanding-xl" data-toggle="modal" data-target="#signInModal">
                    Sign up now
                </button>
            </div>
        </div>

                        {/* Sign up Modal */}
        <div className="modal fade" id="signUpModal" data-backdrop="" tabIndex="-1" role="dialog" aria-labelledby="#staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title" id="staticBackdropLabel">Please Fill The Form To Begin</h3>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Firstname</label>
                                        <input type="firstname" className="form-control" id="inputFirstname" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Lastname</label>
                                        <input type="lastname" className="form-control" id="inputLastname" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputAddress2">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="inputState">State</label>
                                        <input type="text" className="form-control" id="inputState" />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input type="text" className="form-control" id="inputZip" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary"><Link style={{color:'#fff',textDecoration:'none'}} to='/dashboard'> Submit </Link></button>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
                    {/* Sign in Modal */}
        <div className="modal fade" id="signInModal" data-backdrop="" tabIndex="-1" role="dialog" aria-labelledby="#staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Log In</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary"><Link to='/dashboard' style={{color:'#fff',textDecoration:'none'}}> Log in </Link></button>
                            </div>
                        </div>
                    </form>
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
export default Landing;