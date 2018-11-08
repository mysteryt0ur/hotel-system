const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel.js')
var Review = require('../models/review.js')

describe('Hotel', function() {

    it ('should initialise properly', function() {
        var hotel = new Hotel("Hilton Metropole", "London")

        expect(hotel.name).to.equal("Hilton Metropole")
        expect(hotel.city).to.equal("London")
        expect(hotel.reviews).to.deep.equal([])
        expect(hotel.reviewCount()).to.equal(0)
        expect(hotel.rating()).to.equal(0)
        expect(hotel.ratingAsStars()).to.equal('') 
    })

    it ('should return hotel and city in url format', function() {
        var hotel = new Hotel("Hilton Metropole", "London")

        expect(hotel.urlSlug()).to.equal("hilton_metropole_london")
    })

    it ('should add a reviews to the review array', function() {
        var hotel = new Hotel("Hilton Metropole", "London")
        var review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

        hotel.addReview(review2)
        hotel.addReview(review1)

        expect(hotel.reviews).to.deep.equal([review2, review1])
    })
})