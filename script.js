
    function startQuiz() {
        var userName = document.getElementById("userName").value;

        if (userName.trim() !== "") {
            // Update the h1 and h3 with the user name and the instruction to select a category
            document.getElementById("welcomeMessage").innerHTML = "Hello " + userName + "!";
            document.getElementById("instructionMessage").innerHTML = "Please select any category below to start the quiz.";
            
            // Show the category section
            document.getElementById("categorySection").style.display = "block";
        } else {
            alert("Please enter your name to continue.");
        }
    }

    // Function to handle category selection and navigation
    function startCategory(categoryName) {
        var userName = document.getElementById("userName").value;
        
        // Check if the user has entered their name before proceeding
        if (userName.trim() === "") {
            alert("Please enter your name before selecting a category.");
            return;
        }

        // Store the user name and category (this could be done using localStorage or sessionStorage)
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("category", categoryName);

        // Redirect the user to the corresponding category page
        if (categoryName === "Pipes and Cisterns") {
            window.location.href = "Pipes and Cisterns.html";
        } else if (categoryName === "Probability") {
            window.location.href = "Probability.html";
        } else if (categoryName === "Problems on Age") {
            window.location.href = "Problems on Age.html";
        } else if (categoryName === "Profit and Loss") {
            window.location.href = "Profit and Loss.html";
        }
    }

