class Hotel {

    constructor(name, city){
        this.name = name
        this.city = city
        this.reviews = []
    }

    reviewCount() {
    return this.reviews.length
    }

    rating() {
        var totalRating = 0
        if (this.reviews.length > 0) {
        for(var i = 0; i < this.reviews.length; i++){
            totalRating = totalRating + this.reviews[i].rating }
        var average = totalRating / this.reviews.length
        return average
        } else {
        return totalRating
    }
    }

    ratingAsStars(){
        var output = ''
        if (this.rating() == 0) {
            return output
        } else {
        for(var i = 0; i < this.rating(); i++){
            output = output + "⭐️"
        }
    }
    }


    urlSlug() {
        var nameOutput = ""
        var cityOutput = ""
        var hotelNameUrlString = this.name.split(" ")

    for (var i = 0; i < hotelNameUrlString.length; i++){
        var tempHotelString = hotelNameUrlString[i].toLowerCase()
        nameOutput = nameOutput + tempHotelString + "_"
    }

    var hotelCityUrlString = this.city.split(" ")

    for (var i = 0; i < hotelCityUrlString.length; i++){
        var tempCityString = hotelCityUrlString[i].toLowerCase()
        if (i == hotelCityUrlString.length - 1) {
        cityOutput = cityOutput + tempCityString 
        } else {
        cityOutput = cityOutput + tempCityString + "_"
        }
    }

    return nameOutput + cityOutput
    }

    addReview(review) {
        this.reviews.push(review)
    }

    toJSON(){
        return {
            name: this.name,
            city: this.city,
            reviewCount: this.reviewCount(),
            rating: this.rating(),
            ratingAsStars: this.ratingAsStars(),
            urlSlug: this.urlSlug(),
            reviews: this.reviews
        }
    }
} 

module.exports = Hotel