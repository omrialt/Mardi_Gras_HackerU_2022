`use strict`;
//email validation//
function validateEmail() {
  let mail = document.querySelector("#email").value;
  let regxMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!mail.match(regxMail)) {
    alert("invaild email!");
    return false;
  } else {
    return true;
  }
}
//full name validation//
const validateFlName = () => {
  let fName = document.querySelector("#fname").value;
  let lName = document.querySelector("#lname").value;
  let regxName = /^[A-Za-z ]+$/;
  if (!fName.match(regxName) && !lName.match(regxName)) {
    alert("invaild first and last name!");
    return false;
  } else if (!fName.match(regxName) && lName.match(regxName)) {
    alert("invaild first name!");
    return false;
  } else if (!lName.match(regxName) && fName.match(regxName)) {
    alert("invaild last name!");
    return false;
  } else {
    return true;
  }
};
//trivia//
(function () {
  function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.querySelector(".send");
  const myQuestions = [
    {
      question: "What The Color Order In The Flag of Mardi Gras?",
      answers: {
        a: "purple,gold,green",
        b: "green,purple,gold",
        c: "gold,purple,green",
      },
      correctAnswer: "a",
    },
    {
      question: "And What The Colors On The Flag Represent?",
      answers: {
        a: "purple-justice,green-faith,gold-power",
        b: "gold-justice,purple-faith,green-power",
        c: "green-justice,purple-faith,gold-power",
      },
      correctAnswer: "a",
    },
    {
      question: "Which Year The First American Mardi Gras Celebrated?",
      answers: {
        a: "1802",
        b: "1699",
        c: "1794",
      },
      correctAnswer: "b",
    },
    {
      question: "What The Dates Range That Mardi Gras Takes Place?",
      answers: {
        a: "march 23 to april 20",
        b: "april 23 to may 20",
        c: "march 23 to april 25",
      },
      correctAnswer: "c",
    },
    {
      question: "What The Main Event of Mardi Gras?",
      answers: {
        a: "beautiful monday",
        b: "fat tuesday",
        c: "the loudly friday",
      },
      correctAnswer: "b",
    },
    {
      question: "Is New Orleans the only place Mardi Gras is celebrated?",
      answers: {
        a: "yes",
        b: "its celebrated only in USA",
        c: "its celebrated in many countries around the world",
      },
      correctAnswer: "c",
    },
    {
      question: "How Many King Cakes Sold During The Mardi Gras?",
      answers: {
        a: "200,000",
        b: "600,000",
        c: "500,000",
      },
      correctAnswer: "c",
    },
    {
      question:
        "What are the groups that organize New-Orleans Mardi Gras parades called",
      answers: {
        a: "The King`s Parade",
        b: "The Krewes",
        c: "The Beautiful",
      },
      correctAnswer: "b",
    },
    {
      question: "Why The Mardi Gras Fall In Different Dates Each Year?",
      answers: {
        a: "because its depend on the wether",
        b: "because its depend on the Ester",
        c: "the mayor decided on the dates each year",
      },
      correctAnswer: "b",
    },

    {
      question: "What Was The Original Mardi Gras Purpose",
      answers: {
        a: "ancient pagan celebrations of spring and fertility",
        b: "a local holiday that set by the foundation of New-Orleans",
        c: "tradition of the indians living in the past at New-Orleans",
      },
      correctAnswer: "a",
    },
  ];
  buildQuiz();
  submitButton.addEventListener("click", showResults);
})();
