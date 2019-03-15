document.addEventListener('DOMContentLoaded', function() {
  var factButton = document.getElementById('fact');
  var questionButton = document.getElementById('question');
  var facts = [
    'The heart of a shrimp is located in its head.', 'A snail can sleep for three years.', 'Slugs have four noses.'
  ];
  var questions = [
    'Do ants feel love?', 'Do ants go to heaven?', 'What do wolves eat?', 'How long do wolves live?', 'How many people die from moose?', 'Moose or mooses?', 'Did Roosevelt ride a buffalo?'
  ];
  if(factButton){
    factButton.addEventListener('click', function() {
      var random = facts[Math.floor(Math.random()*facts.length)];
      document.getElementById("f_result").innerHTML = random;
    }, false);
  }
  if(questionButton){
    questionButton.addEventListener('click', function() {
      var randomQ = questions[Math.floor(Math.random()*questions.length)];
      document.getElementById("q_result").innerHTML = randomQ;
    }, false);
  }
}, false);
