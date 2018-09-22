// Global Variables
var currentQuestion;        // Hold current question
var correctAnswer;          // Hold the correct answer for question
var incorrectAnswer;        // Hold incorrect answer choices
var unansweredQuestions;    // Hold unanswered questions 
var seconds;                // Hold for amount of seconds to answer each ?
var time;                   // Hold to start the timer
var answered;               // Boolean variable used if question is answered
var userSelect;             // Hold user selected guess
var totalScore;             // Hold score percentage
var totalQuestions = 10;    // Hold for total questions

// Messages outputed to the user in object form during the game play
var outputMessages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
    finished: "Alright! Let's see how well you did."
}
// An array object of 30 Halloween Related Trivia Questions
var triviaQuestions = 
[{
    question:"What state produces the most pumpkins?",
    answerList:["Iowa","Vermont","California","Montana","Illinois"],
    answer:4
},
{
    question:"What do vampires enjoy to drink?",
    answerList:["Yoo-hoo","Coke","Bloody-Mary", "Blood","Kool-aid"],
    answer:3 
},
{
    question:"Who is the only character in the Peanuts gang that believes in the Great Pumpkin?",
    answerList:["Linus", "Schroeder", "Charlie Brown", "Lucy", "Snoopy"],
    answer:2
},
{
    question:"What type of bullet can kill werewolves?",
    answerList:["Garlic tipped","Bronze","Ones filled with Holy Water","Silver", "Iron"],
    answer:3  
},
{
    question:"What film is number one on the American Film Institute’s List of 100 Most Thrilling American Films?",
    answerList:["Psycho","Alien", "The Birds", "Jaws", "The Exorcist"],
    answer:0
},
{
    question:"Phasmophobia is the fear of what?",
    answerList:["Flashing lights","The dark", "Ghosts", "Being buried alive","Bats"],
    answer:2
},
{
    question:"What is the name of the antagonist in the Halloween films?",
    answerList:["Freddy","Jason", "Michael","Jerome","Little Nickey"],
    answer:2
},
{
    question:"The Witches of Eastwick starred Susan Sarandon, Michelle Pfeiffer, and what famous singer as the third witch?",
    answerList:["Dolly Parton", "Stevie Nicks", "Miley Cyrus","Cher","Rhianna"],
    answer:3
},
{
    question:"Which of the following monster themed television programs featured Butch Patrick as a young werewolf?",
    answerList:["The Addams Family","The Groovy Ghoulies","Frankenstein Jr","Sabrina the Teenaged Witch","The Munsters"],
    answer:4
},
{
    question:"Sarah Michelle Gellar portrayed Buffy the Vampire Slayer in the television series. Who played Buffy in the motion picture?",
    answerList:["Sarah Jessica Parker","Molly Ringwald","Kristy Swanson","Julie Benz","Mercedes McNab"],
    answer:2
}
/* ,
{
    question:"Which of the following actors has NEVER played Dracula in a movie?",
    answerList:["Leslie Nielsen","Gary Oldman","Bela Lugosi","Ben Affleck",
    "Frank Langella"],
    answer:3
},
{
    question:"Choose the actor who has NEVER played the Frankenstein monster on the silver screen.",
    answerList:["Jim Parsons","Robert DeNiro","Boris Karloff","Peter Boyle",
    "Clancy Brown"],
    answer:0
},
{
    question:"Time for some hair-raising fun, pick the actor who has NEVER slayed the Wolfman on film.",
    answerList:["Michael J. Fox","David Naughton","Johnny Depp","Lon Chaney Jr","Jack Nicholson"],
    answer:2
},
{
    question:"Fay Wray, Jessica Lange and Naomi Watts have all played the female lead to this famous monster on the big screen, who is it?",
    answerList:["Count Orlock","The Mummy","The Creature from the Black Lagoon","King Kong","Dr. Caligari"],
    answer:3
},
{
    question:"Cast a deadly spell and choose the actress who has NOT bedazzled us playing a witch.",
    answerList:["Margaret Hamilton","Karen Allen","Elizabeth Montgomery","Emma Watson","Sarah Jessica Parker"],
    answer:1
},
{
    question:"The Devil made them do it! Select the artist who has NOT played a big screen version of the Devil.",
    answerList:["Al Pacino","Elizabeth Hurley","Nathan Fillion","Ray Walston",
    "Tim Curry"],
    answer:2
},
{
    question:"Can you tell me which of the following out-of-this-world actresses has NEVER played an alien of note on film?",
    answerList:["Christina Applegate","Milla Jovovich","Zoe Saldana",
    "Jane Curtain","Natasha Henstridge"],
    answer:0
},
{
    question:"Godzilla is King of the Monsters and one of his most formidable opponents is Monster Zero! Do you know Monster Zero’s real name?",
    answerList:["Rodan","Gamera","Reptillicus","Gorgo","Ghidorah"],
    answer:4
},
{
    question:"In space no one can hear you scream! Can you name the ship that Ridley and her crew flew in the movie Aliens?",
    answerList:["The Axiom","Eagle 5","Icarus","Millenium Falcon","Nostromo"],
    answer:4
},
{
    question:"t’s ALL in the Family! Hollywood has given us the Brides of Dracula, Frankenstein’s Daughter and Son of Kong, but can you pick the actress who wowed the critics in the title role of the 1935 classic Bride of Frankenstein?",
    answerList:["Pheobe Cates","Mia Farrow","Elsa Lanchester","Joan Crawford",
    "Jamie Leigh Curtis"],
    answer:2
},
{
    question:"These creatures are typically associated with warts, broomsticks, and black cats?",
    answerList:["Frankenstein","Dracula","Mummies","Ghosts","Witches"],
    answer:4
},
{
    question:"Who played Lestat the vampire in the film Interview with a Vampire?",
    answerList:["Tom Cruise","Christian Slater","Brad Pitt","Mike Seelig","Tom Selick"],
    answer:0
},
{
    question:"Which of these movies was NOT directed by John Carpenter?",
    answerList:["The Mist","Halloween","Vampires","Ghosts of Mars","The Fog"],
    answer:0
},
{
    question:"Which monster is pictured on the flag of Sicily?",
    answerList:["Griffin","Minotaur","Medusa","Sphinx","Mummy"],
    answer:2
},
{
    question:"What kind of monster does Michael J. Fox change into in 1985 movie?",
    answerList:["A vampire","A werewolf","An alien","Zombie","Frankenstein"],
    answer:1
},
{
    question:"Who plays Frankenstein in the 1974 film, Young Frankenstein?",
    answerList:["Peter Boyle","John Candy","Tom Hanks","Gene Wilder","Marty Feldman"],
    answer:3
},
{
    question:"Whose grave is being excavated in the 1999 film, The Mummy?",
    answerList:["King Tut","Imhotep","Nefer","Khufu","Ramesses"],
    answer:1
},
{
    question:"If it bleeds, we can kill it,is the tagline for which monster movie?",
    answerList:["Alien","Deep Rising","Predator","Jaws","The Island of Dr. Moreau"],
    answer:2
},
{
    question:"Who plays the character of Freddy Krueger?",
    answerList:["Jeremy Irons","Robert Downey Jr","Sean Penn","Robert Englund","Ed Call"],
    answer:3
},
{
    question:"Who wrote the novel, “Frankenstein”?",
    answerList:["Mary Shelley","Anne Frank","Stephen King","J. K. Rowling", "Anne Rice"],
    answer:0
} */
];

