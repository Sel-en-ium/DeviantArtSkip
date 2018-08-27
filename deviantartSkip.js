'use strict';
(function () {
console.log("hi");
var deviantartSkip = {
	ctrlDown : false
};
var skipKey = 221; // ] key

// Record when we are holding ctrl down
window.onkeydown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if (key == 17) { // Ctrl
    deviantartSkip.ctrlDown = true;
  }

  // Don't let typical "]" trigger if we are holding ctrl
  if (key == skipKey && deviantartSkip.ctrlDown) { // right
	e.stopPropagation();
  }
};

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

  // Catch when we release ctrl
  if (key == 17) { // Ctrl
    deviantartSkip.ctrlDown = false;
  }	

  // Should we remove and go to next?
  if (key == skipKey && deviantartSkip.ctrlDown) { // right
	e.stopPropagation();
	document.getElementsByClassName("remove-message-button")[0].click()
  }

};

}());