function insertText(elemID, text) {
    let elem = document.getElementById(elemID);


    let counter = 0;


    text_list.forEach(function (item) {
    document.getElementById(elemID).innerHTML = "";
    elem.innerHTML += item;
    });
  }
  

  function iterateText(elemID, text) {
    let elem = document.getElementById(elemID);
    let array = ["one", "two", "three"];
    clickCouter = 0;

  }
