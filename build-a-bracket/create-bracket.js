var bracket = [];
function teamSize(formObject) {
 var size = formObject.form.elements["team-size"].value;
 var teamSize = parseInt(size);
 if (!teamSize || teamSize < 2 || teamSize > 32) {
  alert("Please enter a number between 2 and 32.");
 } else {
  var teams = '<p class="colored-no-border">Enter team names:<br>Their rank will be determined from top to bottom.</p>';
  for (var i = 1; i <= teamSize; i++) {
   teams += '<input class="team-names" type="text" name="team' + i + '" value="Team ' + i + '" aria-label="team ' + i + ' name" maxlength="20">';
  }
  teams += '<input type="button" value="Create Bracket" onclick="createBracket(this.form)">';
  document.getElementById("team-section").innerHTML = teams;
 }
}
function createBracket(formObject) {
  formObject.style.display = "none";
 let teamAmounts = formObject.elements["team-size"].value;
 bracket = [];
 let teams = [];
 for (let i = 1; i <= teamAmounts; i++) {
  teams.push(formObject.elements["team" + i].value);
 }

 //Makes it an even amount of teams with a placeholder of text
 if (teamAmounts % 2 == 1) {
  teams.push("auhngfipuadsngfuainvudsantuiasbfvsdiyuanoiutashuivbsaudibguitasbdui");
 }
 let bracketSize = isBigBracket(teams);
 while (!bracketSize) {
  teams.push("auhngfipuadsngfuainvudsantuiasbfvsdiyuanoiutashuivbsaudibguitasbdui");
  bracketSize = isBigBracket(teams);
 }

 let order = singleElimSeed(teams);

 //Makes round one in the correct order
 let roundOne = [];
 for (let i = 0; i < order.length; i++) {
  roundOne.push({ team1: teams[order[i] - 1], team2: teams[order[i + 1] - 1] });
  i++;
 }
 bracket.push(roundOne);
 let matchesPerRound = teams.length / 4;
 while (matchesPerRound > 1) {
  let arr = new Array(matchesPerRound);
  for (let j = 0; j < arr.length; j++) {
   arr[j] = { team1: null, team2: null };
  }
  bracket.push(arr);
  matchesPerRound /= 2;
 }
 //Add winner bracket
 let finalArr = [];
 finalArr.push({ team1: null, team2: null });
 bracket.push(finalArr);
 console.log(bracket);

 document.getElementById("name").innerHTML = formObject.elements["bracket-name"].value;
 showBracket();
}

//checks if bracket is big enough (power of 2)
function isBigBracket(teams) {
 for (let i = 0; i < 6; i++) {
  if (teams.length == Math.pow(2, i)) {
   return true;
  }
 }
 return false;
}

function showBracket() {
 let bracketHTML = "";
 for (let i = 0; i < bracket.length; i++) {
  bracketHTML += "<div class='round'>";
  for (let j = 0; j < bracket[i].length; j++) {
   let isDisplayed = true;
   if ("auhngfipuadsngfuainvudsantuiasbfvsdiyuanoiutashuivbsaudibguitasbdui" == bracket[i][j].team1 || "auhngfipuadsngfuainvudsantuiasbfvsdiyuanoiutashuivbsaudibguitasbdui" == bracket[i][j].team2) {
    isDisplayed = false;
    let movingOn = "";
    if (bracket[i][j].team1 == "auhngfipuadsngfuainvudsantuiasbfvsdiyuanoiutashuivbsaudibguitasbdui") {
     movingOn = bracket[i][j].team2;
    } else {
     movingOn = bracket[i][j].team1;
    }
    moveOn(movingOn, i, j);
   }
   let isNull = false;
   let teamNameOne = bracket[i][j].team1;
   let teamNameTwo = bracket[i][j].team2;
   if (bracket[i][j].team1 == null || bracket[i][j].team2 == null) {
    isNull = true;
    if (bracket[i][j].team1 == null) {
     teamNameOne = "TBD";
    }
    if (bracket[i][j].team2 == null) {
     teamNameTwo = "TBD";
    }
   }


   bracketHTML += '<div class="match"' + (isDisplayed ? "" : ' style="display: none;"') + ">";
   bracketHTML += "<p>" + bracket[i][j].team1 + "</p>";
   bracketHTML += `<button class="team${i}${j}" onclick="winner(${i}, ${j}, '${bracket[i][j].team1}')" ${isNull ? "disabled=true;" : ""}>${teamNameOne} wins!</button>`;
   bracketHTML += "<p>" + bracket[i][j].team2 + "</p>";
   bracketHTML += `<button class="team${i}${j}" onclick="winner(${i}, ${j}, '${bracket[i][j].team2}')" ${isNull ? "disabled=true;" : ""}>${teamNameTwo} wins!</button>`;
   bracketHTML += "</div>";
  }
  bracketHTML += "</div>";
 }
 document.getElementById("bracket").innerHTML = bracketHTML;
 document.getElementById("bracket").style.display = "flex";
}

function winner(i, j, team) {
 if(moveOn(team, i, j)) {
  showBracket();
 }
}

function moveOn(movingOn, i, j) {
 if(i == bracket.length - 1) {
  endTourney(movingOn);
  return false;
 }
 if (j % 2 == 0) {
  bracket[i + 1][Math.floor(j / 2)].team1 = movingOn;
 } else {
  bracket[i + 1][Math.floor(j / 2)].team2 = movingOn;
 }
 return true
}

//Gets the order of the seed order for the bracket
function singleElimSeed(teams) {
 let seeds = [1];
 while (seeds.length < teams.length) {
  let games = seeds.map((seed) => [seed, 2 * seeds.length + 1 - seed]);
  seeds = games.flat();
 }
 return seeds;
}

function endTourney(team) {
 document.getElementById("bracket").innerHTML = `<h1 class="colored-no-border" style="self-aling: center">${team} wins!</h1>`;
}