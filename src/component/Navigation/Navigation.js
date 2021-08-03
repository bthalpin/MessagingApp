import React, {useState}from 'react';
import './Navigation.css';
// import '../../colors.css';

// import '../../colors3.css';
import '../../colors2.css';
import Hamburger from "../../images/hamburger.png";
import Home from "../../images/home.png";
import Friends from '../Friends/Friends';
import friendpicture from "../../images/friend.png";

const Navigation = ({onRouteChange, isSignedIn,route,
    user, 
    setUser , 
    setRoute , 
    setPrivateMessage,
    setConversation,
    conversation,
    addFriend,
    publicStatus,
    setPublicStatus,
    changePublicStatus,
    privateMessages
})=>{
    let display;
    const [hideStatus,setHideStatus] = useState('Hidden')

    const hide = ()=>{
        hideStatus==='Hidden'?setHideStatus(''):setHideStatus('Hidden')
        // console.log(hideStatus)
    }
    if (isSignedIn){
        return (
            <div className = "navroot">
                <div className = "title">Halpin Messaging App</div>
                <div><button className = "hideButton" onClick = {hide}><img src = {Hamburger} alt = "=" width="15rem"></img></button>
                    </div>
                <div className = {'mainNav'+hideStatus}> 
                    <button className = "wideButton" onClick = {hide}>Close</button>
                        <div className = "groupContainer">
                            <p className = "groupChat">Group Chats</p>
                            <div className = "navButtonContainer " >
                                <p onClick = {()=>changePublicStatus('home',true)} className = {"navButtons home"+ route}>Public</p><p className = {"navButtons friend"+ route} onClick = {()=>changePublicStatus('friend',false)}>Friends</p>
                            </div>
                        </div>
                       
                        <div>
                            <p className = {"navButtons mail"+ route} onClick = {() => onRouteChange('mail')}>Private Message
                            {/* {privateMessages.length?<span className = "requests">{privateMessages.length}</span>:<></>} */}
                            </p>
                        </div>
                       
                        <div className = "">
                            <p className = {"navButtons friends"+ route} onClick = {()=>onRouteChange('friends')}>Contacts{user.requests.length?<span className = "requests">{user.requests.length}</span>:<></>}</p>
                        </div>
                        <nav className = "">
                        <p onClick = {() => onRouteChange('Sign In')} className = {"navButtons "}>Sign Out</p>
                    </nav>
                    </div>
                
            </div>            
        )
    }else {
        return (
            <div >
            </div>            
            )   
        }
}

export default Navigation;