// Event Handler Function to activate the button when clicked and start the game
$("#start-btn").on("click", function()
{
	$(this).hide();
	resetGame();
});

// Event Handler Function to reset the game when clicked
$("#resetBtn").on("click", function()
{
	$(this).hide();
	resetGame();
});

// Function to reset the game play and initialize the variables
var resetGame = function()
{
	$("#finalMessage").empty();
	$("#correctAnswers").empty();
	$("#wrongAnswers").empty();
    $("#unansweredQuestions").empty();
    $("#finalScore").empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
    unansweredQuestions = 0;
    totalScore = 0;
	newQuestions();
} 

/////////////////////////////////////////////////////////////////////////////////////////////
// Wanted to make a random generator of 10 questions not working                /////////////
// Loop through the questions to make 10 random questions                       /////////////
// working on random generator                                                  /////////////
// var questionArray = [];                                                      /////////////
// var randomQuestions = Math.floor(Math.random() * (triviaQuestions.length);   /////////////
// var chosenQuestions = triviaQuestions[randomQuestions]                       /////////////
// sets up new questions & answerList for the question                          ///////////// 
/////////////////////////////////////////////////////////////////////////////////////////////
// var randomQuestion = function()
// {
//         totalQuestions = 10;
//         var questionArray = []; 
//         var randomQuestion = Math.floor(Math.random()) * questionArray.length;
//           for(i = random; questionArray.length < 10; i++)
//           {
//             if(questionArray[i] == random)
//             {
// 			  break;
// 			}
// 			else{
// 			  questionArray[questionArray.length] = random;
// 			  newQuestions(questionArray[i].question);
// 			  return;
// 			}
// 		  }
// 		}
// }
///////////////////////////////////////////////////////////////////////////////////////////

