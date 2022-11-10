import React, {useState, useEffect} from 'react'
import AppNavigation from '../AppNavigation/AppNavigation'

const AppState = () => {
    const [allNotes, setAllNotes] = useState([{

        noteId: 1,
        noteTitle: "First Note",
        noteText: "This is my first startup idea"
    },
    {

        noteId: 2,
        noteTitle: "Second  Note",
        noteText: "This is my second startup idea"
    }

])
    const [note, setNote] = useState({})
    
    const AppState = {
        allNotes,
        setAllNotes,
        note, setNote
    }

        return (
            <AppNavigation AppState={AppState}/>
        )

}