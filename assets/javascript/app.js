//Global Variables
let questions = [
    {
        Q1: "The human eye can distinguish how many different colours?",
        answers: ["100,000", "1 million", "10 million"],
        correctAnswer: "10 million",
        img: "assets/images/hairdryer.jpg",
    },
    {
        Q1: "Which is the most flexible muscle in the human body?",
        answers: ["The tongue", "Bicep", "Trapezius"],
        correctAnswer: "The tongue",
        img: "assets/images/football.jpg",
    },
    {
        Q1: "A baby has about how many bones more than an adult?",
        answers: ["30", "60", "90"],
        correctAnswer: "90",
        img: "assets/images/strings.jpg",
    },
    {
        Q1: "In which part of the body is the Navicular bone?",
        answers: ["Hand", "Foot", "Head"],
        correctAnswer: "Foot",
        img: "assets/images/running.jpg",

    },
    {
        Q1: "The Palatine Glands are more commonly known as what?",
        answers: ["Tonsils", "Lymph Nodes", "Sweat Glands"],
        correctAnswer: "Tonsils",
        img: "assets/images/looking.jpg",
    },
    {
        Q1: "This feels like a weird fix",
        answers: "but it works for now",
        correctAnswer: "so here it is",
    }

]
let seconds = 10;
let wins = 0;
let losses = 0;
let current = 0;
let total = 0;

//Start the game when start button is clicked
//when start button is clicked run game function
$("#startBtn").on("click", game)
$(".guessBtn").hide();


function reset() {
    seconds = 10;
    wins = 0;
    losses = 0;
    current = 0;
    total = 0;
    $("#playAgain").hide;
    $(".timer").text("Human Anatomy Trivia!");
    $("#showAnswer").text("You will have 10 seconds to answer each question, so be ready!");
    $("#startBtn").show();
    $(".myImg").hide();
}

// 
function game() {
    $("#showAnswer").empty();
    $("#startBtn").hide();
    $("#showQuestion").html("<H4>" + questions[current].Q1 + "</H4>");
    $("#showQuestion").append("<p>Click which option you think is correct!");
    clearTimeout(intervalId);
    var intervalId = setInterval(countdown, 1000);
    let seconds = 10;


    let answers = questions[current].answers;
    let correct = questions[current].correctAnswer;
    for (var i = 0; i < answers.length; i++) {
        let button = $("<button>").text(answers[i]).addClass("guessBtn Btn btn-lg")
        $("#showAnswer").append(button);
        $("#showAnswer").append("<br><br>");
    };

    function flashImageCorrect() {
        var myImg = $(".myImg").attr("src", questions[current].img);

        show = function () {
            myImg.show();
            clearTimeout(intervalId);
            current++;
            total++;
            wins++;
            $("#showQuestion").empty();
            $("#showQuestion").text("Correct! Good job!")
            $("#showAnswer").empty();
            $(".timer").empty();
            setTimeout(hide, 5000);
        },

            hide = function () {
                myImg.hide();

                game();
            };

        show();
    };
    function inCorrect() {
        var myImg = $(".myImg").attr("src", questions[current].img);
        show = function () {
            myImg.show();
            clearTimeout(intervalId);
            $("#showQuestion").empty();
            $("#showQuestion").text("Incorrect! The answer was: " + questions[current].correctAnswer);
            $("#showAnswer").empty();
            $(".timer").empty();
            setTimeout(hide, 5000);
            current++;
            total++;
            losses++;
        },

            hide = function () {
                myImg.hide();

                game();
            };

        show();
    };
    function timesUp() {
        var myImg = $(".myImg");
        var block = "block";
        show = function () {
            myImg.show();
            clearTimeout(intervalId);
            $("#showQuestion").empty();
            $("#showQuestion").text("Time's up! The correct answer was: " + questions[current].correctAnswer);
            $("#showAnswer").empty();
            $(".timer").empty();
            setTimeout(hide, 5000);
            current++;
            total++;
            losses++;
        },

            hide = function () {
                myImg.hide();

                game();
            };

        show();
    };


    function endGame() {
        if (total === 5) {
            clearTimeout(intervalId);
            $("#showQuestion").empty();
            $("#showAnswer").empty();
            $(".timer").empty()
            $("#showAnswer").append("<h4>Game Over!</h4> <br><p> Correct answers: " + wins + "<br> Wrong answers: " + losses);
            let playAgain = $("<button>").text("Play Again!").addClass("guessBtn Btn btn-lg playAgain")
            $("#showAnswer").append(playAgain);
            $(".playAgain").on("click", reset);
            $(".myImg").attr("src", "assets/images/leaning.jpg");
            $(".myImg").show();
            $(".myImg").css('float','right');
            // $(".myImg").css("margin-right","300px");
        }
    };

    $(".guessBtn").on("click", function () {
        let guess = $(this).text()
        if (guess === correct) {
            flashImageCorrect();


        }
        if (guess !== correct) {
            inCorrect();
        }
    })
    //10 second timer for each question
    $(".timer").text("10 seconds remaining!");

    function countdown() {
        if (seconds == 0) {
            timesUp();
        } else {
            seconds--;
            $(".timer").text(seconds + " seconds remaining!");
        }

    }
    endGame();

}

//show a question/answer options on screen that has not been shown already



//after a few seconds, display the next question
//if the player selects the wrong answer
//tell the player they selected the wrong option and display the correct answer
//wait a few seconds, display the next question
//if the player runs out of time
//tell the player that time's up and display the correct answer
//wait a few seconds, display the next question
;
