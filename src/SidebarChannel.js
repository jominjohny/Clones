import React from 'react'
import { useDispatch } from 'react-redux';
import "./SidebarChannel.css"
import { setChannelInfo } from './features/appSlice'
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
function SidebarChannel({id , channelName}) {

    const dispatch = useDispatch();
      
    const setChannelId=() =>{
       dispatch(setChannelInfo({
            channelName:channelName,
            channelId:id
       }))
    }
    return (
        <div className="sidebarChannel" onClick={setChannelId}>
            <h4 ><span className="sidebarChannel__hash">#</span> {channelName}</h4>
            
        </div>
    )
}

export default SidebarChannel
