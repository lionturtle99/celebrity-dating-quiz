const celebrity = {
  "Benjamin Cumberbach": [1, 1, 2],
  "Justin Timberlake": [3, 3, 1],
  "Jim Davis": [2, 2, 3],
	"Bernadette Peters": [1, 2, 3]
}

function celebcompat(user, celeb) {
  let compatScore = 0;

  for (i = 0; i < user.length; i++) {
    if (user[i] === celeb[i]) {
      compatScore += 1;
    }
  }
  return compatScore
}

$(document).ready(function() {
  function displayResult(sel, t) {
    $(sel).text(t)
  }

  $("form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let age = parseInt($("#age").val());
		let iceCream = parseInt($("input[name='favorite-icecream']:checked").val());
    let musicGenre = parseInt($("input[name='music-genre']:checked").val());
    let era = parseInt($("input[name='favorite-era']:checked").val());
    let userChoice = [iceCream, musicGenre, era];

    let bestMatch = ['', 0]

    if (age < 18 || age > 65) {
      displayResult("#match-result", "You aren't the right age!");
      return;
    }

    if (userChoice[0] === 1 && userChoice[1] === 1 && userChoice[2] === 1) {
      displayResult("#match-result", "Stop being lazy!");
      return;
    }

		for (let key in celebrity) {
      let tempMatch = celebcompat(userChoice, celebrity[key]);

      if (tempMatch > bestMatch[1]) {
        bestMatch = [key, tempMatch];
      }
		}
    displayResult("#match-result", "Your celebrity match is " + bestMatch[0] + "!!");
  });
});