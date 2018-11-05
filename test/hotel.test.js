const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel.js')

describe('Hotel', function() {

    it ('should initialise properly', function(){
        var hotel = new Hotel("Hilton Metropole", "London")

        expect(hotel.name).to.equal("Hilton Metropole")
        expect(hotel.city).to.equal("London")
        expect(hotel.reviews).to.deep.equal([])
        expect(hotel.reviewCount()).to.equal(0)
        expect(hotel.rating).to.equal(0)
        expect(hotel.ratingAsStars).to.equal('') 
    })

    it ('should return hotel and city in url format', function(){
        var hotel = new Hotel("Hilton Metropole", "London")

        expect(hotel.urlSlug()).to.equal("hilton_metropole_london_")
    })
});