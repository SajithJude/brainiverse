// var allQuestions = [{
//     question: "Who is Prime Minister of the United Kingdom?",
//     choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
//     correctAnswer: 0
//   }, {
//     question: "Who is Genry?",
//     choices: ["PTERODACTEL", "Gipsy", "Viktor Prit", "Everything."],
//     correctAnswer: 3
//   }, {
//     question: "Who is Viktor Prit?",
//     choices: ["Genry", "Man of Action", "Gay Lord", "Buryak"],
//     correctAnswer: 1
//   }, {
//     question: "Where is the Pterodactel?",
//     choices: ["In da Kirillovka", "At Genry's place", "In Michael Circle's coffin"],
//     correctAnswer: 1
//   }];
  
//   function Quiz(options) {
//     var elem = options.elem;
//     var allQuestions = options.questions;
//     var q_number = allQuestions.length;
  
//     var answers = [];
//     var questions = [];
  
//     var correct_answers = 0;
//     var current_number;
  
//     generateQuestions(allQuestions);
    
//     initQuiz();
  
//     function generateQuestions(q) {
//       for (var i = 0; i < q_number; i++) {
//         var question = document.createElement('div');
//         question.classList.add('question');
//         question.id = 'question';
  
//         var title = document.createElement('h1');
//         title.textContent = q[i].question;
  
//         question.appendChild(title);
  
//         var list = document.createElement('ul');
        
  
//         for (var j = 0, len = q[i].choices.length; j < len; j++) {
//           var choice = document.createElement('li');
  
//           var check = document.createElement('input');
//           check.setAttribute('type', 'radio');
//           check.setAttribute('name', 'question');
  
//           var choice_text = document.createElement('label');
//           choice_text.setAttribute('for', check.name);
//           choice_text.textContent = q[i].choices[j];
  
//           choice.appendChild(check);
//           choice.appendChild(choice_text);
  
//           list.appendChild(choice);
//         }







  
//         var prev_button = document.createElement('button');
//         prev_button.textContent = 'Previous Question';
//         prev_button.addEventListener('click', prevQuestion);
  
//         var next_button = document.createElement('button');
  
//         if (i === q_number - 1) {
//           next_button.textContent = 'Finish Quiz';
//           next_button.addEventListener('click', finishQuiz);
//         } else {
//           next_button.textContent = 'Next Question';
//           next_button.addEventListener('click', nextQuestion);
//         }
  
//         question.appendChild(list);
  
//         // if (i > 0) question.appendChild(prev_button);
//         // question.appendChild(next_button);
  
//         questions.push(question);




//       }
//     }
  
//     function render_question(number) {
//       var warning = elem.getElementsByClassName('warning')[0];
//       if (warning) {
//         elem.removeChild(warning);
//       }
//       elem.appendChild(questions[number]);
//       $('#question').hide().fadeIn(500);
      
//       $("#next").click(function () {
//         nextQuestion();
//         console.log("next");
        
//       $Ques = $("question");
//       $Ques.removeClass("highlight");
//       $(this).addClass("highlight");
//       });



//       $("#prev").click(function () {
//         prevQuestion();
//       });

//       $("#1").click(function () {
//         answers.push(1);
//       });

//       $("#3").click(function () {
//         answers.push(3);
//       });
//     }
  
//     function initQuiz() {
//       current_number = 0;
//       render_question(current_number);
//     }
  
//     function checkAnswers() {
//       for (var i = 0; i < q_number; i++) {
//         if (answers[i] === allQuestions[i].correctAnswer) {
//           correct_answers++;
//         }
//       }
//     }
  
//     // function validateAnswer() {
//     //   var list_items = elem.getElementsByTagName('input');
//     //   var answered = false;
//     //   for (var i = 0, len = list_items.length; i < len; i++) {
//     //     if (list_items[i].checked) {
//     //       answers.push(i);
//     //       answered = true;
//     //       break;
//     //     }
//     //   }
//     //   if (!answered && !elem.getElementsByClassName('warning')[0]) {
//     //     var warning = document.createElement('span');
//     //     warning.textContent = "Answer the question before you proceed, please.";
//     //     warning.classList.add('warning');
  
