class Hotel {

    constructor(name, city){
        this.name = name
        this.city = city
        this.reviews = []
        this.rating = 0
        this.ratingAsStars = ''
    }

    reviewCount() {
    return this.reviews.length
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
        if (hotelCityUrlString[i] == hotelCityUrlString.lastIndexOf()) {
        cityOutput = cityOutput + tempCityString 
        } else {
        cityOutput = cityOutput + tempCityString + "_"
    }}

    return nameOutput + cityOutput
    }
}
module.exports = Hotel