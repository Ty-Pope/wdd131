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
 exportBracketData(formObject.elements["bracket-name"].value);
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
//Gets the order of the seed order for the bracket
function singleElimSeed(teams) {
 let seeds = [1];
 while (seeds.length < teams.length) {
  let games = seeds.map((seed) => [seed, 2 * seeds.length + 1 - seed]);
  seeds = games.flat();
 }
 return seeds;
}

// Export bracket data
function exportBracketData(name) {
 let data = JSON.stringify(bracket);
 document.cookie = 'bracket=; path=/';
 document.cookie = 'name=; path=/';
 document.cookie = 'bracket=' + JSON.stringify(data) + '; path=/';
 document.cookie = 'name=' + name + '; path=/';
 window.location.href = 'view-bracket.html';
}
