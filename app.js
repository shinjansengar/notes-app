const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note content',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe:'Title of note to remove from notes',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Notes list',
    handler(){
        notes.getNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    builder:{
        title:{
            describe:'Title of note to read',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()