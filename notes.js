const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=>{
    const notes = loadNotes()
    
    // debugger

    console.log(chalk.blue.inverse('Your Notes'))
    
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()

    const selectedNote = notes.find((note) => note.title === title)

    if(selectedNote){
        console.log(chalk.green(selectedNote.title))
        console.log(selectedNote.body)
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}


const removeNote = (title)=>{
    const notes = loadNotes()
    
    const currNotes = notes.filter((note)=>note.title !== title)

    if(currNotes.length === notes.length){
        console.log(chalk.red.inverse('No note found!'))
    }
    else{
        saveNotes(currNotes);
        console.log(chalk.green.inverse('Note removed'))
    }
    
}

const addNote = (title, body)=>{
    const notes = loadNotes()  
    const duplicateNote = notes.find((note) => note.title===title) 
    
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('Note Added'))
    }
    else{
        console.log(chalk.red.inverse('Note Exists'))
    }

}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = JSON.parse(dataBuffer.toString())
        return data
    }catch(e){
        return []
    }
}

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote:removeNote,
    readNote:readNote
}