const Contact = require('../models/contact')

module.exports.list = function(req, res){
    const user = req.user._id
    Contact.find({user})
            .then((contacts) => {
                res.send(contacts)
            })
            .catch((err) => {
                res.send(err)
            })
}

module.exports.create = function(req, res){
    const {body} = req
    const contact = new Contact(body)
    contact.user = req.user._id
    contact.save()
            .then((contact) => {
                res.send(contact)
            })
            .catch((err) => {
                res.send(err)
            })
}

module.exports.show = function(req, res){
    const id = req.params.id
    Contact.findOne({_id: id, user: req.user._id})
            .then((contact) => {
                if(contact){
                    res.send(contact)
                }else{
                    res.send({})
                }
            })
            .catch((err) => {
                res.send(err)
            })
}

module.exports.update = function(req, res){
    const body = req.body, id = req.params.id
    Contact.findOneAndUpdate({_id: id, user: req.user._id}, body, {new: true, runValidators: true})
            .then((contact) => {
                if(contact){
                    res.send(contact)
                }else{
                    res.send({})
                }
            })
            .catch((err) => {
                res.send(err)
            })
}

module.exports.destroy = function(req, res){
    const id = req.params.id
    Contact.findOneAndDelete({_id: id, user: req.user._id})
            .then((contact) => {
                if(contact){
                    res.send(contact)
                }else{
                    res.send({})
                }
            })
            .catch((err) => {
                res.send(err)
            })
}