function changeTheme() {
 //check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
 // if the value is dark then:
 // add the dark class to the body
 // change the source of the logo to point to the white logo.
 var themeSelector = document.getElementById("themeSelect").value;
 if (themeSelector == "dark") {
  document.getElementById("main-body").classList.remove("light");
  document.getElementById("main-body").classList.add("dark");
  document.getElementById("byui-logo").src = "byui-logo_white.png";
 } else {
  document.getElementById("main-body").classList.remove("dark");
  document.getElementById("main-body").classList.add("light");
  document.getElementById("byui-logo").src = "byui-logo_blue.webp";
 }
 // otherwise
 // remove the dark class
 // make sure the logo src is the blue logo.
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
document.getElementById("themeSelect").addEventListener("change", changeTheme);
