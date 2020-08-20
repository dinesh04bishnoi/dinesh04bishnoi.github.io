var education=[];
var skills = [];

function SubmitForm() {
    //Username Validations
    var status = true;
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
    //Email Validations
    var em = document.getElementById("email").value;
    var exp = /^([a-zA-Z0-9\.-]+).([a-z]{2,20})$/;
    if (em == "") {
        document.getElementById("mail").innerHTML = "Please fill Email id";
        status = false;
    }
    if (exp) {
        document.getElementById("mail").innerHTML = "Please fill valid email id";
        status = false;
    }
    else{
        if ((em.charAt(em.length - 4) != '.') && (em.charAt(em.length - 3) != '.')) {
        document.getElementById("mail").innerHTML = " . Invalid Dot Position";
        status = false;
        }
    }




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
    if (mobile != "" && mobile.length != 10) {
        document.getElementById("mobileNumber").innerHTML = "Phone Number must be 10 digit";
        status = false;
    }

    //Hobbies Validations
    var hobbi = document.getElementById("hobbies").value;
    var hobbi_validate = /^[a-zA-Z0-9]+$/;

    if (hobbi == "") {
        document.getElementById("hobby").innerHTML = "Please Enter hobbies";
        status = false;
    }

    if (hobbi != "" && !hobbi.match(hobbi_validate)) {
        status = false;
        document.getElementById("hobby").innerHTML = 'Only alphanumeric is allowed';

    }

    //Photo Validations 
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var photoUrl = document.getElementById('photo').value;
    if (!photoUrl.match(expression)) {
        status = false;
        document.getElementById("photo-error").innerHTML = 'Please Enter a url';
    }

    // education and skills validation
    if (education.length==0) {
        status = false;
        document.getElementById("edu-error").innerHTML = 'Some fields are blank please fill them first !! ';
    }

    if (skills.length==0) {
        status = false;
        document.getElementById("skill-error").innerHTML = 'Some fields are blank please fill them first !! ';
    }



    if (!status) {
        document.getElementById('alert-danger').style.display = "block";
        return false;
    } else {
        document.getElementById('alert-danger').style.display = "none";
        passValues();
    }

}

//Education Validation

function addEducation() {
    let temp={};
    var level = document.getElementById('level').value;
    var year = document.getElementById('year').value;
    var grade = document.getElementById('grade').value;
    

    if (year.length > 4) {
        document.getElementById("error").innerHTML = 'Year should be  4 digit'
        return false;
    }


    if (year > 2021) {
        document.getElementById("error").innerHTML = 'Year should be less than 2021';
        return false;
    }
    if (year < 1920) {
        document.getElementById("error").innerHTML = 'Year should be graeter than 1920';
        return false;
    }

    temp['level']=level;
    temp['year']=year;
    temp['grade']=grade;
    education.push(temp);
   
    var appendHtml = `<tr> <td>${level}</td> <td>${year}</td> <td>${grade}</td>  <td><button class='btn btn-danger' onclick="removeEducation(this)">Remove</button></td> </tr>`;
    document.getElementById('table').innerHTML += appendHtml;
   
}

//add Skills 

function addSkills() {
    let temp={};
    var name = document.getElementById('skillName').value;
    var rating = document.getElementById('rating').value;
    temp['skillName'] = name;
    temp['Rating'] = rating;
    skills.push(temp);
    var appendHtml = `<tr> <td>${name}</td> <td>${rating}</td>   <td><button class='btn btn-danger' onclick="removeSkills(this)">Remove</button></td> </tr>`;
    document.getElementById('table2').innerHTML += appendHtml;

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
