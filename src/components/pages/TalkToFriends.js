import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';


function TalkToFriends() {
       const username = localStorage.getItem("username")

       useEffect(() => {
         const beforeUnloadHandler = (e) => {
           e.preventDefault();
     
           
           localStorage.removeItem('username');
     
           e.returnValue = 'Are you sure you want to leave this page?';
         };
     
         
         window.addEventListener('beforeunload', beforeUnloadHandler);
     
         
         return () => {
           window.removeEventListener('beforeunload', beforeUnloadHandler);
         };
       }, []);
     

      

       if(username === null  ) {
         alert("username cannot be blank.. you will be redirected to home to type it ")

         window.location.href = "/"
       }

       const handleClick = () => {
         localStorage.removeItem('username')
       }
       
       const containerStyle = {
      
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         height: '100vh',
         position: 'relative',
       };
     
       const overlayStyle = {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         background: 'rgba(255, 255, 255, 0.5)',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
       };
     
       const textStyle = {
         color: 'black', 
         fontSize: '24px',
         textAlign: 'center',
         fontFamily: "cursive"
       };


       const socialIconsStyle = {
         marginTop: '20px',
       };
     
       const iconStyle = {
         fontSize: '24px',
         margin: '10px',
         color: 'black',
       };
     



    return(<>
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <div style={textStyle}>
          <h1>Hey<span style={{color: "red"}}> {username}! </span>we understand that you are not feeling well! How about you talk it over with someone?</h1>
          <hr></hr>
          
          <p>Select a platform your can talk to your friends...</p>
          <hr></hr>
          <div style={socialIconsStyle} onClick={handleClick}>
              <a href="https://wa.me/">
                <FontAwesomeIcon icon={faWhatsapp} style={iconStyle} />
              </a>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
              </a>
              <a href="tel:">
                <FontAwesomeIcon icon={faPhone} style={iconStyle} />
              </a>
            </div>


        </div>
      </div>
    </div>
       
    
    
    </>)
}

export default TalkToFriends