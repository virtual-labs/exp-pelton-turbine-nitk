
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
    question: "A Pelton wheel is ideally suited for",
    answers: {
      a: "High head and low discharge",
      b: "High head and high discharge",
      c: "Low head. and low discharge",
      d: "Medium head and medium discharge"
    },
    correctAnswer: "a"
  },

  {
    question: "The unit discharge through the hydraulic. turbine is",
    answers: {
      a: "Q/√H",
      b:" Q/H",
      c: "Q/H<sup>2</sup>",
      d: "Q/H<sup>3/2</sup>"
    },
    correctAnswer: "d"
  },

  {
    question: "Multiple jets are used in pelton wheel for",
    answers: {
      a: "Increasing the power output with the same specific head",
      b: "Increasing the speed of rotation while keeping same specific speed",
      c: "Increasing the specific. speed with the same power output",
      d: "Increasing the power output with the same head"
    },
    correctAnswer: "d"
  },
  {
    question: "In an impulse turbine installation, excessive water hammer heads are avoided by using",
    answers: {
      a: "Guide wheel",
      b: "Brake nozzle",
      c: "Diffuser",
      d: "Needle valve"
    },
    correctAnswer: "c"
  },
  {
    question: "The pressure of water is atmospheric and remains constant while passing over the runner in",
    answers: {
    a: "Impulse turbine",
    b: "Reaction turbine",
    c: "Steam turbine",
    d: "None of the above"
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
