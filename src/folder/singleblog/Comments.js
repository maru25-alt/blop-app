import React, { Component } from 'react'
class Comment extends Component {

    componentDidMount() {
        window.fbAsyncInit = function() {
        window.FB.init({
          appId: "703449720452801",
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0'
         });
        };
      
        // Load the SDK asynchronously
        (function(d, s, id) {
         var js,
           fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) return;
         js = d.createElement(s);
         js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       })(document, "script", "facebook-jssdk");
      }  
      
      componentDidUpdate() {
        window.FB.XFBML.parse();
       }
    render() {
        
        return (
            <div className='comments'>
               <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5" data-width="">hi</div>
    
              <div  className='heading'><span> Comments</span></div>  
              
            </div>
        )
    }
}


export default (Comment)