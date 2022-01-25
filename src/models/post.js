export default class Post {
    constructor(title, image) {
        this.image = image
        this.title = title
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            image: this.image,
        }, null, 2)
    }
}