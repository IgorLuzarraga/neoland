// En base a la api Open Trivia (https://opentdb.com/api_config.php), 
// vamos a desarrollar un trivial con la siguiente url 
// 'https://opentdb.com/api.php?amount=10'. Esta api nos devolverá una serie 
// de preguntas con sus respuestas, tanto erroneas como correctas. 

// La idea es hacer un juego en el que el usuario introduzca en un 
// input las caracteristicas del Trivial y que al darle al 'Start Game' 
// le salgan las preguntas de la api para que pueda comenzar el juego. 
// Una vez las responda todas, le mostraremos al usuario el resultado.

// Ten en cuenta que hay dos tipos de preguntas. Aquellas con 4 respuestas
// 3 erroneas y 1 correcta y aquellas con respuesta verdadero / falso.

import { Question, Questions, Response } from "./types"

export const showGame = () => {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
        <div style="margin-left:20px">
            <input data-function="questions-number" value="1" type="text" placeholder="how many questions do you want?">
            <button data-function="start-game">Start game!</button>
        
            <div data-function="gameboard">
        
            </div>
        
            <button data-function="check-game">Check game</button>
        </div>
    `

    run()
}

const run = () => {
    const btnStartGame = document.querySelector('[data-function="start-game"]')
    btnStartGame?.addEventListener('click', () => {
        

        removeReport()

        showQuestions()
            .then(questions => {
                checkAnswers(questions)
            })
            .catch(error => console.error(error))
    })
}

const showQuestions = async () => {
    const divGameBoard: HTMLDivElement | null = document.querySelector('[data-function="gameboard"]')

    let questions: Questions = []

    await fetchData()
        .then(response => {
            questions = []
            // this code will run after the fetchData function has completed and returned the data
            questions = response.results

            removeOldQuestions()
           
            response.results.forEach((question: Question, index) => {
                insertQuestion(divGameBoard, question, index)
            })
        })
        .catch(error => console.error(error));

    return questions
}

const fetchData = async () => {
//async function fetchData() {
    const baseUrl = 'https://opentdb.com/api.php?amount='

    const inputQuestionNumber: HTMLInputElement | null 
        = document.querySelector('[data-function="questions-number"]');
    //const divGameBoard: HTMLDivElement | null = document.querySelector('[data-function="gameboard"]')

    const url = `${baseUrl}${inputQuestionNumber?.value}`

    let response = await fetch(url)
    let data: Response = await response.json()
    return data
}

const insertQuestion = (divGameBoard: HTMLDivElement | null, question: Question, index: number) => {
    
    // Create a new div to hold the questions
    const divQuestions = document.createElement('div')
    divQuestions.className = 'divQuestions'

    const pCategory = document.createElement('p')
    pCategory.textContent = `Category: ${question.category}`
    divQuestions?.appendChild(pCategory)

    const pQuestion = document.createElement('p')
    pQuestion.textContent = formatQuestion(`Question: ${question.question}`)
    divQuestions?.appendChild(pQuestion)

    insertSelectOfAnswers(divQuestions, question, index)

    insertSeparator(divQuestions)

    divGameBoard?.appendChild(divQuestions)
}

const insertSelectOfAnswers = (divQuestions: HTMLDivElement, question: Question, index: number) => {
    const answersArr = 
        (question.incorrect_answers).concat(question.correct_answer)

    const options = shuffle(answersArr)

    const label = document.createElement("label");
    label.textContent = "Choose an answer:";
    divQuestions?.appendChild(label)

    const select = document.createElement("select")
    select.id = `Question_${index}`

    options.forEach((optionText) => {
        const option = document.createElement("option")
        option.textContent = optionText
        select.appendChild(option)
    })
    divQuestions?.appendChild(select)
}

const shuffle = (arr: string[]) => {

    const arrCopy = [...arr]

    for (let i = arrCopy.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arrCopy[i];
        arrCopy[i] = arrCopy[j];
        arrCopy[j] = k;
    }

    return arrCopy
}

const formatQuestion = (question: string) => 
    question
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")

const removeOldQuestions = () => {
    // Before insert new questions, remove the old ones
    const divQuestionsToRemove = document.querySelectorAll('.divQuestions')
    divQuestionsToRemove.forEach(divQuestion => {
        divQuestion.remove()
    })
}

const insertSeparator = (divContainer:  HTMLDivElement | null) => {
    const hr = document.createElement('hr')
    hr.style.border='2px solid black'

    divContainer?.appendChild(hr)
}

const checkAnswers = (questions: Questions) => {
    const btnCheckGame = document.querySelector('[data-function="check-game"]')
    btnCheckGame?.addEventListener('click', () => {

        // Create a div to insert the report with the questions
        // correct and incorrect
        const divReport = document.createElement('div')
        divReport.className = 'report'

        // get an array with all selects (with the answers)
        const selects = document.querySelectorAll('select')
        selects.forEach((select, index) => {
            const userAnswer = select.value

            const userAnswerIs = checkUserAnswer(questions[index].correct_answer, userAnswer)

            insertInReport(divReport, userAnswer, questions[index], userAnswerIs)
            
            insertSeparator(divReport)
        })

        // Insert the report inside the body
        document.body.appendChild(divReport)

        // Remove the questions to make space for the report
        removeOldQuestions()

        // Call location.reload() after 3 seconds
        // Fix an issue, when this function is called, recive the incorrect
        // questions, the ones we use before, so the report is incorrect.
        // If I reload the page, the function recives the correct questions.
        // This is an incorrect fix!!
        // TODO: find a better solution!
        // setTimeout(function() {
        //         location.reload();
        //     }, 5000);
        })

}

const checkUserAnswer = (correctAnswer: string, userAnswer: string) => 
    correctAnswer.includes(userAnswer) ? 'Corret' : 'Incorrect'


const insertInReport = (
        divReport: HTMLDivElement, 
        userAnswer: string, 
        question: Question,
        userAnswerIs: string) => {

    const divQuestion = document.createElement('div')

    // Insert the question
    const pQuestion = document.createElement('p')
    pQuestion.textContent = `Question: ${formatQuestion(question.question)}\n`
    divQuestion.appendChild(pQuestion)

    // Insert the possible answers
    const pPossibleAnswers = document.createElement('p')
    pPossibleAnswers.textContent = `Possible answers: ${shuffle(question.incorrect_answers.concat(question.correct_answer)).join(' | ')}\n`
    divQuestion.appendChild(pPossibleAnswers)

    // Insert correct answer
    const pCorrectAnswer = document.createElement('p')
    pCorrectAnswer.textContent = `Correct answer: ${question.correct_answer}\n`
    divQuestion.appendChild(pCorrectAnswer)

    // Insert user answer
    const pUserAnswer = document.createElement('p')
    pUserAnswer.textContent = `User answer: ${userAnswer}\n`
    divQuestion.appendChild(pUserAnswer)


    // Insert result (Correct or Incorrect)
    const pResult = document.createElement('p')
    pResult.textContent = `Result: ${userAnswerIs}`
    divQuestion.appendChild(pResult)

    // Append the divQuestion with the report for this particular question
    // to the divReport that contains the total report
    divReport.appendChild(divQuestion)
}


const removeReport = () => {
    // Remove the report
    const divReports = document.querySelectorAll('.report')
    divReports.forEach(report => {
        report.remove()
    })
}
