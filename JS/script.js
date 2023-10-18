// JavaScript for tab functionality (keep this separate)
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {
    var factTextElement = document.getElementById('factText');
    var radioButtons = document.querySelectorAll('input[name="fav_language"]');

    // Add a change event listener to each radio button
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            // Check if the radio button is checked
            if (this.checked) {
                var selectedOption = this.value;
                // Update the paragraph text with the corresponding facts
                if (selectedOption === 'Libra') {
                    factTextElement.textContent = 'Librans are extroverted, cosy, and friendly people. Librans, like the Scales that symbolise the sign, are often concerned with attaining balance, harmony, peace, and justice in the world. With their vast stores of charm, intelligence, frankness, persuasion, and seamless connectivity, they are well-equipped to do so.';
                } else if (selectedOption === 'CSS') {
                    factTextElement.textContent = 'CSS is a styling language used for designing the layout and appearance of web pages.';
                } else if (selectedOption === 'JavaScript') {
                    factTextElement.textContent = 'JavaScript is a scripting language used for adding interactivity to web pages.';
                }
            }
        });
    });
});
