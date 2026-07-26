function initializeExercise() {
    const questionCards = document.querySelectorAll(".question-card");
    if (questionCards.length === 0) {
        return;
    }

    // Set up click behavior for each question separately
    questionCards.forEach(card => {
        const optionButtons = card.querySelectorAll('.option-btn');
        const feedbackMessage = card.querySelector('.feedback-message');

        optionButtons.forEach(button => {
            button.addEventListener('click', () => {

                const isCorrect = button.getAttribute('data-correct') === 'true';

                if (isCorrect) {
                    button.classList.add('correct');
                    feedbackMessage.textContent = 'Correct! Well done.';
                } else {
                    button.classList.add('incorrect');
                    feedbackMessage.textContent = 'Incorrect. Please try again.';
                }

                feedbackMessage.style.display = 'block';

                // Lock only THIS question's buttons, not every question on the page
                optionButtons.forEach(btn => btn.disabled = true);

                const nextBtn = document.getElementById('next-btn');
                    if (nextBtn) {
                        nextBtn.style.visibility = 'visible';
                    }

            });
        });
    });

    initializeQuizNavigation(questionCards);
}


function initializeQuizNavigation(questionCards) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!prevBtn || !nextBtn) {
        return;
    }

    let currentIndex = 0; // which question is currently visible

    function showQuestion(index) {
        questionCards.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
        });

        const currentCard = questionCards[index];
        const alreadyAnswered = currentCard.querySelector('.option-btn').disabled
        
        // Disable Previous on the first question, Next on the last question
        prevBtn.style.visibility = (index === 0) ? 'hidden' : 'visible';
        const isLastQuestion = (index === questionCards.length - 1);
        nextBtn.style.visibility = alreadyAnswered ? 'visible' : 'hidden';
        nextBtn.disabled = false;
        nextBtn.textContent = isLastQuestion ? 'Try Again' : 'Next';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showQuestion(currentIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        const isLastQuestion = (currentIndex === questionCards.length - 1);

        if (isLastQuestion) {
            resetQuiz();
        } else {
            currentIndex++;
            showQuestion(currentIndex);
        }
    });

    function resetQuiz() {
        questionCards.forEach(card => {
            const options = card.querySelectorAll('.option-btn');
            const feedback = card.querySelector('.feedback-message');

            options.forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('correct', 'incorrect');
            });

            feedback.style.display = 'none';
            feedback.textContent = '';
        });

        currentIndex = 0;
        showQuestion(currentIndex);
    }

    showQuestion(currentIndex); // show question 1 on load
}