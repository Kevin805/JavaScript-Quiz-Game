// https://www.uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924

const quizData = [
    {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }, {
        question: 'How old is The Eiffel Tower',
        a: '1889',
        b: '1775',
        c: '1910',
        d: '1815',
        correct: 'a',
        
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuiz++;


}

submitBtn.addEventListener('click', () => {
    currentQuiz++;

    loadQuiz();
})