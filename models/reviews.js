const mongoose =require('mongoose');

const listingSchema = new mongoose.SchemaTypeOptions({
    
  
       
   
    
    address: {
        coords: {
            lat: { type: Number },
            lng: { type: Number }
        },
        content: {
            nameOfListing: {
                type: String,
            },
            userName: {
                type: String,
            },
        
            review: {
                type: [String],
                required: true
            },
            description:{
                type: String,
              
            },
            addresses:{
                type: String,
            },
     
        },
    
    }


})

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;