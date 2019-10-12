import React from 'react';
import { Email, Facebook } from 'react-sharingbuttons';
import M from 'materialize-css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'react-sharingbuttons/dist/main.css';

const copyUrl = () => { 
    let options = {
        displayLength: 2000,
        classes: 'rounded',
        html: 'URL Copied'
    }
    M.toast(options)
};

const ShareRoom = (props) => {


    let { room } = props;
    let roomUrl = room && room.id ? 'https://nv-marioplan.firebaseapp.com/room/'+room.id:'';
    return (
        <div id="share-modal" className="modal bottom-sheet">
            <div className="modal-content center-align">
                <h5>Share Room</h5>
                <div className="row">
                    <div className="col s8 m8 l8 offset-l2 s-2 m-2">
                        <input type="text" readOnly value={roomUrl} />
                    </div>
                    <div className="col s2 m2 l2">
                        <CopyToClipboard text={roomUrl} onCopy={copyUrl}>
                            <a className="btn-floating grey">
                                <i className="material-icons right">content_copy</i>
                            </a>
                        </CopyToClipboard>
                    </div>
                </div>
                <div>
                    <Facebook url={roomUrl} />
                    <Email url={roomUrl} text={'Email'} subject={"Planning Poker: Join your team!"} />
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
    )
}

export default ShareRoom