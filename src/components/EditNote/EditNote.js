import React, { useState, useEffect } from 'react';
import style from './EditNote.module.css'

function EditNote({ selectedNote, onEditNote, onDeleteNote }) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        if (selectedNote) {
            setNoteTitle(selectedNote.title || "");
            setNoteContent(selectedNote.content || "");
            setColor(selectedNote.profilecolor || "");
        }
    }, [selectedNote]);

    const handleEdit = () => {
        const editedNote = {
            ...selectedNote,
            title: noteTitle,
            content: noteContent,
            profilecolor: color,
        };
        onEditNote(editedNote);
    };

    const handleDelete = () => {
        onDeleteNote(selectedNote.id);
    };

    return (
        <>
            <div className={style.popup_box}>
                <div className={style.box}>
                    <div className={style.form} style={{ backgroundColor: color, padding: '10px' }}>
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
                        <button className={style.btn} onClick={handleDelete}>Delete</button>
                        <button className={style.btn} onClick={handleEdit}>Close</button>
                    </div>
                </div>
            </div></>
    )
}

export default EditNote