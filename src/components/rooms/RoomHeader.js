import React from 'react';

const RoomHeader = (props) => {
    let { room, roomTest, leaveRoom, } = props;
    return (
        <h3 className="mr-20 ml-20">
            {room ? room.name : ""}
            <a className="btn grey right hide-on-small-only" onClick={()=>{
                leaveRoom(roomTest)
                }}>
                <i className="material-icons right">exit_to_app</i>
                Exit
            </a>
            <a className="modal-trigger btn blue right mr-10 hide-on-small-only" href="#share-modal" >
                <i className="material-icons right">share</i>
                Invite Team
            </a>
            <div className="hide-on-med-and-up right">
            <a className='dropdown-trigger btn btn-floating blue' href='#' data-target='dropdown1'><i className="material-icons right">menu</i></a>
                <ul id='dropdown1' className='dropdown-content'>
                    <li>
                        <a className="modal-trigger" href="#share-modal">
                            Share
                        </a>
                    </li>
                    <li>
                        <a onClick={()=>{leaveRoom(roomTest)}}>
                            Exit
                        </a>
                    </li>
                </ul>
            </div>
        </h3>
    )
}

export default RoomHeader