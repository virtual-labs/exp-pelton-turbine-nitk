
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

const myQuestions = [
  {
    question: "A water turbine governor<br>1. Helps in starting and shutting down the turbo unit<br>2. Controls the speed of turbine set to match it with the hydroelectric system<br>3. Sets the amount of load which a turbine unit has to carry<br>Which of these statements are correct?",
    answers: {
      a: "1, 2 and 3",
      b: "1 and 2",
      c: "2 and 3",
      d: "1 and 3"
    },
    correctAnswer: "b"
  },

  {
    question: "The deflector of a pelton wheel",
    answers: {
      a: "Ensures that the buckets receive the full jet impact",
      b: "Avoids wastage of water during changes of load",
      c: "Reduces water hammer heads in the penstock",
      d: "Diffuses the jet into a whirling mass"
    },
    correctAnswer: "c"
  },

  {
    question: "Consider the following energies associated with a Pelton turbine:<br>1. Mechanical energy 2. Kinetic energy 3. Potential energy<br>The correct sequence of energy conversion starting from the entry of fluid is:",
    answers: {
      a: "1 - 2 - 3",
      b: "2 - 3 - 1",
      c: "3 - 2 - 1",
      d: "1 - 3 - 2"
    },
    correctAnswer: "c"
  },
  {
    question: "Saving of work done and power by fitting an air vessel to double acting reciprocating pump is of the order of",
    answers: {
      a: "Running at unit speed",
      b: "Working under unit head",
      c: "When it consumes unit discharge",
      d: "When it geometrically similar to the specific turbine"
    },
    correctAnswer: "b"
  },
  {
    question: "Consider the following types of water turbines:<br>Bulb 2. Francis 3. Kaplan 4. Pelton<br>The correct sequence of order in which the operating head decreases while developing the same power is",
    answers: {
      a: "4 - 2 - 3 - 1",
      b: "3 - 4 - 1 - 2",
      c: "2 - 1 - 4 - 3",
      d: "1 - 3 - 2 - 4"
    },
    correctAnswer: "a"
  }
];





// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
