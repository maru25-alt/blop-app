import React, { Component } from 'react'

export default class Reply extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          comment: '',
          popform: false,
          inputEmail: '',
          error: {
              email: '',
              comment: '',
              inputEmail: '',
          }

        };
      }

      validate = () =>{
         let  isValid  = false;
         let errors = {}
      }

      handleChange = (e) => {
         this.setState({
             [e.target.id]: e.target.value
         })
      }
      handleAddUser = (e) => {
          e.preventDefault();

          this.props.addUser({email: this.state.inputEmail}).then( res => {
            console.log(res)

            if(res.data.includes('user successfully created')){
                this.setState({
                    inputEmail : '',
                    popform: false,

                })
                this.props.addFlashMessage({type: 'success', text: 'Created Successfully, Thanks for Subscribing! '})

            }
            else if(res.data.includes('Email already exist ')){
                this.props.addFlashMessage({type: 'error', text: 'This email already exist in our Subscribers list '})
            
           }

           else {
            this.props.addFlashMessage({type: 'error', text: 'Sorry Something went wrong'})
           }
        })
      }

      handleSubmit = (e) => {
          e.preventDefault();
          console.log('clicked')
          this.props.addComment({
              email: this.state.email,
              comment_text: this.state.comment,
              post_id: this.props.post_id
            }).then(res => {
               if(res.data.includes('email does not exist')){
                   this.props.addFlashMessage({
                       type: 'error',
                       text: 'this email does not exist . first subscribe to our mailing list'
                   })
                   this.setState({
                       popform : true
                   })

               }
               else if(res.data.includes('comment added')){
                   this.setState({
                     email: '',
                     comment: '',
                   })
                   this.props.addFlashMessage({
                    type: 'success',
                    text: 'comment added'
                })
                this.props.fetchComments(this.props.post_id)

               }
               else{
                    this.props.addFlashMessage({
                        type: 'error',
                        text: 'something went wrong'
                    })
               }
              console.log(res)
          })
      } 
    render() {
        return (
            <>
            { this.state.popform && <form onSubmit={this.handleAddUser} className='col-6 '>
                    <div className="modal-header"> 
                          <h6>Join Our Subscriber Mailing List</h6>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
               <div className="modal-body">
                    <div className="form-group">
                    <label for="inputEmail">Email address</label>
                    <input onChange={this.handleChange} type="email" value={this.state.inputEmail} className="form-control" id="inputEmail" aria-describedby="emailHelp"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>}
            <div className = 'comment-form'>
                <div><span>Leave a Reply: </span></div>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input className="form-control" id='email'  onChange={this.handleChange} value={this.state.email} type='email' placeholder='Your Email address'/>
                        </div>
                    <div className="form-group">
                     <textarea className="form-control" id='comment'  onChange={this.handleChange} rows='5' value={this.state.comment}></textarea >
                    </div>
                    <div className="form-group">
                     <button  type='submit' className='button'>Submit</button>
                    </div>
                </form>
                
            </div>
            </>
        )
    }
}
