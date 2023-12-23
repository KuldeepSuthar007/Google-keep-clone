import React from 'react'
import style from './CreateNote.module.css'

function CreateNote({ color, noteTitle, noteContent, setNoteTitle, setNoteContent, setShowNoteform, setColor, handleclose }) {


    return (
        <div className={style.card}  >
            <div className={style.form} style={{ backgroundColor: color, borderRadius: "4px" }}>
                <input
                    type="text"
                    value={noteTitle}
                    placeholder='Title'
                    onChange={(e) => setNoteTitle(e.target.value)}
                />
                <br />
                <textarea
                    placeholder='Take a note...'
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                />
            </div>
            <div className={style.colorbox}>
                <div className={style.choosecolor}>
                    <div className={style.group_logo} style={{ backgroundColor: "#B38BFA" }} onClick={() => { setColor('#B38BFA') }} ></div>
                    <div className={style.group_logo} style={{ backgroundColor: "#FF79F2" }} onClick={() => { setColor('#FF79F2') }}></div>
                    <div className={style.group_logo} style={{ backgroundColor: "#43E6FC" }} onClick={() => { setColor('#43E6FC') }} ></div>
                    <div className={style.group_logo} style={{ backgroundColor: "#F19576" }} onClick={() => { setColor('#F19576') }}></div>
                    <div className={style.group_logo} style={{ backgroundColor: "#0047FF" }} onClick={() => { setColor('#0047FF') }}></div>
                    <div className={style.group_logo} style={{ backgroundColor: "#6691FF" }} onClick={() => { setColor('#6691FF') }}></div>
                </div>
                <button className={style.btn} onClick={handleclose} >Close</button>
            </div>

        </div>
    )
}

export default CreateNote