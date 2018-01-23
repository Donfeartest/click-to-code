var bytecount = 0;
var friends = 0;
var sponsors = 0;
var multiplier = 1;
var money = 0;
var question = 0;
var coffee = 0;
var site = 0;
var script = 0;
// food = 0;

function update() {

  function numberAbr(bytecount) {
    var newValue = bytecount;
    if (bytecount >= 2 && bytecount < 1000) {
      newValue = bytecount + " Bytes";
      return newValue;
    }
    if (bytecount >= 1000) {
        var suffixes = [" ", " Kilobytes", " Megabytes", " Gigabytes"," Terabytes", " Petabytes", " Exabytes", " Zettabytes"," Yottabytes"];
        var suffixNum = Math.floor( (""+bytecount).length/3 );
        var shortValue = '';
        for (var precision = 4; precision >= 3; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (bytecount / Math.pow(1000,suffixNum) ) : bytecount).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 4) { break; }
        }
        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(2);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
  }
    if (bytecount == 1) {
    document.getElementById('codeWritten').value = bytecount + " Byte";
    }

    if (bytecount > 1) {
    document.getElementById('codeWritten').value = numberAbr(bytecount);
  }


  document.getElementById('moneyGot').value = money + " BTC";


  document.getElementById('costMultiplier').innerHTML = "You need: "+((multiplier+1)*1000) + " bytes";
  document.getElementById('currentMultiplier').innerHTML = "Your current speed is x"+(multiplier);


  // if (multiplier >= 3) {
  //   document.getElementById('mp').src = mp.src.replace("img/keyboard.png", "img/sponsor.png");
  //   document.getElementById('amountMultiplier').innerHTML = "RAM upgrade"
  // } if (multiplier >= 5) {
  //   document.getElementById('amountMultiplier').innerHTML = "CPU upgrade"
  //   document.getElementById('mp').src = mp.src.replace("img/sponsor.png", "img/searching.png");
  // }

  document.getElementById('amountCoffee').innerHTML = "You have " + coffee + " coffee n snacks";
  document.getElementById('costCoffee').innerHTML = "You need: " + ((coffee+1) * 10) + " Bytes of code";
  document.getElementById('persecondCoffee').innerHTML = "Gives you " + (coffee)*multiplier + " bytes/s"

  document.getElementById('amountFriends').innerHTML = "You have " + friends + " friends to help";
  document.getElementById('costFriends').innerHTML = "You need: " + ((friends+1) * 50) + " Bytes of code";
  document.getElementById('persecondFriends').innerHTML = "Gives you " + (friends*2)*multiplier + " bytes/s";

  document.getElementById('amountQuestion').innerHTML = "You have " + question + " question asked";
  document.getElementById('costQuestion').innerHTML = "You need: " + ((question+1) * 100) + " Bytes of code";
  document.getElementById('persecondQuestion').innerHTML = "Gives you " + (question*3)*multiplier + " bytes/s";

  document.getElementById('amountSponsors').innerHTML = "You have: " + sponsors + " sponsors";
  document.getElementById('costSponsor').innerHTML = "You need: " + ((sponsors+1) * 250) + " Bytes of code";
  document.getElementById('persecondSponsor').innerHTML = "Gives you " + (sponsors*4)*multiplier + " bytes/s";

  document.getElementById('amountSite').innerHTML = "You have: " + site + " sites";
  document.getElementById('costSite').innerHTML = "You need: " + ((site+1) * 500) + " Bytes of code";
  document.getElementById('persecondSite').innerHTML = "Gives you " + (site*5)*multiplier + " bytes/s";

  document.getElementById('amountScript').innerHTML = "You have: " + script + " sites";
  document.getElementById('costScript').innerHTML = "You need: " + ((script+1) * 1000) + " Bytes of code";
  document.getElementById('persecondScript').innerHTML = "Gives you " + (script*6)*multiplier + " bytes/s";

  document.getElementById('bytespersecond').innerHTML = "Your code is increasing by " + ((coffee)+((friends)*2)+((question)*3)+((sponsors)*4)+((site)*5)+((script)*6))*multiplier +  " bytes/s";
}


