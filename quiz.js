function checkAnswer(){
    const correctAnswer="4";

    const userAnswer=document.querySelector('input[name="quiz"]:checked')?.value;

    const feedback=document.getElementById("feedback");

    if (userAnswer===correctAnswer){
        feedback.textContent="correct! Well Done."
    }else {
       feedback.textContent="Thats Incorrect! Please try again."
    }

}
document.getElementById("submit-answer").addEventListener('click' , checkAnswer);
