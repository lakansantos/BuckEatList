const express= require('express');
const {Client} = require("@googlemaps/google-maps-services-js");
const app = express();
const path= require('path')
const mongoose = require('mongoose');
const {Listing} = require('./models/reviews');
const methodOverride= require('method-override');
const { findByIdAndUpdate } = require('./models/reviews');
require('dotenv').config();


const listingPort = process.env.DBPORT; 

mongoose.connect(listingPort)
.then(()=>{
    console.log('Connected To Database')
})
.catch(err => {
    console.log('connection error');
    console.log(err)
})

const api_key= process.env.API_KEY
const PORT= process.env.PORT




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname +'/public')); 
app.use(express.static('src'));



app.get('/test/map', (req, res)=>{
    res.render('maps');
})
app.get('/signup', (req,res)=>{
    res.render('signup')
})

app.get('/test/testMap', (req, res)=>{
    res.render('testMaps')
})

app.get('/signin', (req,res)=>{
    res.render('signin')
})
//view all listings
app.get('/', async (req, res)=>{
    const listing = await Listing.find({});
        res.render('home', {listing, api_key})
})

//form to add new listings
app.get('/new/addNew', async (req,res)=>{
    res.render('reviews/new', )
})
//form to add review
app.get('/:id/review/add', async (req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render('reviews/addreview', {listing})
})

//add new listing

app.post('/', async (req,res)=>{
    const newListing = new Listing(req.body);
    
    await newListing.save();
    console.log(newListing);
    res.redirect(`/${newListing._id}`)
   })


   //add new review

   

   // shows the added listing through id
app.get('/:id', async (req, res)=>{
    const {id} = req.params;
    const listing= await Listing.findById(id)

    console.log(listing);
    res.render('reviews/show', {listing})
})


//form to edit
app.get('/:id/updateListing', async(req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id);
    res.render('reviews/update', {listing})
})

//used to edit
app.put('/:id', async (req, res)=>{
    const {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    res.redirect(`${listing._id}`)
})

//delete
app.delete('/:id', async (req,res)=>{
    const {id} = req.params;
    const deleteReview= await Listing.findByIdAndDelete(id);
    res.redirect('/')
})
app.listen(PORT, ()=>{
    console.log("Listening on port 3000.");
})



