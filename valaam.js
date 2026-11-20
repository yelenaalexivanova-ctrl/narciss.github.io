document.addEventListener("DOMContentLoaded", function() {
  
    const logo = document.getElementById("valaam-logo");
    if (logo) {
        logo.addEventListener("mouseover", function() {
            logo.src = "images/valaam.gif";
        });
        logo.addEventListener("mouseout", function() {
            logo.src = "images/valaam_gray.gif";
        });
    }

   
    const trigger = document.getElementById("toggle-trigger");
    const closeBtn = document.getElementById("close-btn");
    const hiddenBlock = document.getElementById("hidden-text-block");

    if (trigger && hiddenBlock) {
        trigger.addEventListener("click", function(event) {
            event.preventDefault(); 
            hiddenBlock.classList.remove("hidden");
        });
    }

    if (closeBtn && hiddenBlock) {
        closeBtn.addEventListener("click", function(event) {
            event.preventDefault();
            hiddenBlock.classList.add("hidden");
        });
    }

  
    const submitBtn = document.getElementById("quiz-submit-btn");
    const answerInput = document.getElementById("quiz-answer");

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = "сортавала";

        if (userAnswer === "") {
            alert("Пожалуйста, введите ответ!");
            return;
        }

        if (userAnswer === correctAnswer) {
            alert("Правильно!");
        } else {
            alert("Неправильно. Попробуйте еще раз.");
        }
    }

    if (submitBtn && answerInput) {
        submitBtn.addEventListener("click", checkAnswer);

    
        answerInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkAnswer();
            }
        });
    }
});
