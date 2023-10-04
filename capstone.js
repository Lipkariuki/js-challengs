let events = [
    {
        title:"Birthday",
        date:new Date('2023-09-29T10:00:00.000Z'),
        location: "Safari Park",
        attendees: new Set(['Philip', 'Kelvin','Mercy'])
    },
    {
        title:"Wedding",
        date:new Date('2015-10-01T10:00:00.000Z'),
        location: "Fahari Gardens",
        attendees: new Set(['Becky', 'Irene','Tony'])
      
    },
    {
        title:"Graduation",
        date:new Date('2015-03-25T12:00:00-06:30'),
        location: "Weston",
        attendees: new Set(['Mark', 'Angie','Mercy'])
    },
    {
        title:"Ordination",
        date:new Date('2023-10-02T12:00:00-06:30'),
        location: "All Saints",
        attendees: new Set(['Mark', 'Angie','Mercy'])
    },
    {
        title:"Marathon",
        date:new Date('2023-11-30T12:00:00-06:30'),
        location: "Kasarani",
        attendees: new Set(['Kip', 'Ted','Olyvia'])
    },

    {
        title:"Pass Out",
        date:new Date('2023-10-06T12:00:00-06:30'),
        location: "GSU",
        attendees: new Set(['Mark', 'Angie','Mercy'])
    },

    {
        title:"Final Exam",
        date:new Date('2023-10-02T12:00:00-06:30'),
        location: "Zindua",
        attendees: new Set(['Philip', 'Alex','Tracy'])
    }

]
//1st event
const birthdayProps = events[0]
console.log(Object.keys(birthdayProps))
console.log(Object.values(birthdayProps))
console.log(Object.entries(birthdayProps))
console.log(events[0].title)

//7 days
let currentDate = new Date();
const nextDays = new Date(currentDate);
nextDays.setDate(currentDate.getDate() + 7);
// //next 7 func filter
const filteredRecords = events.filter(events=>{
    return events.date < nextDays
})


// //display title, location and date of events
const minRecords = events.map(events=>({title:events.title,date:events.date=new Date,location:events.location}))


// //for each
events.forEach((events)=>{
    console.log(events.title,events.date)
})

// //.add()
const addAttendees = new Set((events));
addAttendees.add(events[0].attendees("Ryan","Jest"))
console.log(addAttendees)

// //access specific object in array
for (const w in events) {
    if (events[w].title ==="Wedding") {
      console.log(events[w]);
    }
  }  

//map for the event organizers
const eventOrganizers = new Map()
eventOrganizers.set("Wedding","Irene")
eventOrganizers.set("Birthday","Kelvin")
eventOrganizers.set("Graduation","Angie")

 




console.log(showEvents)
console.log(currentDate)
console.log(minRecords)
console.log(nextDays)
console.log(filteredRecords)