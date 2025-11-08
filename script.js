const quizData = [
  {
    question: "Q1: A team member is not meeting deadlines consistently. What is the best approach?",
    options: { a: "Reassign tasks to someone else", b: "Discuss privately and coach them", c: "Warn them in front of the team", d: "Ignore the issue" },
    correct: "b",
    explanation: "Private coaching helps address performance issues constructively."
  },
  {
    question: "Q2: During a conflict between two team members, the PM should:",
    options: { a: "Let them resolve it themselves", b: "Facilitate discussion to reach consensus", c: "Decide for them without discussion", d: "Escalate immediately to sponsor" },
    correct: "b",
    explanation: "Facilitating discussion helps resolve conflicts collaboratively."
  }
];

// Load the quiz onto the page
function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');

  quizData.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question-block');

    // Build options with A, B, C, D labels
    const optionsHtml = Object.entries(q.options).map(([key, value]) => {
      return `<li>
                <input type="radio" name="q${index}" value="${key}">
                <strong>${key.toUpperCase()}.</strong> ${value}
              </li>`;
    }).join('');

    div.innerHTML = `
      <p><strong>${q.question}</strong></p>
      <ul>
        ${optionsHtml}
      </ul>
      <p class="explanation" style="display:none;">Answer: ${q.correct.toUpperCase()} - ${q.explanation}</p>
    `;

    quizContainer.appendChild(div);
  });
}

// Check answers and show explanations
function submitQuiz() {
  const questionBlocks = document.querySelectorAll('.question-block');

  questionBlocks.forEach((block, index) => {
    const selected = block.querySelector(`input[name="q${index}"]:checked`);
    const explanation = block.querySelector('.explanation');

    if (selected) {
      explanation.style.color = selected.value === quizData[index].correct ? "green" : "red";
    } else {
      explanation.style.color = "orange"; // No answer selected
    }

    explanation.style.display = "block"; // Show explanation
  });
}

// Initialize quiz and submit button
window.onload = function() {
    loadQuiz();

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', submitQuiz);
};
