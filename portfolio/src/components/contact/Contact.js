import React from 'react';

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            contact: {
                fname: '',
                lname: '',
                company: '',
                phone: '',
                text: '',
                email: '',

            }
        }
    }

    changeHandler = e => {
        this.setState({
            contact: {
                ...this.state.contact,
                [e.target.name]: e.target.value,
            }
        })
    }

    reset = (e) => {
        e.preventDefault();
        this.setState({
            contact: {
                fname: '',
                lname: '',
                company: '',
                phone: '',
                text: '',
                email: '',

            }
        })
    }

    render(){
        return(
            <div className="contact-main">
                <div className="title-wrap">
                    <h1 className="title">Contact</h1>
                </div>
                <div className="form-wrap">
                    <div className="form-contain">
                        <form className="form" name="Contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                            <div className="name-div">
                                <div className="flexing">
                                    <h3 className="words outside">FirstName</h3>
                                    <input className="name outside" onChange={this.changeHandler} name="fname" type="text" placeholder="Please Enter Your First Name!" value={this.state.contact.fname} required />
                                </div>
                                <div className="flexing">
                                    <h3 className="words inside">Last Name</h3>
                                    <input className="name inside" onChange={this.changeHandler} name="lname" type="text" placeholder="Please Enter Your Last Name!" value={this.state.contact.lname} required />
                                </div>
                            </div>
                            <div className="contact-div">
                                <div className="flexing">
                                    <h3 className="words outside">E-Mail</h3>
                                    <input className="contact outside" onChange={this.changeHandler} name="email" type="email" placeholder="Please Enter Your First Name!" value={this.state.contact.email} required />
                                </div>
                                <div className="flexing">
                                    <h3 className="words inside">Phone Number</h3>
                                    <input className="contact inside" onChange={this.changeHandler} name="phone" type="phone" placeholder="(XXX) XXX-XXXX" value={this.state.contact.phone} />
                                </div>
                            </div>
                            <div className="company-div">
                                <div className="flexing">
                                    <h3 className="words">Company Name</h3>
                                    <input className="company" onChange={this.changeHandler} name="company" type="text" placeholder="Please Enter Your Company Name" value={this.state.contact.company} />
                                </div>    
                            </div>
                            <div className="text-div">
                                <div className="flexing">
                                    <h3 className="words">Comments or Questions?</h3>
                                    <input className="text" onChange={this.changeHandler} name="text" type="text" placeholder="Comments here..." value={this.state.contact.text} required />
                                </div>
                            </div>
                            <div className="btn-div">
                                <button type="submit" value="Submit">Submit</button>
                                <button onClick={this.reset}>Clear</button>
                            </div>
                        </form>
                    
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Contact;