const express = require('express')
const router = express.Router();
const fs = require("fs")
const uuid = require('../helpers/uuid');
const notesFromDB = require("../db/db.json")

router.get("/api/notes", (req,res) =>{
    // fs.readFile("./db.json", "utf-8", (err,data)=>{
    //     if (err){
    //         res.statusCode(500).send("something went wrong");
    //         throw err;
    //     }else{
    //         const notesData = JSON.parse(data);
    //         res.json(notesData)
    //     }
    // });
    res.json(notesFromDB)
})


// router.post('/', (req,res) => {
//     console.info(`${req.method} reqeust recieved to add a notes`);
    
//     const {title, noteText } = req.body;
//     if(title && noteText ) {
//         const newNote = {
//             title,
//             newNote,
//             note_id: uuid(),
//         };
//         const response = {
//             status: 'success!',
//             body: newNote,
//         }
//         console.log(response);
//     res.status(201).json(response);
//     } else {
//         res.status(500).json('Error in posting new note')
//     }
//     })

router.post("/api/notes", (req,res)=>{
    // fs.readFile("./db.json", "utf-8", (err, data)=>{
    //     if(err){
    //         res.status(500).send("something went wrong");
    //         throw err;
    //     }else{
    //         const noteData = JSON.parse(data);
    //         noteData.push(req.body);
    //         fs.writeFile("./db.json", JSON.stringify(noteData,null,4 ), (err)=>{
    //             if (err){
    //                 res.status(500).send("something went wrong");
    //                 throw err;
    //             }else{
    //                 res.send("note added")
    //             }
    //         })
    //     }
    // })
    let noteTosave = req.body;
    let newNote = {
        id: uuid(),
        title: noteTosave.title,
        text: noteTosave.text
    }
    notesFromDB.push(newNote)
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesFromDB, null, 2))
    res.json(true)
})

module.exports = router;