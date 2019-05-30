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
    read: (req, res) => res.send(categories),
    create: (req, res) => {
        console.log(req.body)
        let newCategory = req.body
        newCategory.id = id++
        categories.push(newCategory)

        res.send(categories)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = categories.findIndex( (category) =>{
            return +category.id === +id
        } )
        categories.splice(index, 1)
        res.send(categories)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedCategory = req.body
        updatedCategory.id = id
        let index = categories.findIndex( category => {
           return +category.id === +id 
        })
        categories.splice(index, 1, updatedCategory)
        res.send(categories)

    }
}