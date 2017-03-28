var name;


function myFunc() {
  name = prompt("What is your name?");
  if (name == "null") {
    name = "Guest";
  } else if (name == "") {
    name = "Guest";
  }

}

function test() {
  if ((name != null) && (name != "")) {
    var test = name;
    document.getElementById("name").append(test);
  } else if (name === "") {
    document.getElementById("name").append("Guest");
  } else if (name === null) {
    document.getElementById("name").append("Guest");
  }
}
