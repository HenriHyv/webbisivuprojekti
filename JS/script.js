//scripti koodit
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

    if (!factTextElement) {
        console.error('factTextElement not found. Check your HTML :)');
        return;
    }

    // eventin kuuntelia jokaiselle napille
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            // Check if the radio button is checked
            if (this.checked) {
                var selectedOption = this.value;
                // päivittää halutun tiedon klikatessa
                try {
                    if (selectedOption === 'Libra') {
                        factTextElement.textContent = 'Librans are extroverted, cosy, and friendly people. Librans, like the Scales that symbolise the sign, are often concerned with attaining balance, harmony, peace, and justice in the world. With their vast stores of charm, intelligence, frankness, persuasion, and seamless connectivity, they are well-equipped to do so.';
                    } else if (selectedOption === 'Family') {
                        factTextElement.textContent = 'I have 5 siblings, 4 big sisters and 1 big brother. My brother is also in IT industry and my cousin is working at Remedy! it is a finnish gaming company';
                    } else if (selectedOption === 'Hobbies') {
                        factTextElement.textContent = 'Besides coding, i also enjoy jogging, gymnastics, video games and reading.';
                    } else {
                        throw new Error('Invalid option selected: ' + selectedOption);
                    }
                } catch (error) {
                    console.error('ERROR!:', error.message); // näyttää errorin
                    alert('ERROR CAME, PLS TRY AGAIN.'); //Error mikä näytetään käyttäjälle alert boxina
                }
            }
        });
    });
    function showAlert() {
        setTimeout(function() {
            alert("This Webpage is made for our School course Website basics. This is not professional work!");
        }, 1000); 
    }

    
    window.onload = showAlert;

    var repoListElement = document.getElementById('repo-list');

    // Function to fetching
    function fetchRepositories() {
        // Fetching
        fetch('https://api.github.com/users/henrihyv/repos')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Process data
                var repositories = data.map(repo => ({
                    name: repo.name,
                    url: repo.html_url
                }));

                // Clearaus
                repoListElement.innerHTML = '';

                //Repository display
                repositories.forEach(repo => {
                    var repoElement = document.createElement('div');
                    var repoLink = document.createElement('a');
                    repoLink.href = repo.url;
                    repoLink.target = '_blank';
                    repoLink.textContent = repo.name;
                    repoLink.style.color = 'white'; 
                    repoElement.appendChild(repoLink);
                    repoListElement.appendChild(repoElement);
                });
            })
            .catch(error => {
                // error käsittely
                console.error('Fetch error:', error);
            });
    }

    //Call the fetchRepositories function to load
    fetchRepositories();
    
});

document.addEventListener("DOMContentLoaded", function() {
    // HTML elements
    var toggleButton = document.getElementById('toggle-button');
    var repoList = document.getElementById('repo-list');

    //toggle
    function toggleRepoList() {
        if (repoList.style.display === 'none' || repoList.style.display === '') {
            repoList.style.display = 'block';
            toggleButton.textContent = 'Hide Repositories';
        } else {
            repoList.style.display = 'none';
            toggleButton.textContent = 'Show Repositories';
        }
    }

    // event listener
    toggleButton.addEventListener('click', toggleRepoList);
    
    function ContactInfo(github, email, phone, facebook) {
        this.github = github;
        this.email = email;
        this.phone = phone;
        this.facebook = facebook;
    }

    // Contact info 
    const myContactInfo = new ContactInfo(
        "https://github.com/HenriHyv",
        "mailto:henri.hyvarinen1@gmail.com",
        "tel:+358404150535",
        "https://www.facebook.com/henri.hyvarinen.733"
    );

    // Contacti
    const githubLink = document.getElementById("github-link");
    githubLink.href = myContactInfo.github;
    githubLink.textContent = "Github";

    const emailLink = document.getElementById("email-link");
    emailLink.href = myContactInfo.email;
    emailLink.textContent = "Email";

    const phoneLink = document.getElementById("phone-link");
    phoneLink.href = myContactInfo.phone;
    phoneLink.textContent = "+358404150535";

    const facebookLink = document.getElementById("facebook-link");
    facebookLink.href = myContactInfo.facebook;
    facebookLink.textContent = "Facebook";
});

