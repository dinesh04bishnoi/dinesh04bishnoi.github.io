var education=[];
var skills = [];
var educationStatus=false;
var skillStatus=false;
var globalStatus=false;
function validate(flag) {
    //Username Validations
    var status = true;
    if (flag == 'name') {
        
    
   
    var correct_way = /^[A-za-z .]+$/;
    var name = document.getElementById("name").value;

    if (name == "") {
        document.getElementById("message").innerHTML = "Please fill Username";
        status = false;
    }
    if (name != "" && name.length < 3) {
        document.getElementById("message").innerHTML = "Username must be 3 character";
        status = false;
    }
    if (name != "" && name.length > 20) {
        document.getElementById("message").innerHTML = "Username must be less than 20 character";
        status = false;
    }
    if (name != "" && !name.match(correct_way)) {
        status = false;
        document.getElementById("message").innerHTML = "Username must be alphabets";

    }
    if (status) {
        document.querySelector('#message').style.display="none";
    }else{
        document.querySelector('#message').style.display="";
    }
}

if (flag == 'email') {
    

    //Email Validations
    var em = document.getElementById("email").value;
    var exp = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;
    if (em == "") {
        document.getElementById("mail").innerHTML = "Please fill Email id";
        status = false;
    }
    if (!em.match(exp)) {
        document.getElementById("mail").innerHTML = "Please fill valid email id";
        status = false;
    }
    else{
        if ((em.charAt(em.length - 4) != '.') && (em.charAt(em.length - 3) != '.')) {
        document.getElementById("mail").innerHTML = " . Invalid Dot Position";
        status = false;
        }
    }
    if (status) {
        document.querySelector('#mail').style.display="none";
    }else{
        document.querySelector('#mail').style.display="";
    }
    console.log(status);
}


if (flag == 'mobile') {
    

    //Mobile Number Validations
    var mobile = document.getElementById("phone").value;

    if (mobile == "") {
        document.getElementById("mobileNumber").innerHTML = "Please fill phone number";
        status = false;
    }

    if (mobile != "" && isNaN(mobile)) {
        document.getElementById("mobileNumber").innerHTML = "Phone Number must be digit";
        status = false;
    }
    if (mobile != "" && mobile.length != 10 && !isNaN(mobile)) {
        document.getElementById("mobileNumber").innerHTML = "Phone Number must be 10 digit";
        status = false;
    }
    if (status) {
        document.querySelector('#mobileNumber').style.display="none";
    }else{
        document.querySelector('#mobileNumber').style.display="";
    }
    
}

if (flag == 'hobbi') {
    


    //Hobbies Validations
    var hobbi = document.getElementById("hobbies").value;
    var hobbi_validate = /^[a-zA-Z0-9, .]+$/;

    if (hobbi == "") {
        document.getElementById("hobby").innerHTML = "Please Enter hobbies";
        status = false;
    }

    if (hobbi != "" && !hobbi.match(hobbi_validate)) {
        status = false;
        document.getElementById("hobby").innerHTML = 'Only alphanumeric is allowed';

    }
    if (status) {
        document.querySelector('#hobby').style.display="none";
    }else{
        document.querySelector('#hobby').style.display="";
    }
}

if (flag == 'photo') {
    


    //Photo Validations 
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var photoUrl = document.getElementById('photo').value;

    if (photoUrl == "") {
        status = false;
        document.getElementById("photo-error").innerHTML = 'Please Enter a url';
    }
    if (!photoUrl.match(expression)) {
        status = false;
        document.getElementById("photo-error").innerHTML = 'Please Enter a Valid Url';
    }
    if (status) {
        document.querySelector('#photo-error').style.display="none";
    }else{
        document.querySelector('#photo-error').style.display="";
    }
}

if (flag == 'year') {
    var year = document.getElementById('year').value;
    if (year.length > 4) {
        document.getElementById("error").innerHTML = 'Year should be  4 digit'
        status= false;
    }


    if (year > 2021) {
        document.getElementById("error").innerHTML = 'Year should be less than 2021';
        status= false;
    }
    if (year < 1920) {
        document.getElementById("error").innerHTML = 'Year should be graeter than 1920';
        status=false;
    }

    if (status) {
        document.querySelector('#error').style.display="none";
    }else{
        document.querySelector('#error').style.display="";
    }

}

if (flag == 'skill') {
    var skill = document.getElementById('skillName').value;
    if (skill == "") {
        status=false;
        document.getElementById("skill-error").innerHTML =  "Please Fill an skill";
    }
    if (status) {
        document.querySelector('#skill-error').style.display="none";
    }else{
        document.querySelector('#skill-error').style.display="";
    }
}

if (flag == 'level') {
    var level = document.getElementById('level').value;
    if (level == "") {
        status=false;
        document.getElementById("level-error").innerHTML =  "Please Fill an level";
  
    }
    if (status) {
        document.querySelector('#level-error').style.display="none";
        document.querySelector('#edu-error').style.display="none";

    }else{
        document.querySelector('#level-error').style.display="";

    }
}

if (flag == 'grade') {
    var grade = document.getElementById('grade').value;
    if (grade == "") {
        status=false;
        document.getElementById("grade-error").innerHTML =  "Please Fill an grade";
  
    }
    if (status) {
        document.querySelector('#grade-error').style.display="none";
    }else{
        document.querySelector('#grade-error').style.display="";
    }


    
}
if (flag == 'rating') {
    var rating = document.getElementById('rating').value;
    if (rating == "") {
        status=false;
        document.getElementById("rating-error").innerHTML =  "Please Fill an rating";

    }
    if (status) {
        document.querySelector('#rating-error').style.display="none";
    }else{
        document.querySelector('#rating-error').style.display="";
    }

}

if (status) {
    educationStatus=true;
    skillStatus=true;
    globalStatus=true;
}
}

