const quizData = [
    {
      question: "¿Por qué no es bueno desenganchar el motor del vehículo al ir circulando?.",
      answers: [
        { text: "a) Porque ello hace que el vehículo resbale.", correct: false },
        { text: "b) Porque el motor se detendrá.", correct: false },
        { text: "c) Porque no hay frenado del motor.", correct: true },
        { text: "d) Porque el motor funcionará más rápido.", correct: false }
      ]
    },
    {
      question: "La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a:",
      answers: [
        { text: "5.0 mm", correct: false },
        { text: "4.0 mm", correct: false },
        { text: "1.6 mm", correct: true },
        { text: "1.0 mm", correct: false }
      ]
    },
    {
      question: "¿Por qué usted no debería conducir presionando el pedal de embrague durante más tiempo que el necesario?",
      answers: [
        { text: "a) Porque reduce su control sobre el vehículo.", correct: true },
        { text: "b) Porque aumenta el desgaste de la caja de cambios.", correct: false },
        { text: "c) Porque aumenta el consumo de combustible.", correct: false },
        { text: "d) Porque reduce el agarre de los neumáticos.", correct: false }
      ]
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  
  function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.classList.add('hide');
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
      score++;
    }
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    questionElement.innerText = `Tu puntaje fue ${score} de ${quizData.length}.`;
    answerButtonsElement.innerHTML = '';
    nextButton.classList.add('hide');
  }
  
  startQuiz();
  