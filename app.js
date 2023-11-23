import express from 'express';
import cors from 'cors';
const app = express();
import fs from 'fs';

app.use(cors());
// Read the question store data from JSON file
const questionsData = JSON.parse(fs.readFileSync('questionStore.json', 'utf8'));

// Endpoint to generate a question paper
app.get('/generate-paper', (req, res) => {
  // const totalMarks = req.query.totalMarks; // Total marks for the paper
  const totalMarks = req.query.totalMarks; // Total marks for the paper
  // const easyPercentage = req.query.easyPercentage;
  const easyPercentage = req.query.easyPercentage ;
  // const mediumPercentage = req.query.mediumPercentage;
  const mediumPercentage = req.query.mediumPercentage;
  // const hardPercentage = req.query.hardPercentage;
  const hardPercentage = req.query.hardPercentage;

  const calculateQuestions = (questions, percentage, difficulty) => {
    const totalQuestions = Math.floor((totalMarks * percentage) / 100);
    let selectedQuestions = [];
    let totalMarksSelected = 0;
    
    // Filter questions by difficulty
    const filteredQuestions = questions.filter(question => question.difficulty === difficulty);
    
    // Sort questions based on marks (ascending order)
    filteredQuestions.sort((a, b) => a.marks - b.marks);
  
    for (const question of filteredQuestions) {
      if (totalMarksSelected + question.marks <= totalQuestions * 1.1) {
        selectedQuestions.push(question);
        totalMarksSelected += question.marks;
      } else {
        break; // Exit loop if the limit is reached
      }
    }
  
    return selectedQuestions;
  };
  

  const easyQuestions = calculateQuestions(questionsData, easyPercentage, 'Easy');
  const mediumQuestions = calculateQuestions(questionsData, mediumPercentage, 'Medium');
  const hardQuestions = calculateQuestions(questionsData, hardPercentage, 'Hard');

  const questionPaper = {
    easyQuestions,
    mediumQuestions,
    hardQuestions,
  };
// console.log(questionPaper.mediumQuestions);
  res.json(questionPaper);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
