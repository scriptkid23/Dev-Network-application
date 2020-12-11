import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {AddGroup, NewChat} from '../../assets/index'
import Data from './data.json';
export function Sidebar() {
    const [roomId,setRoomId] = React.useState("1");
    const [show, setShow] = React.useState(false);
    const setRoom = (id) => {
        setRoomId(id)
    }
    const renderContactList = (data) => {
        return data.contact.map((value,index) => {
            return (
                <li key={index} 
                    className={`list-group-item ${value.room_id === roomId ? "open-chat" : ""}`}
                    onClick={() => setRoom(value.room_id)}>
                    <figure className="avatar avatar-state-success">
                    <img src="http://storage-3t.herokuapp.com/uploads/avatar/002-unicorn.svg" className="rounded-circle" alt="avatar"/>
                    </figure>
                    <div class="users-list-body">
                        <div>
                            <h5 className="">{value.room_name}</h5>
                            <p>{value.last_message}</p>
                        </div>
                        <div className="users-list-action">
                            <small className="text-muted">{value.created_at}</small>
                        </div>
                    </div>
                </li>
            )
        })
        
    }
    return (
        <div className="sidebar-group">
            <div className="sidebar active">
                    <header>
                        <span>Chats</span>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <div>
                                    <button className="btn btn-outline-light" id="Tooltip-Add-Group">                                          
                                            <AddGroup/>    
                                    </button>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <button className="btn btn-outline-light" id="Tooltip-New-Chat">
                                    <NewChat/>
                                </button>
                            </li>
                        </ul>
                    </header>  
                <form>
                    <input type="text" className="form-control" placeholder="Search chats"/>
                </form>
                <div className="sidebar-body">
                        <PerfectScrollbar>
                            <ul className="list-group list-group-flush">
                                {renderContactList(Data)} 
                            </ul>
                        </PerfectScrollbar>
                
                </div>
            </div>
        </div>
       
    )
}