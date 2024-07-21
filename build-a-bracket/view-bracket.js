var bracket;
document.addEventListener("DOMContentLoaded", () => {
 getData();
 showBracket();
});
function showBracket() {
 console.log(bracket);
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

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getData() {
 //For some reason it needs to be parsed twice
  bracket = JSON.parse(JSON.parse(getCookie('bracket')));
  console.log(bracket);
  document.getElementById('name').innerHTML = getCookie('name');
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

function endTourney(team) {
 document.getElementById("bracket").innerHTML = `<h1 class="colored-no-border" style="self-aling: center">${team} wins!</h1>`;
}