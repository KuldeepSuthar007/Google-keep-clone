import React from 'react';
import style from './Sidebar.module.css'
import note from '../../asset/idea.png';
import reminder from '../../asset/notification.png';
import Archive from '../../asset/archive.png';
import Trash from '../../asset/delete.png';

function Sidebar() {
    return (
        <div className={style.sidebar} >
            <div className={style.sideitembox}><img src={note} alt="" /> <span>Notes</span></div>
            <div className={style.sideitembox}><img src={reminder} alt="" /> <span>Reminders</span></div>
            <div className={style.sideitembox}><img src={Archive} alt="" /> <span>Archive</span></div>
            <div className={style.sideitembox}><img src={Trash} alt="" /> <span>Trash</span></div>
        </div>
    )
}

export default Sidebar