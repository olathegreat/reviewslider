let Reviews= [
   
    {
        id: "1",
        Name: "Ola the great",
        Position: "Ui/Ux",
        Comment:"Truly, there is nothing better that getting to live my life well as a developer",
        img: "img2.jpg",

    },
    {
        id: "1",
        Name: "Bola",
        Position: "Backend Developer",
        Comment:"I am trying my best to be who i want to be",
        img: "img3.jpg",

    },
    {
        id: "1",
        Name: "Odogwu",
        Position: "Ethical Hacker",
        Comment:"With much consistency and hardwork for what i want , i a going places",
        img: "img4.jpeg",

    },
    {
        id: "1",
        Name: "Susan Rice",
        Position: "Web Dev",
        Comment:"Since is started coding, i have been living the life of a party. I am delighted to have learnt and make progress with my knowledge",
        img: "img1.jpg",

    },
]

let Name = document.querySelector(".Name");
let Position = document.querySelector(".Position");
let Comment = document.querySelector(".Comment");
let imgLink = document.querySelector("img");
let leftButton = document.querySelector(".left");
let rightButton = document.querySelector(".right");
let count = 0;

rightButton.addEventListener("click", function(){
  
  if(count<3){
      count++
  }
  else{
      count=0
  }
  imgLink.src= Reviews[count].img;
  Name.textContent= Reviews[count].Name;
  Comment.textContent= Reviews[count].Comment;
  Position.textContent= Reviews[count].Position;
  return count;

  
    
    
    

})

leftButton.addEventListener("click", function(){
  
    if(count>1 || count<4){
        count--;
    }
    else{
        count=3;
    }
    
    imgLink.src= Reviews[count].img;
    Name.textContent= Reviews[count].Name;
    Comment.textContent= Reviews[count].Comment;
    Position.textContent= Reviews[count].Position;
    return count;
  
    
      
      
      
  
  })