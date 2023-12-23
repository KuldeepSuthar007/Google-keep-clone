import React from 'react'
import Notecard from '../Notecard/Notecard';

function Notes({ notesData, onNoteClick }) {

    return (
        <>
            {
                notesData.map((item) => {
                    return <Notecard id={item.id} key={item.id} title={item.title} content={item.content} bgcolor={item.profilecolor} onNoteClick={() => onNoteClick(item)} />
                })
            }
        </>
    )
}

export default Notes