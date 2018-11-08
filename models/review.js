class Review {

    constructor(rating, text, date){
        this.rating = rating
        this.text = text
        this.dateArray = date.split("-")
        this.date = new Date(this.dateArray[0], this.dateArray[1], this.dateArray[2])
    }

    ratingAsStars() {
        var ratingAsStartsOutput = ""
        for (var i = 0; i < this.rating; i++) {
            ratingAsStartsOutput = ratingAsStartsOutput + "⭐️"
        }

        return ratingAsStartsOutput
    }

    toJSON(){
        return {
        rating: this.rating,
        text: this.text,
        date: this.date,
        ratingAsStars: this.ratingAsStars(),
    }}
} 

module.exports = Review