function generateQuestionPaper() {
  const totalMarks = parseInt(document.getElementById('totalMarks').value);
  const easyPercentage = parseInt(document.getElementById('easyPercentage').value);
  const mediumPercentage = parseInt(document.getElementById('mediumPercentage').value);
  const hardPercentage = parseInt(document.getElementById('hardPercentage').value);

  if (easyPercentage + mediumPercentage + hardPercentage !== 100) {
    alert("Percentages should sum up to 100%");
    return;
  }

  const url = `http://localhost:3000/generate-paper?totalMarks=${totalMarks}&easyPercentage=${easyPercentage}&mediumPercentage=${mediumPercentage}&hardPercentage=${hardPercentage}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => displayQuestionPaper(data))
    .catch(error => console.error('Fetch Error:', error)); // Log fetch errors to console
}

// Function to display the generated question paper
function displayQuestionPaper(questionPaper) {
  const questionPaperDiv = document.getElementById('questionPaper');
  questionPaperDiv.innerHTML = '';

  for (const difficulty in questionPaper) {
    if (questionPaper.hasOwnProperty(difficulty)) {
      const questions = questionPaper[difficulty];

      const difficultyHeader = document.createElement('h3');
      difficultyHeader.textContent = `${difficulty}`;
      questionPaperDiv.appendChild(difficultyHeader);

      questions.forEach(question => {
        const questionParagraph = document.createElement('p');
        questionParagraph.textContent = `Question: ${question.question} | Subject: ${question.subject} | Marks: ${question.marks}`;
        questionPaperDiv.appendChild(questionParagraph);
      });
    }
  }
}

