let details =[
    {
        name: "Harry",
        age: "20",
        country: "India",
        hobbies: ['dance','design','play']
    },
    {
        name: "Sam",
        age: "32",
        country: "US",
        hobbies: ['dance','watch','sing']
    },
    {
        name: "Jay",
        age: "46",
        country: "Australia",
        hobbies: ['eating','write','read']
    },
    {
        name: "Alex",
        age: "28",
        country: "Russia",
        hobbies: ['sleep','Lazy','Eating']
    },
];

function displayCountry(details){
    console.log("People in India");
    details.forEach(element =>{
        if(element.country == "India"){
            console.log(element);
        }
    });
}

function displayAge(details){
    console.log("People with age less than 30");
    details.forEach(element =>{
        if (element.age<30)
        {
            console.log(element);
        }
    });
}
displayAge(details);
displayCountry(details);