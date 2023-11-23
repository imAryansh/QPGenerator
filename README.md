# Question Paper Generator

This project implements a Question Paper Generator application using Node.js and Express. It generates a question paper based on specified criteria from a pool of stored questions.

## Overview

The Question Paper Generator is designed to create question papers based on criteria such as total marks and distribution of marks among different difficulty levels.

## Features

- Generates question papers based on specified criteria.
- Supports criteria like total marks and percentage distribution among easy, medium, and hard difficulty levels.
- Fetches questions from a predefined Question Store.

## Setup

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install

1.Start the server:

npm start

Usage

Access the application through the browser or API.
Input the required details like total marks, percentages for different difficulty levels, and generate the question paper.

API Endpoints

POST /generate-paper

*Generates a question paper based on provided criteria.
*Requires a JSON payload with totalMarks, easyPercentage, mediumPercentage, and hardPercentage.

Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

License

This project is licensed under the MIT License.


This is a simple structure outlining the project, its purpose, features, setup instructions, and more. Customize it by adding specifics about your project, details about the setup process, examples of usage, and any other relevant information before pushing it to your GitHub repository for the internship application.
