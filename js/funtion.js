function checkAge() {
    // Get the input date value
    var dobInput = document.querySelector('.age-checker input[type="date"]');
    var dob = new Date(dobInput.value);

    // Calculate the age
    var currentDate = new Date();
    var age = currentDate.getFullYear() - dob.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    if (
      currentDate.getMonth() < dob.getMonth() ||
      (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())
    ) {
      age--;
    }

    // Display the result
    var resultSpan = document.querySelector('.age-result .result');
    var alartText = document.querySelector('.age-result .alart-text');
    var ageImg = document.querySelector('.age-img img');
    var ageResultSection = document.querySelector('.age-result');

    resultSpan.textContent = age;

    if (age < 18) {
      alartText.textContent = 'You are Child';
      ageImg.src = './assest/img/child.png';
    } else {
      alartText.textContent = 'You are adult';
      ageImg.src = './assest/img/adult.jpg';
    }

    // Show the result section
    ageResultSection.style.display = 'block';
  }

  // Add event listener to the button
  var checkAgeButton = document.querySelector('.age-checker button');
  checkAgeButton.addEventListener('click', checkAge);