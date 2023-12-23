import React from 'react';
import style from './Notecard.module.css'

function Notecard({ id, title, content, bgcolor, onNoteClick }) {


    return (
        <div className={style.card} onClick={onNoteClick}>
            <div style={{ backgroundColor: bgcolor, borderRadius: "8px", padding: "5px" }}>
                <div className={style.title}>{title}</div>
                <div className={style.content}>{content}</div>
            </div>
        </div>
    )
}

export default Notecard