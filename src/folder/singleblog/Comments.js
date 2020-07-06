import React, { Component } from 'react'
import FB from 'fb'
class Comment extends Component {

    componentDidMount() {
        window.fbAsyncInit = function() {
          
        FB.init({
          appId: "273947156999841",
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v3.0',
          status: true,
          cookie: true
         });
        };
        window.FB = FB;

        document.dispatchEvent(new Event('fb_init'));
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
        //  FB.XFBML.parse();
       }
    render() {
        
        return (
            <div className='comments'>
               {/* <div  className='heading'><span> Comments</span></div>   */}
               <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-numposts="5" data-width=""></div>
    
              
            </div>
        )
    }
}


export default (Comment)