function timer() {
  var random = ~~(Math.random() * (60 - 1) + 1);
  if ( random === 30) {
    money += 1;
  }
  bytecount += coffee*multiplier;
  bytecount = bytecount + (friends*2)*multiplier;
  bytecount = bytecount + (question*3)*multiplier;
  bytecount = bytecount + (sponsors*4)*multiplier;
  bytecount = bytecount + (site*5)*multiplier;
  bytecount = bytecount + (script*6)*multiplier;
  update();
}
setInterval(timer, 1000);


function deadlineMode() {
    if (bytecount <= 1500) {
      document.getElementById("dlTrigger").style.display = 'block';
    }
    if (bytecount >= 1500) {
    if (multiplier <= 5) {
    var random = ~~(Math.random() * (50-1) +1 );
    // if ( random >= 25) {
    //   bytecount = bytecount-(200*multiplier);
    // } if ( random < 25 ) {
    //   bytecount = bytecount+(200*multiplier);
    // }
    var deadLine1 = ( random >= 25 ) ? bytecount += (200*multiplier) : bytecount -= ( 200*multiplier);
    return deadLine1;
    } if (multiplier > 5) {
    var random = ~~(Math.random() * (50-1) +1 );
    var deadLine2 = ( random >= 25 ) ? bytecount += (200*5) : bytecount -= (200*5);
    return deadLine2;
    // if ( random >= 25) {
    // bytecount = bytecount + (200*5);
    // } if ( random < 25) {
    // bytecount = bytecount - (200*5);
    // }
    }
    }
  update();
}

// function normalMode() {
//   bytecount = (bytecount+1)*multiplier;
// }

function add() {
  bytecount += multiplier;
  document.getElementById("dlTrigger").style.display = 'none';
  document.getElementById("exchanged").innerHTML = "Exchange BTC for code"
  var random = ~~(Math.random() * (50 - 1) + 1);
  if ( random === 25) {
    money = money+1;
  }
  update();
}

function findSnacks() {
  if(bytecount >= (coffee+1)*10) {
    bytecount = bytecount - ((coffee+1)*10);
    coffee += 1;
    update();
  }
}

function findFriends() {
  if (bytecount >= (friends+1) * 50) {
      bytecount = bytecount - ((friends+1) * 50);
      friends += 1;
      update();
    }
//&& (bytecount - ((autoClick)+1)*12) >= 0)
}

function findQuestion() {
  if(bytecount >= (question+1)*100) {
    bytecount = bytecount - ((question+1) * 100);
    question += 1;
    update();
  }

}

function findSponsor() {
  if (bytecount >= (sponsors+1) * 250) {
    bytecount = bytecount - ((sponsors+1) * 250);
    sponsors += 1;
    update();
  }
}

function buyMultiplier() {
  if (bytecount >= (multiplier+1)*1000) {
    bytecount = bytecount - ((multiplier+1) * 1000);
    multiplier += 1;
    if (multiplier >= 2) {
      var pcParts = ["RAM upgrade", "CPU upgrade", "SSD upgrade", "HDD upgrade",
      "GPU upgrade","PSU upgrade", "Mouse upgrade", "MotherBoard upgrade",
      "Monitor upgrade","Keyboard upgrade", "Fans upgrade", "Case upgrade"];
      var randomPart = pcParts[(Math.random() * pcParts.length) | 0]
        document.getElementById('amountMultiplier').innerHTML = randomPart;
    }
    update();
  }
}

function changeBytes() {
  var random = ~~(Math.random() * (1000 - 100) + 1);
  if ( money > 0 ){
    bytecount = bytecount + money*random;
    document.getElementById("exchanged").innerHTML = "Exchanged for: " + random*money + " Bytes";
    money = 0;

  }
  update();
}

function findSite() {
  if (bytecount >= (site+1)*500) {
    bytecount = bytecount - ((site+1)*500);
    site += 1;
    update();
  }
}

function writeScript() {
  if (bytecount >= (script+1)*1000) {
    bytecount = bytecount - ((script+1)*1000);
    script += 1;
    update();
  }
}
