const mongoose = require('mongoose');
const Review =require('./models/reviews');


mongoose.connect('mongodb://localhost:27017/reviews')
.then(()=>{
    console.log('Connection Open')
})
.catch(err => {
    console.log('connection error');
    console.log(err)
})

const seedReviews= [
    {
        nameOfListing: 'Angono Park',
        userName: 'Lakan123',
        review: 'Good spot for vacation',
        description: 'The Angono Park is located in Angono,Rizal ',
        address: '0015 AJP Rizal St. Angono, Rizal'
    },
    {
        nameOfListing: 'Binangonan',
        userName: 'Lakan25',
        review: 'Best of the best',
        description: 'The Binangonan Park is located in City',
        address: '0015 AJP Rizal St. Binangonan, Rizal'
    },
    


 
   
]

Review.insertMany(seedReviews)
    .then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log(e)
    })

// {nameOfListing":"Angono Park","userName":"Lakan123","review":"Good spot for vacation","description":"The Angono Park is located in Angono,Rizal ","address":"0015 AJP Rizal St. Angono, Rizal","__v":0}
// {nameOfListing":"Binangonan","userName":"lakan255555","review":"Good ","description":"Good","address":"0115 Binangonan, Rizal","__v":0}
// {nameOfListing":"Samgyeop Masarap SM Sta.mesa","userName":"lakantest25","review":"Bad. Charged us 12% Vat","description":"Samgyupsal Unli BBQ Restaurant","address":"Samgyeopmasarap, J239+MMH, Santa Mesa Blvd, Santa Mesa, Manila, Metro Manila","__v":0}
// {nameOfListing":"Don juan Taytay","userName":"l35dsfas$","review":"Best Buffet","description":"Unli Korean BBQ","address":"Taytay, Rizal","__v":0}
// {nameOfListing":"Wings to Sawa","userName":"lakan255","review":"Good","description":"Unli wings ","address":"Binangonan,Rizal","__v":0}
// {nameOfListing":"Roger's silog","userName":"lakan255","review":"Good","description":"Silogan","address":"Binangonan, Rizal","__v":0}
// {nameOfListing":"Shabuwarma Pasig","userName":"lakan2555","review":"Good. Best.","description":"Shabu shabu hotpot and shawarma","address":"015151 Pasig City","__v":0}
// {nameOfListing":"Shabu","userName":"Lakan25","review":"testing","description":"testing","address":"testing","__v":0}