//Education Validation

function addEducation() {
    let temp={};
    var level = document.getElementById('level').value;
    var year = document.getElementById('year').value;
    var grade = document.getElementById('grade').value;
    if (level == "") {
        educationStatus=false;
        document.getElementById("level-error").innerHTML =  "Please Fill an level";
  
    }
    if (grade == "") {
        educationStatus=false;
        document.getElementById("grade-error").innerHTML =  "Please Fill an grade";
  
    }

    if (year == "") {
        educationStatus=false;
        document.getElementById("error").innerHTML =  "Please Fill an valid year";
  
    }

   if (educationStatus) {
    temp['level']=level;
    temp['year']=year;
    temp['grade']=grade;
    education.push(temp);
   
    var appendHtml = `<tr> <td>${level}</td> <td>${year}</td> <td>${grade}</td>  <td><button class='btn btn-danger' onclick="removeEducation(this)">Remove</button></td> </tr>`;
    document.getElementById('table').innerHTML += appendHtml;
      
   }
    
}

//add Skills 

function addSkills() {
    let temp={};
    var name = document.getElementById('skillName').value;
    var rating = document.getElementById('rating').value;
    if (name == "") {
        skillStatus=false;
        document.getElementById("skill-error").innerHTML =  "Please Fill an skill";
    }
    if (rating == "") {
        skillStatus=false;
        document.getElementById("rating-error").innerHTML =  "Please Fill an rating";

    }
    if (skillStatus) {
        temp['skillName'] = name;
        temp['Rating'] = rating;
        skills.push(temp);
        var appendHtml = `<tr> <td>${name}</td> <td>${rating}</td>   <td><button class='btn btn-danger' onclick="removeSkills(this)">Remove</button></td> </tr>`;
        document.getElementById('table2').innerHTML += appendHtml;
        
    }
    
}
//remove skills
function removeSkills(element) {
    console.log(element.parentNode.parentNode);
    element.parentNode.parentNode.remove();
    console.log(element.target);
    skills.pop();

}

//Remove education
function removeEducation(element) {
    console.log(element.parentNode.parentNode);
    element.parentNode.parentNode.remove();
    education.pop();
}

function SubmitForm(){
    if (education.length==0) {
        globalStatus = false;
        document.getElementById("edu-error").innerHTML = 'Some fields are blank please fill them first !! ';
    }
    if (skills.length==0) {
        globalStatus = false;
        document.getElementById("skill-error").innerHTML = 'Some fields are blank please fill them first !! ';
    }  

    if (!globalStatus) {
        document.getElementById('alert-danger').style.display = "block";
        return false;
    } else {
        document.getElementById('alert-danger').style.display = "none";
        passValues();
    }
}
function passValues() {
    var name = document.getElementById("name").value;
    localStorage.setItem("Name", name);
    var address = document.getElementById("address").value;
    localStorage.setItem("Address", address);
    var em = document.getElementById("email").value;
    localStorage.setItem("Email", em);
    var mobile = document.getElementById("phone").value;
    localStorage.setItem("Phone No.", mobile);
    var hobbi = document.getElementById("hobbies").value;

    localStorage.setItem("Hobbies", hobbi);
    localStorage.setItem("education", JSON.stringify(education));
     localStorage.setItem("Skill", JSON.stringify(skills));
    // localStorage.setItem("Grade", globalGrade);
    // localStorage.setItem("Skills", globalName);

    // localStorage.setItem("Rating", globalRating);
    var photo = document.getElementById("photo").value;
    localStorage.setItem("Photo", photo);
    goToNextPage();

}
function goToNextPage() {
    document.location.href = "page2.html";
}
