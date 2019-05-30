let id = 1

let events = [
    {
        id: id++  ,      
        eventCategory: 'Jazz Games',
        eventName: 'Jazz vs. Rockets (Game 3)',
        eventDate: '2019/04/20',
        eventNotes: 'We Lost 101-104. Donovan had a shot at the buzzer to tie :(',
        eventPicture: 'https://www.sltrib.com/resizer/-s-_xjS5l7CVOmWb0gMbwBbZujM=/0x600/smart/filters:quality(86)/arc-anglerfish-arc2-prod-sltrib.s3.amazonaws.com/public/YNHDVSUO4FH2DDP4GXDAWLH2YA.jpg',
        filterEvents: ''
    },
    {
        id: id++,
        eventCategory: 'Concerts',
        eventName: 'The Chainsmokers @ Vivint Smart Home Arena',
        eventDate: '2019/11/21',
        eventNotes: 'Sat on the front row!!',
        eventPicture: 'data:image/jpeg;base64,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' ,
        filterEvents: ''
    },
    {
        id: id++ ,      
        eventCategory: 'Other',
        eventName: 'Hike Harney Peak',
        eventDate: '2017/06/12',
        eventNotes: 'What an amazing hike!',
        eventPicture: 'https://bloximages.chicago2.vip.townnews.com/rapidcityjournal.com/content/tncms/assets/v3/editorial/1/44/144ddee8-0ba9-11e4-9bca-001a4bcf887a/53c45e6a94904.image.jpg',
        filterEvents: ''
    },
    {
        id: id++  ,      
        eventCategory: 'Jazz Games',
        eventName: 'Jazz vs. OKC (Game 3)',
        eventDate: '2018/04/21',
        eventNotes: 'We Won 115-102!!! Ricky Rubio was amazing!',
        eventPicture: 'https://i.kinja-img.com/gawker-media/image/upload/s--aCaDg6BN--/c_scale,f_auto,fl_progressive,q_80,w_800/rlf9qbhcoivfavpgx4oc.jpg',
        filterEvents: ''
    }
]

module.exports = {
    read: (req, res) => res.send(events),
    create: (req, res) => {
        let newEvent = req.body
        newEvent.id = id++
        events.push(newEvent)
        res.send(events)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = events.findIndex( (event) =>{
            return +event.id === +id
        } )
        events.splice(index, 1)
        res.send(events)
    },
    update: (req, res) => {
        let {id} = req.params
        let updatedEvent = req.body
        updatedEvent.id = id
        let index = events.findIndex( event => {
           return +event.id === +id 
        })
        events.splice(index, 1, updatedEvent)
        res.send(events)

    }

}