const chai = require('chai');
const expect = chai.expect;

var Review = require('../models/review.js')

describe('Review', function() {


    it ('should initialise properly - Review1', function() {
        var review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")

        expect(review1.rating).to.equal(5)
        expect(review1.text).to.equal("Excellent hotel, very clean")
        expect(review1.date).to.deep.equal(new Date(2018, 12, 17))
        expect(review1.ratingAsStars()).to.equal("⭐️⭐️⭐️⭐️⭐️")
    })

    it ('should initialise properly - Review2', function() {
        var review1 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")

        expect(review1.rating).to.equal(1)
        expect(review1.text).to.equal("Terrible hotel, smelled of mice")
        expect(review1.date).to.deep.equal(new Date(2018, 01, 01))
        expect(review1.ratingAsStars()).to.equal("⭐️")
    })

    it('should return a JSON string ', function(){
        var review1 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")

        expect(review1.toJSON()).to.equal({'rating': 1,
        'text': 'Terrible hotel, smelled of mice',
        'date': "[Date: 2018-02-01T00:00:00.000Z]",
        'ratingAsStars':'⭐️'})
    })


})