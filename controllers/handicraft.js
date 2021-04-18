//import handicraft model
const Handicraft = require("../models/Handicraft")

//index-generate a page for all handicrafts

const index = async(req, res) => {
    //get all the handicrafts
    const Handicrafts = await Handicraft.find({})

    //render the view of all handicrafts
    res.render("handicraft/index", {
        handicrafts: Handicrafts
    })
}

//show-generate a page of one handicraft
const show = async (req, res) => {
    //get the id param
    const id = req.params.id
    //get one handicraft
    const handicraft = await Handicraft.findById(id)
    //render a view of that handicraft
    res.render('handicraft/show', {
        handicraft
    })
}
//new => generate a new version of the handicrafts
const newHandicraft = async(req, res) => {
    res.render('handicraft/new')
}

//create - create a new handictraft/order and redirect to index
const create = async(req, res) => {
    //create a new handicarft order
    await Handicraft.create(req.body)
    res.redirect("/handicrafts")
}

const buy = async (req, res) => {
    //get the handicraft's ID
    const id = req.params.id//decrease the left number after every buy button ius clicked
    await Handicraft.findByIdAndUpdate(id, {$inc: {left: -1}})
    //redirect to main page
    res.redirect("/handicrafts")
}

//export the controller models
module.exports = {
    index,
    show,
    new: newHandicraft,
    create,
    buy

}