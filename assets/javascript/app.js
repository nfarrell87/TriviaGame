//Global Variables
let questions = [
    {
        Q1: "The human eye can distinguish how many different colours?",
        A1: "100,000",
        A2: "1 million",
        A3: "10 million",
        correctAnswer: ["10 million", 3]
    },
    {
        Q1: "Which is the most flexible muscle in the human body?",
        A1: "The tongue",
        A2: "Bicep",
        A3: "Trapezius",
        correctAnswer: ["The tongue", 1],
    },
    {
        Q1: "A baby has about how many bones more than an adult?",
        A1: "30",
        A2: "60",
        A3: "90",
        correctAnswer: ["90", 3],
    }
]
let seconds = 10
let wins = 0
let losses = 0

//Start the game when start button is clicked
//when start button is clicked run game function
$("#startBtn").on("click", game)
$(".guessBtn").hide();

function reset() {
    $(".timer").text("Human Anatomy Trivia!")
    let seconds = 10
    $("#startBtn").show();
    clearTimeout(intervalId);

}
function game() {

    //show a question/answer options on screen that has not been shown already
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        //hide start button
        $("#startBtn").hide();
        $(".guessBtn").show();
        $(".timer").text("10 seconds remaining!");
        //start 30 second timer counting down
        let seconds = 10;
        var intervalId = setInterval(countdown, 1000);
        function countdown() {
            if (seconds == 0) {
                clearTimeout(intervalId);
                alert("Time's up! The correct answer was: " + question.correctAnswer[0]);
            } else {
                seconds--;
                $(".timer").text(seconds + " seconds remaining!");
            }
        }
        //show question and answer from the array to user
        $("#showQuestion").empty();
        currentQuestion = $("#showQuestion").html("<H4>" + question.Q1 + "</H4>");
        answer1 = $("#answer1").html(question.A1).val(1);
        answer2 = $("#answer2").html(question.A2).val(2);
        answer3 = $("#answer3").html(question.A3).val(3);

        //When user clicks a guess, check if answer is correct
        $(".guessBtn").on("click", factChecker)

        function factChecker() {
            guess = $(this).val()
            parseInt(guess);
            console.log(guess);
            console.log(question.correctAnswer[1]);
            if (guess === question.correctAnswer[1]) {
                // $("#showAnswer").html("<h6>Correct! The answer was: </h6><H6>" + question.correctAnswer[0] + "</h6>");
                // $(".guessBtn").hide();
                // $(".timer").hide();
                // wins++;
                console.log("You win");
            }else {
                console.log("you lose")
            }
        }
    };


    //after a few seconds, display the next question
    //if the player selects the wrong answer
    //tell the player they selected the wrong option and display the correct answer
    //wait a few seconds, display the next question
    //if the player runs out of time
    //tell the player that time's up and display the correct answer
    //wait a few seconds, display the next question
};


//once all questions have been asked
    //show the number of correct answers
    //show the number of incorrect answers
    //show an option to restart the game(without reloading the page).