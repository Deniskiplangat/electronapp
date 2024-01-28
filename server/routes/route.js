const express = require('express'); // import the express module

const Model = require('../models/user')


const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    //
    //here our application gets the data from req.body from the frontend or postman
    const data = new Model({
        name : req.body.name,
        password:req.body.password
    })

    

    try {
        const savedData = await data.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async(req, res) => {
     try {
        const id = req.params.id
        const updatedData = req.body
        const options = {new:true}

        const result = await Model.findByIdAndUpdate(
            id,updatedData,options
        )
        res.send(result)
     } catch (error) {
        res.status(400).json({ message: error.message })
     }
})

//Delete by ID Method
router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deletedData = await Model.findByIdAndDelete(id)
        res.send(`Document with ${deletedData.id} has been deleted..`)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})





module.exports = router;
