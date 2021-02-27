import React, { useState } from 'react'
import './Sidebar.css'
import SidebarChannel from "./SidebarChannel"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import { useEffect } from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { selectChannelId } from './features/appSlice';
import swal from 'sweetalert';

function Sidebar() {


    const user = useSelector(selectUser);

    const [channels, setChannels] = useState([]);

    const channelId =useSelector(selectChannelId)

    useEffect(() => {
        db.collection('channels').onSnapshot(snapShot => (
            setChannels(snapShot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt("Enter the Channel Name");
        if (channelName) {
            db.collection('channels').add({

                channelName: channelName,
            })
        }
    }

    const removeChannels =(id) => e =>{
        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to leave this page?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
            db.collection('channels').doc(id).delete()
              swal("Deleted!", "Your imaginary file has been deleted!", "success");
            }
          });

        
    }

    return (
        <div className="sidebar">
            {/* <h1>Side bar component</h1> */}
            <div className="sidebar__top">
    <h1>{user.displayName}</h1>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    {channels.map(({ id, channel }) => (
                        <div className="sidebar__channelGroup">
                            <div  className="sidebar__channel" >
                                <SidebarChannel  key={id} id={id} channelName={channel.channelName} />
                            </div>
{/* 
                            <div className="sidebar__remove"> */}
                                <RemoveCircleOutlineIcon onClick={removeChannels(id)} />
                            {/* </div> */}
                        </div>

                        // </>
                    ))}

                </div>

            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcon">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar className="sidebar__profileAvatar" onClick={() => auth.signOut()} alt="Jomin Johny" src={user.photo} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>


        </div>
    )
}

export default Sidebar
