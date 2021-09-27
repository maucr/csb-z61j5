console.log("before");
setTimeout(function () {
  var nodes = document.querySelectorAll("iframe");
  var last = nodes[nodes.length - 1];
  //last.style.display = "none";

  //last.style.border = "1px solid red";
}, 2000);
