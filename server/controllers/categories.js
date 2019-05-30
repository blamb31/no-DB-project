let id = 1

let categories = [
    {
        id: id++,
        category: "Jazz Games"
    }, 
    {
        id: id++,
        category: "Concerts"
    }, 
    {
        id: id++,
        category: "Other"
    }
]


module.exports = {
    read: (req, res) => res.send(categories)
}