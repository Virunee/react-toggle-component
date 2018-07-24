function checkIfCorrect(combination, toggleState) {
    if (combination === toggleState) {
        return true;
    } else {
        return false;
    }
  };

  function getToggleState() {
    var togglebuttons = document.querySelectorAll('.toggleButtonContainer');
    var combination = [];

    for (var i = 0; i<togglebuttons.length; i++) {
    var button = togglebuttons[i].querySelectorAll('div')[0];
    if(button.className === "activeStyle") {
        combination.push(0);
    } else {
        combination.push(1);
    }
    }
    return combination.toString();
  };

  export {checkIfCorrect,getToggleState};