import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import M from 'materialize-css';
import SweetAlert from 'sweetalert2-react';

class CreateRoom extends Component {

    state = {
        showAlert: false,
        alertMessage: ''
    }
    
    constructor(props) {
		super(props);
    }
    
    handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		})
    }
    
    handleCreateSubmit = (e) => {
		e.preventDefault();
		if(this.state && this.state.name)
			this.props.createRoom(this.state);
		else
            // alert("Enter a Valid Room Name! ");
            this.setState({
                showAlert: true,
                alertMessage:"Enter a Valid Room Name"
            })

    }
    
    handleFileDrop = (acceptedFiles) =>{
		if (acceptedFiles.length === 1) {
			let file = acceptedFiles[0];
			if(file.type == 'text/rtf' || file.type == 'text/plain'){
				const reader = new FileReader()
				reader.onabort = () => alert('File reading was aborted')
				reader.onerror = () => alert('File reading has failed')
				reader.onload = () => {
					const fileContents = reader.result
					let userStories = fileContents.split('\n').filter(story =>{
						return story.length>0
					})
					
					this.setState({...this.state, stories: userStories})
					let options = {
						displayLength: 2500,
						classes: 'rounded',
						html: 'User Stories Loaded'
					}
					M.toast(options)
				  
				}
				acceptedFiles.forEach(file => reader.readAsBinaryString(file))
				
			}
			else {
                // alert("Choose a valid txt/rtf file!");
                this.setState({
                    showAlert: true,
                    alertMessage: "Choose a valid text (.txt) file!"
                })
			}
		  } else { 
            this.setState({
                showAlert: true,
                alertMessage: "Choose only one file!"
            })
		  }
		
    }
    
    render() {
        return(
            <div id="create-room-tab" >
                <form className="white mt-0" onSubmit={this.handleCreateSubmit}>
                    <h5 className="grey-text text-darken-3">Create Room</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">account_balance</i>
                        <input type="text" id='name' onChange={this.handleChange} />
                        <label htmlFor="name">Room Name</label>
                    </div>
                    <div className="upload-border center-align cursor-pointer">
                        
                        <Dropzone onDrop={acceptedFiles => this.handleFileDrop(acceptedFiles)}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>To import user stories automatically, drag and drop a .txt file containing user stories separated by line</p>
                                <div>
                                <i className="large material-icons">cloud_upload</i>
                                </div>
                            </div>
                            </section>
                        )}
                        </Dropzone>
                        
                    </div>
                    
                    <div className="input-field">
                        <button className="btn blue z-depth-0">Create Room</button>
                    </div>
                </form>

                <SweetAlert
                    show={this.state.showAlert}
                    text={this.state.alertMessage}
                    onConfirm={() => this.setState({ showAlert: false })}
                />
            </div>
						
        )
    }
}

export default CreateRoom;