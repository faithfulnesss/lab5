
const container = document.querySelector(".settings_container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                })
            }
        })
    })
})


// signUp.addEventListener("click", () => {
//     container.classList.add("active_form");
// });
// login.addEventListener("click", () => {
//     container.classList.remove("active_form");
// });

let wrapper = document.querySelector('.wrapper');
let footer = document.querySelector('.footer');
let settings_container = document.querySelector('.settings_container');


document.querySelector('.settings_button').addEventListener('click', () => {
    if (wrapper.style.display === 'none') {
        wrapper.style.display = '';
        footer.style.display = '';
        settings_container.style.display = 'none';
    } else {
        wrapper.style.display = 'none';
        footer.style.display = 'none';
        settings_container.style.display = '';
    }
})


document.querySelector('#icon_with_text').addEventListener('click', () => {
    if(wrapper.style.display === 'none') {
        wrapper.style.display = '';
        footer.style.display = '';
        settings_container.style.display = 'none';
    }
})