// Function to setup the random question for game play
var newQuestions = function()
{
    $("#message").empty();
	$("#correctedAnswerChoice").empty();
	$("#imageGif").empty();
    answered = true;
    
    // Displays the question from the triviaQuestions array
	$("#currentQuestion").html("Question #"+(currentQuestion + 1)+"/"+ triviaQuestions.length);
    $(".questions").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
        
        // Loop to display the answer choices for the individual questions
        for(var i = 0; i < 5; i++)
        {
		    var choices = $("<div>");
		    choices.text(triviaQuestions[currentQuestion].answerList[i]);
		    choices.attr({"data-index": i });
		    choices.addClass("thisChoice");
            $(".answerList").append(choices);
        }
    countTimer();
    
	// Function on clicking an answer will pause the time and setup answerPage
    $(".thisChoice").on("click",function()
    {
		userSelect = $(this).data("index");
		clearInterval(time);
		answerPage();
	});
}

// Function to setup the countdown timer
var countTimer = function()
{
	seconds = 15; 
	$('#time').html('<h3>Time Remaining: ' + seconds + '</h3>'); 
	answered = true;
    
    // starts the timer to go down in seconds
	time = setInterval(showCountTimer, 1000);
}

// Function to start counting down the timer then show it to the user
var showCountTimer = function()
{
	seconds--;
	$("#time").html("<h3>Time Remaining: " + seconds + "</h3>");
    
    // Condition when seconds reach time expired to display the answer page
    if(seconds < 1)
    {
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

// Function to setup the answer page for the user
var answerPage = function()
{
    $("#currentQuestion").empty();
	$(".thisChoice").empty(); //Clears question page
	$(".question").empty();

    
    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    
        // Conditions to check to see correct, incorrect, or unanswered questions
        if((userSelect == rightAnswerIndex) && (answered == true))
        {
		    correctAnswer++;
            $("#message").html(outputMessages.correct);
            
            // Displays the images for the correct answer
            $('<img src="assets/images/correctAnswer.gif">').appendTo($("#imageGif"));
        } 
        else if((userSelect != rightAnswerIndex) && (answered == true))
        {
		    incorrectAnswer++;
		    $("#message").html(outputMessages.incorrect);
            $("#correctedAnswerChoice").html("The correct answer was: " + rightAnswerText);
            
            // Displays the images for the wrong answer
            $('<img src="assets/images/wrongAnswer.gif">').appendTo($("#imageGif"));
        } 
        else
        {
		    unansweredQuestions++;
		    $("#message").html(outputMessages.endTime);
		    $("#correctedAnswerChoice").html("The correct answer was: " + rightAnswerText);
            answered = true;
            
            // Displays the images for the out of time 
            $('<img src="assets/images/timeAnswer.gif">').appendTo($("#imageGif"));
	    }
        // Condtion for the timer 
        if(currentQuestion == (triviaQuestions.length - 1))
        {
		    setTimeout(scoreboard, 5000)
        } 
        else
        {
		    currentQuestion++;
		    setTimeout(newQuestions, 5000);
	    }	
}

// Function to display the scoreboard area for the user
var scoreboard = function()
{
    // clear the divs not being used
	$("#time").empty();
    $("#message").empty();
    $(".questions").empty();
	$("#correctedAnswerChoice").empty();
    $("#imageGif").empty();
    
    // equation to determine percentage user got correctly
    totalScore = (correctAnswer/ totalQuestions) * 100;

    // The out put of the score and messages to show the user their progress on the trivia game
	$("#finalMessage").html(outputMessages.finished);
	$("#correctAnswers").html("Correct Answers: " + correctAnswer);
	$("#wrongAnswers").html("Wrong Answers: " + incorrectAnswer);
    $("#unansweredQuestions").html("Unanswered: " + unansweredQuestions);
    $("#finalScore").html("Total Score: " + totalScore + " percent");
	$("#resetBtn").addClass("reset");
	$("#resetBtn").show();
	$("#resetBtn").html("Start Over?");
}
