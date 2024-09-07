// Get references to the form and input elements
const form = document.getElementById("resumeForm");
const nameElement = document.getElementById("name") as HTMLInputElement;
const emailElement = document.getElementById("email") as HTMLInputElement;
const phoneElement = document.getElementById("phone") as HTMLInputElement;
const addressElement = document.getElementById("address") as HTMLInputElement;
const linkedinElement = document.getElementById("linkedin") as HTMLInputElement;
const educationElement = document.getElementById("education") as HTMLInputElement;
const skillsElement = document.getElementById("skills") as HTMLInputElement;
const experienceElement = document.getElementById("experience") as HTMLInputElement;

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Check if all elements are found
        if (nameElement && emailElement && phoneElement && addressElement && linkedinElement && educationElement && skillsElement && experienceElement) {
            const name1 = nameElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const address = addressElement.value;
            const linkedin = linkedinElement.value;
            const education = educationElement.value;
            const skills = skillsElement.value;
            const experience = experienceElement.value;

            // Create Resume Output
            const resumeOutput = `
                <h1>Resume</h1>
                <h2>Personal Information</h2>
                <p>Name: ${name1}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Address: ${address}</p>
                <p>LinkedIn: ${linkedin}</p>
                <h2>Education</h2>
                <p>${education}</p>
                <h2>Skills</h2>
                <p>${skills}</p>
                <h2>Work Experience</h2>
                <p>${experience}</p>
            `;

            const resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
            } else {
                console.log("resumeOutputElement not found");
            }
        } else {
            console.log("One or more input elements not found");
        }
    });
} else {
    console.log("Form element not found");
}
