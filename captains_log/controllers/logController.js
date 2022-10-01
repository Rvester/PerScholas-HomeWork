const logs = require('../models/logs')




const findShip = (req, res) => {
    logs.find({}, (err, foundShip) => {
        if (err){
            res.status(400).json(err)
        }else {
            res.status(200).render('Index', {logs : foundShip})
        }
    })
}

const newShip = (req, res) => {
    res.render('New')
}


const deleteShip = (req, res) => {
    logs.findByIdAndDelete(req.params.id, (err, deleteShip) => {
        if (err){
            res.status(400).json(err)
        }else{
            res.status(200).redirect('/logs')
        }
    })
}

const updateShip = (req, res) => {
    
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = false;
    }else {
        req.body.shipIsBroken = true;
     }
    //console.log(req.body.shipIsBroken)

     logs.findByIdAndUpdate(req.params.id, { shipIsBroken: req.body.shipIsBroken }, (err, updateShip) => {
        if (err){
            res.status(400).json(err)
        }else {
            res.status(200).redirect(`/logs/${req.params.id}`)
        }
    })
}





const createNewShip = (req,res) => {
    if (req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true;
    }else {
        req.body.shipIsBroken = false;
    }


    logs.create(req.body, (err, createNewShip) => {
        if (err){
            res.status(400).json(err)
        }else {
            res.status(200).redirect('/logs')
        }
    })
}

const editShip = (req, res) => {
    logs.findById(req.params.id, (err, editShip) => {
        if (err){
            res.status(400).json(err)
        }else{
            res.status(200).render('Edit', {logs : editShip})
        }
    })
}


const showShip = (req, res) => {
    logs.findById(req.params.id, (err, showShip) =>{
        if (err){
            res.status(400).json(err)

        }else{
            res.status(200).render('Show', {logs: showShip})
        }
    }
)}

module.exports = {
    findShip,
    newShip,
    deleteShip,
    updateShip,
    createNewShip,
    editShip,
    showShip,
}





