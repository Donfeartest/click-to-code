var bytecount = 0;
var friends = 0;
var sponsors = 0;
var multiplier = 1;
var money = 0;
var question = 0;


function update() {
  if (bytecount >= 1){
  document.getElementById('codeWritten').value = bytecount + " bytes";
} if (bytecount >=1000) {
    document.getElementById('codeWritten').value = bytecount/1000 + " kilobytes";
  }

  document.getElementById('moneyGot').value = money + " BTC";

  document.getElementById('costMultiplier').innerHTML = ((multiplier+1)*1000) + " bytes";
  document.getElementById('currentMultiplier').innerHTML = "Your current speed is x"+(multiplier);
  if (multiplier >= 3) {
    document.getElementById('mp').src = mp.src.replace("img/keyboard.png", "img/sponsor.png");
    document.getElementById('amountMultiplier').innerHTML = "RAM upgrade"
  } if (multiplier >= 5) {
    document.getElementById('amountMultiplier').innerHTML = "CPU upgrade"
    document.getElementById('mp').src = mp.src.replace("img/sponsor.png", "img/searching.png");
  }
  document.getElementById('ammountFriends').innerHTML = "You have " + friends + " friends to help";
  document.getElementById('costFriends').innerHTML = "You need: " + ((friends+1) * 10) + " Bytes of code";

  document.getElementById('ammountQuestion').innerHTML = "You have " + question + " question asked";
  document.getElementById('costQuestion').innerHTML = "You need: " + ((question+1) * 30) + " Bytes of code";

  document.getElementById('amountSponsors').innerHTML = "You have: " + sponsors + " sponsors";
  document.getElementById('costSponsor').innerHTML = "You need: " + ((sponsors+1) * 90) + " Bytes of code";

  document.getElementById('bytespersecond').innerHTML = "Your code is increasing by " + (((friends)+((question)*2)+(sponsors)*3)*multiplier) +  " bytes/s";
}

function timer() {
  bytecount += friends*multiplier;
  bytecount = bytecount + (sponsors*3)*multiplier;
  bytecount = bytecount + (question*2)*multiplier;
  update();
}
setInterval(timer, 1000);

function add() {
  bytecount += 1*multiplier;
  var random = ~~(Math.random() * (100 - 1) + 1);
  if ( random === 50) {
    money = money+1;
  }
  update();
}

function findFriends() {
  if (bytecount >= (friends+1) * 10) {
      bytecount = bytecount - ((friends+1) * 10);
      friends += 1;
      update();
    }
//&& (bytecount - ((autoClick)+1)*12) >= 0)
}

function findQuestion() {
  if(bytecount >= (question+1)*30) {
    bytespersecond = bytecount - ((question+1) * 30);
    question += 1;
    update();
  }

}

function findSponsor() {
  if (bytecount >= (sponsors+1) * 90) {
    bytecount = bytecount - ((sponsors+1) * 90);
    sponsors += 1;
    update();
  }
}

function buyMultiplier() {
  if (bytecount >= (multiplier+1)*1000) {
    bytecount = bytecount - ((multiplier+1) * 1000);
    multiplier += 1;
    update();
  }
}
// var positiveNum = Number(val);

function changeBytes() {
  if ( money > 0 ){
    bytecount = bytecount + money*500;
    money = 0;
  }
  update();
}
