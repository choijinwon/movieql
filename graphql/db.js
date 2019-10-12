export const people = [
    {
        id:"0",
        name:"chojinwon",
        age:"37",
        gender:"female"
    },
    {
        id:"1",
        name:"jinwon",
        age:"27",
        gender:"female"
    },
    {
        id:"2",
        name:"babo",
        age:"28",
        gender:"female"
    },
    {
        id:"3",
        name:"namek",
        age:"29",
        gender:"female"
    },
    {
        id:"4",
        name:"chojinwon",
        age:"37",
        gender:"female"
    },
    ];
    export const getById = id =>{
        const filteredPeople = people.filter(person => person.id === String(id));
        return filteredPeople[0];
    }
    