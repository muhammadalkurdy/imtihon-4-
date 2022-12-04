const elForm = document.querySelector(".form")

const elBtn = document.querySelector(".login_btn")

elBtn.addEventListener('click', (e) => {
    e.preventDefault();

    function login() {
        const elInputOne = document.querySelector('.input_one').value;
        const elInputTwo = document.querySelector('.input_two').value;

        if (elInputOne == "user@gmail.com" && elInputTwo == "user123") {
            window.location.href = "index-two.html";
        } else {
            window.location.href = "index.html";
            alert("karoch otomadis");
        }
    }

login();
});
