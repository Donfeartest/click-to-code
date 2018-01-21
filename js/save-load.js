function save() {
  window.localStorage.setItem('bytecount', bytecount);
  window.localStorage.setItem('friends', friends);
  window.localStorage.setItem('sponsors', sponsors);
  window.localStorage.setItem('multiplier', multiplier);
  window.localStorage.setItem('money', money);
  window.localStorage.setItem('question', question);
}

function load() {
  bytecount = localStorage.getItem("bytecount");
  bytecount = parseInt(bytecount);
  friends = localStorage.getItem('friends');
  friends = parseInt(friends);
  sponsors = localStorage.getItem('sponsors');
  sponsors = parseInt(sponsors);
  multiplier = localStorage.getItem('multiplier');
  multiplier = parseInt(multiplier);
  money = localStorage.getItem('money');
  money = parseInt(money);
  question = localStorage.getItem('question');
  question = parseInt(question);
  update();
}
