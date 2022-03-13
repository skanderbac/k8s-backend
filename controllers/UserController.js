var express = require('express');
const User = require('../model/user');
var UserController={};
UserController.index=async (req, res, next)=> {
    res.render('index', {title: 'Express'});
};

UserController.addUser=async(req,res,next)=>{
    var user=new User(
        {
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Phone:req.body.Phone,
            Country:req.body.Country,
            Email:req.body.Email,
        }
    );
    try{
        const savedUser=await user.save();
        res.status(200).send('added');
    }catch(err){
        next(err);
        res.status(500).send(err);

    }
};

UserController.Users=async(req,res,next)=>{
    console.log(req.params);
    const user=await User.find({})
        .then(user=>{res.status(200).json(user);console.log(user)})
        .catch(error=>{res.status(400).json(error);console.log(error)})


};

UserController.findUser=async(req,res,next)=>{
    console.log(req.params);
    const user=await User.findOne({_id:req.params.id})
        .then(user=>{res.status(200).json(user);console.log(user)})
        .catch(error=>{res.status(400).json(error);console.log(error)})


};

UserController.deleteUser=async(req,res)=>{
    const user= await User.deleteOne({_id:req.params.id})
        .then(()=>{
            res.status(200).json("user deleted");
            console.log("user deleted");
        }).catch(function(error){
        console.log(error);
    });
};


module.exports=UserController;
