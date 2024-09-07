// Get references to the form and input elements
var form = document.getElementById("resumeForm");
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var phoneElement = document.getElementById("phone");
var addressElement = document.getElementById("address");
var linkedinElement = document.getElementById("linkedin");
var educationElement = document.getElementById("education");
var skillsElement = document.getElementById("skills");
var experienceElement = document.getElementById("experience");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        // Check if all elements are found
        if (nameElement && emailElement && phoneElement && addressElement && linkedinElement && educationElement && skillsElement && experienceElement) {
            var name1 = nameElement.value;
            var email = emailElement.value;
            var phone = phoneElement.value;
            var address = addressElement.value;
            var linkedin = linkedinElement.value;
            var education = educationElement.value;
            var skills = skillsElement.value;
            var experience = experienceElement.value;
            // Create Resume Output
            var resumeOutput = "\n                <h1>Resume</h1>\n                <h2>Personal Information</h2>\n                <p>Name: ".concat(name1, "</p>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n                <p>Address: ").concat(address, "</p>\n                <p>LinkedIn: ").concat(linkedin, "</p>\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n                <h2>Skills</h2>\n                <p>").concat(skills, "</p>\n                <h2>Work Experience</h2>\n                <p>").concat(experience, "</p>\n            ");
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            }
            else {
                console.log("resumeOutputElement not found");
            }
        }
        else {
            console.log("One or more input elements not found");
        }
    });
}
else {
    console.log("Form element not found");
}