//     //     elem.appendChild(warning);
//     //   }
//     //   return answered;
//     // }

//     function validateAnswer() {
//       if(answers.length > 0)
//     {
//       console.log(answers);
//     }
//     }
  
//     function nextQuestion() {
//       if (validateAnswer()) {
//         elem.removeChild(questions[current_number]);
//         current_number++;
//         render_question(current_number);
//       }
//     }
  
//     function prevQuestion() {
//       elem.removeChild(questions[current_number]);
//       answers.pop();
//       current_number--;
//       render_question(current_number);
//     }
  
//     function finishQuiz() {
//       if (validateAnswer()) {
//         checkAnswers();
//         elem.removeChild(questions[current_number]);
//         var result = document.createElement('p');
//         if (correct_answers === 0) {
//           result.textContent = "Thank you for taking this quiz! Sorry, but none of your answers were right :( Try again if you want to improve your score.";
//         } else {
//           result.textContent = "Thank you for taking this quiz! Your final score is: " + correct_answers + " correct answers!";
//         }
//         elem.appendChild(result);
//       }
//     }
//   }
  
//   var quiz = new Quiz({
//     elem: document.getElementById('quiz'),
//     questions: allQuestions
//   });





var count = 0;
var time = 30;
var marks = 0;
var answer = [];
var timer;

//    Main Ready funtion

$(document).ready(function () {
  $('#finish').hide();
  $('#Result').hide();

  buttons_manager();

  //    Create Function

  function buttons_manager() {
    if (count > 0) {
      $('#prev').show();
      if (count == 4) {
        // $('#next').hide();
        $('#finish').show();
      }
      else {
        $('#next').show();
      }
    }
    else {
      $('#prev').hide();
    }
  }

  // Create Question Function
  function adding_Questions(data, i) {
    $('#question').text(data[i].Quiz)
    $('#options1').text(data[i].option1)
    $('#options2').text(data[i].option2)
    $('#options3').text(data[i].option3)
    $('#options4').text(data[i].option4)
    $('#number').text(Number(i + 1));

  }

  // Answer Selection Function

  function selected_Answer() {
    for (var i = 0; i < 4; i++) {
      var a = document.getElementById("options").children;
      if (a[i].innerHTML == answer[count]) {
        $("#options").children("button")[i].classList.add("active");
      }
      else {
        $("#options").children("button")[i].classList.remove("active");
      }
    }
  }

  function creating_result(data) {
    for (var i = 0; i < answer.length; i++) {
      if (answer[i] == data.Questions[i].answer) {

        marks += 5;
      }
    }
   // console.log(answer)
    $('#main').hide();

    $("#marks").text(marks);
    $('#correct_answer').text(marks / 5);
    $('#percentage').text((marks / 25) * 100 + "%");

    $("#Result").show();
  }
  $("#options").hide();

  // Attach API

 $.getJSON("scripts/data.json")
    .then(function (response) {
      return response;
    })
    .then(function (data) {
      $('#previ').click(function () {
        $('#options').show();
        adding_Questions(data.Questions, count);

        $('#prev').hide();

        timer = setInterval(timer_function, 1000);

        function timer_function() {
          $('#time').text(time);
          if (time < 1) {
            clearInterval(timer);
           // alert("Out of time");
            creating_result(data);
            // $("#main").hide();
            // $("#result").show();
          }
          time--;
        }

      });

      // Select Option

      $(".option").click(function () {

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        answer[count] = $(this).html();
      });

      // Next Questions

      $('#next').click(function () {
        if (count > answer.length - 1) {
          alert("Select Atleast 1 Option")
        }
        else {
          count++;
          adding_Questions(data.Questions, count);
          $("#prev").show();
          $(".option").removeClass("active");
          buttons_manager();
          selected_Answer();
        }
      });

      // Previous Questions

      $('#prev').click(function () {
        count--;
        adding_Questions(data.Questions, count);
        buttons_manager();
        selected_Answer();
      });

      // Finish Quiz

      $("#finish").click(function () {
        if (count > answer.length - 1) {
          alert("Select Atleast 1 Option");
        }
        else {
          creating_result(data);
          clearInterval(timer);
        }
      });



    })




})


