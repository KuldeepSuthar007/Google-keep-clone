import React from 'react'
import style from './Home.module.css'
import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import plus from '../../asset/plus.png'
import CreateNote from '../../components/CreateNote/CreateNote';
import Notes from '../../components/Notes/Notes';
import EditNote from '../../components/EditNote/EditNote';


function Home() {
    const [showNoteform, setShowNoteform] = useState(false);
    const [showNote, setShowNote] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [color, setColor] = useState('#ffffff');
    const [notesData, setNotesData] = useState([]);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [selectedNote, setSelectedNote] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');


    const handleclose = (e) => {
        e.preventDefault();
        const newNote = {
            id: Date.now().toString(),
            title: noteTitle,
            content: noteContent,
            profilecolor: color,
        };
        setNotesData([newNote, ...notesData]);
        setShowNoteform(false);
        setColor("");
        setNoteTitle("");
        setNoteContent("");
    }

    const handleShowNote = (note) => {
        console.log(note);
        setShowNote(true);
        setSelectedNote(note);
    };



    const handleEditNote = (editedNote) => {
        const updatedNotes = notesData.map((note) =>
            note.id === editedNote.id ? editedNote : note
        );
        setNotesData(updatedNotes);
        setShowNote(false);
    };

    const handleDeleteNote = (noteId) => {
        const shouldDelete = window.confirm('Are you sure you want to delete this note?');
        if (shouldDelete) {
            const updatedNotes = notesData.filter((note) => note.id !== noteId);
            setNotesData(updatedNotes);
            setShowNote(false);
        }

    };

    const filteredNotes = notesData.filter((note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        try {
            const storedData = JSON.parse(localStorage.getItem('Notesdata')) || [];
            setNotesData((prevNotesData) => {
                if (prevNotesData.length === 0 && storedData.length > 0) {
                    return storedData;
                }
                return prevNotesData;
            });
        } catch (error) {
            console.log(error);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('Notesdata', JSON.stringify(notesData))
    }, [notesData])


    return (
        <div className={style.main}>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className='midcontainer'>
                {showNote && <EditNote selectedNote={selectedNote} onEditNote={handleEditNote} onDeleteNote={handleDeleteNote} />}
                <div className="sidebarbox">
                    {isSidebarOpen && <Sidebar />}</div>
                <div className='maincontainer'>
                    <div className='createbtn' onClick={() => setShowNoteform(true)}>
                        <img src={plus} alt="" />
                    </div>
                    {showNoteform && <CreateNote color={color} setNoteTitle={setNoteTitle} setNoteContent={setNoteContent} setShowNoteform={setShowNoteform} setColor={setColor} handleclose={handleclose} />}
                    <div className='Notes' >
                        <Notes notesData={filteredNotes} onNoteClick={handleShowNote} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home