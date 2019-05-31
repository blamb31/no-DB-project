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
    read: (req, res) => {
        if(req.query.categories) {
            let queryCategories = categories.filter( category => {
                if (category.category.includes(req.query.categories)) {
                    return category
                }
            })
        
            res.send(queryCategories)
        }
        else{res.send(categories)
        }
    },
    create: (req, res) => {

        let {category} = req.body
        let newCat = {
            id: id++,
            category
        }
        categories.push(newCat)

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