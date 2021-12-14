const { response } = require('express');
const express = require('express');
const { Server } = require('http');
const mongo_db_url = 'mongodb+srv://pikay0:KOFI1234@cluster0.ihtcw.mongodb.net/todo_db?retryWrites=true&w=majority';
const sever = express ();
const mongoose = require('mongoose')


Server.get('/toDOTask', function(req, res){
    res.status(200).json('All task has been granted');
});

Server.put('/toDOTask', function(req, res){
    res.status(200).json('All task has been updated');
});

Server.deleted('/toDOTask', function(req, res){
    res.status(200).json('All task has been deleted');
});



Server.listen (5050, function(){
    console.log ('Server has started to run in express')
});