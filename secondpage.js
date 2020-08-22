var education=JSON.parse(localStorage.getItem('education'));
var skills=JSON.parse(localStorage.getItem('Skill'));
console.log(education);

console.log(skills);

document.getElementById("result").innerHTML = localStorage.getItem("Name");
document.getElementById("result2").innerHTML = localStorage.getItem("Address");
document.getElementById("result3").innerHTML = localStorage.getItem("Email");
document.getElementById("result4").innerHTML = localStorage.getItem("Phone No.");
document.getElementById("result5").innerHTML = localStorage.getItem("Hobbies");
// document.getElementById("result6").innerHTML = "Studied :- " + localStorage.getItem("Level") + " In Year " + localStorage.getItem("Year") + " With Grade " + localStorage.getItem("Grade") + "";
// document.getElementById("result7").innerHTML = "You got :- " + localStorage.getItem("Skills") + " In your skills With Rating " + localStorage.getItem("Rating") + "";
education.forEach((element,index) => {
    var html=`${index+1}:- Studied :- ${element.level} In Year ${element.year} With Grade ${element.grade}<br>`;
    document.getElementById("result6").innerHTML+=html;
});

skills.forEach((element,index) => {
    var html=`${index+1}:- You got :- ${element.skillName} in your skills with rating ${element.Rating}<br>`;
    document.getElementById("result7").innerHTML+=html;
});
var photo=document.getElementById("result8").innerHTML = localStorage.getItem("Photo");
document.querySelector('#img').src=photo;
