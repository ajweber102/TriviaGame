var count=31;

var counter=setInterval(timer, 1000);

var score = 1;

var counter = 1;

var incorrect = 1;

var correct = 0;

// Timer function

function timer() {
  count = count - 1;
  if (count <= -1)
  {
     clearInterval(counter);
     return;
  }

    document.getElementById("timer").innerHTML = count + " seconds left";
};

setTimeout(function() {
    $('#ex1').modal('show');
}, 31000); // milliseconds


// Click function for Correct Answers

$(".correct").on("click", function() {
    $(this).css({color:'green'},{weight:'bold'});
    $(".score").text((score ++ ) + " out of 4 is your score."); {
        counter = 0;
        console.log(score + counter + "test")
    }
});

// Click function for Incorrect Answers

$(".incorrect").on("click", function() {
    $(this).css({color:'red'},{weight:'bold'});
    $(".wrong").text((incorrect ++ ) + " wrong answers."); {
        counter = 0;
        console.log(incorrect + counter + "test")
    }
});