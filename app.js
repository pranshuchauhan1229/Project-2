const player=[
    {
        name:"Rishabh Pant" ,
        link:'https://www.cricbuzz.com/profiles/10744/rishabh-pant',
        expert:'https://static.thenounproject.com/png/1569883-200.png'
    },
    {
        name:"Axar Patel",
        link:'https://www.cricbuzz.com/profiles/8808/axar-patel',
        expert:'https://png.pngitem.com/pimgs/s/133-1332603_cricket-accessories-bat-ball-equipment-outdoor-hd-png.png'
    },
    {
        name: "Prithvi Shaw"	,
        link:'https://www.cricbuzz.com/profiles/12094/prithvi-shaw',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
    },
    {
        name: "Anrich Nortje"	,
        link:'https://www.cricbuzz.com/profiles/11427/anrich-nortje',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "David Warner"	,
        link:'https://www.cricbuzz.com/profiles/1739/david-warner',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
        
    },
    {
        name: "Lalit Yadav"	,
        link:'https://www.cricbuzz.com/profiles/13252/lalit-yadav',
        expert:'https://png.pngitem.com/pimgs/s/133-1332603_cricket-accessories-bat-ball-equipment-outdoor-hd-png.png'
        
    },
    {
        name: "Rovman Powell"	,
        link:'https://www.cricbuzz.com/profiles/11445/rovman-powell',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
    },
    {
        name: "Shardul Thakur"	,
        link:'https://www.cricbuzz.com/profiles/8683/shardul-thakur',
        expert:'https://png.pngitem.com/pimgs/s/133-1332603_cricket-accessories-bat-ball-equipment-outdoor-hd-png.png'
        
        
    },
    {
        name: "Kuldeep Yadav"	,
        link:'https://www.cricbuzz.com/profiles/8292/kuldeep-yadav',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "khaleel Ahamad"	,
        link:'https://www.cricbuzz.com/profiles/10952/khaleel-ahmed',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
    },
    {
        name: "Chetan Sakariya"	,
        link:'https://www.cricbuzz.com/profiles/13494/chetan-sakariya',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
        
    },
    {
        name: "Mustafizur Rahman"	,
        link:'https://www.cricbuzz.com/profiles/9863/mustafizur-rahman',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "Mitchell Marsh"	,
        link:'https://www.cricbuzz.com/profiles/6250/mitchell-marsh',
        expert:'https://png.pngitem.com/pimgs/s/133-1332603_cricket-accessories-bat-ball-equipment-outdoor-hd-png.png'
        
    },
    {
        name: "Yash Dhull"	,
        link:'https://www.cricbuzz.com/profiles/22556/yash-dhull',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
        
    },
    {
        name: "Ripal Patel"	,
        link:'https://www.cricbuzz.com/profiles/15516/ripal-patel',
        expert:'https://png.pngitem.com/pimgs/s/133-1332603_cricket-accessories-bat-ball-equipment-outdoor-hd-png.png'
        
    },
    {
        name: "Sarfaraz Khan"	,
        link:'https://www.cricbuzz.com/profiles/9429/sarfaraz-khan',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
        
    },
    {
        name: "K S Bharat"	,
        link:'https://www.cricbuzz.com/profiles/9025/srikar-bharat',
        expert:'https://static.thenounproject.com/png/1569883-200.png'
        
    },
    {
        name: "Tim Seifert"	,
        link:'https://www.cricbuzz.com/profiles/9443/tim-seifert',
        expert:'https://static.thenounproject.com/png/1569883-200.png'
        
    },
    {
        name: "Lungi Ngidi"	,
        link:'https://www.cricbuzz.com/profiles/9603/lungi-ngidi',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "Praveen Dubey"	,
        link:'https://www.cricbuzz.com/profiles/10484/praveen-dubey',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "Mandeep Singh"	,
        link:'https://www.cricbuzz.com/profiles/6319/mandeep-singh',
        expert:'https://static.thenounproject.com/png/2005489-200.png'
        
        
    },
    {
        name: "Kamlesh Nagarkoti"	,
        link:'https://www.cricbuzz.com/profiles/12092/kamlesh-nagarkoti',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "Ashwin Hebbar"	,
        link:'https://www.cricbuzz.com/profiles/10254/ashwin-hebbar',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    },
    {
        name: "Vicky Ostwal"	,
        link:'https://www.espncricinfo.com/player/vicky-ostwal-1292520',
        expert:'https://static.thenounproject.com/png/2005504-200.png'
        
    }
    
]
let length = player.length;
for(let i=0; i<length;i++)
{
    // console.log(player[i].name + " ");
    document.getElementById("playerList").innerHTML += `<li><a href=${player[i].link} target="_blank">${player[i].name}</a><img src=${player[i].expert} class="img-fluid mx-2"></img></li>` ;
}



const staff=[
    {
        name:"Ricky Ponting",
        link:'https://www.cricbuzz.com/profiles/38/ricky-ponting'
    },
    {
        name:"Shane Watson " ,
        link:'https://www.cricbuzz.com/profiles/158/shane-watson '
    },
    {
        name:"Ajit Agarkar " ,
        link:'https://www.cricbuzz.com/profiles/146/ajit-agarkar '
    },
    {
        name:" James Hopes" ,
        link:'https://www.cricbuzz.com/profiles/364/james-hopes '
    },
    {
        name:" Praveen Amre " ,
        link:'https://www.cricbuzz.com/profiles/3895/pravin-amre '
    },
    {
        name:"Patrick Farhart " ,
        link:'https://au.linkedin.com/in/patrick-farhart-67a0354a '
    }
]
let count = staff.length;
 for(let j=0; j<count;j++)
{
    // console.log(player[i].name + " ");
    // console.log(player[i].name + " ");
    document.getElementById("staffList").innerHTML += `<li><a href =${staff[j].link} target="_blank">${staff[j].name}</a></li>` ;
}