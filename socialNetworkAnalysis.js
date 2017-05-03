var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function listFollowers(){
  findFollowees();

  for (friend in data){
    var str = data[friend].name + " follows ";
    var str2 = "And is followed by ";
    for(following of data[friend].follows){
      str += data[following].name + " ";
    }
    for(followed of data[friend].followedBy){
      str2 += data[followed].name + " ";
    }
  console.log(str);
  console.log(str2);
  }
}

function findFollowees(){       //Creates followedBy property in all objects
  for (friend in data){
    data[friend].followedBy = [];
  }

  for (friend in data){
    var i = 0;
    for(following of data[friend].follows){
      data[following].followedBy.push(friend);
      i++;
    }
  }
}

// function findBiggest(){
//   var most = 0;
//   var big = "";


// }

function findBiggestFollower(){
  var mostFollows = 0;
  var bigFollower = "";
  for (friend in data){
    if (data[friend].follows.length > mostFollows){
      mostFollows = data[friend].follows.length;
    }
  }
  for (friend in data){     //accounts for a tie
    if (data[friend].follows.length == mostFollows){
      bigFollower += data[friend].name + " ";
    }
  }
  console.log("The biggest follower(s) is/are" , bigFollower);
}

function findBiggestFollowee(){
  findFollowees();
  var mostFollowers = 0;
  var bigFollowee = "";
  for (friend in data){
    if (data[friend].followedBy.length > mostFollowers){
      mostFollowers = data[friend].followedBy.length;
    }
  }
  for (friend in data){     //accounts for a tie
    if (data[friend].followedBy.length == mostFollowers){
      bigFollowee += data[friend].name + " ";
    }
  }
  console.log("The biggest followee(s) is/are" , bigFollowee);
}

function findBiggestFolloweeOver30(){
  findFollowees();

  var mostFollowers = 0;
  var bigFollowee = "";
  for (friend in data){
    if (data[friend].followedBy.length > mostFollowers && data[friend].age > 30){
      mostFollowers = data[friend].followedBy.length;
    }
  }
  for (friend in data){     //accounts for a tie
    if (data[friend].followedBy.length == mostFollowers && data[friend].age > 30){
      bigFollowee += data[friend].name + " ";
    }
  }
  console.log("The biggest followee(s) over 30 is/are" , bigFollowee);
}

function findBiggestFollowerOver30(){
  var mostFollows = 0;
  var bigFollower = "";
  for (friend in data){
    if (data[friend].follows.length > mostFollows && data[friend].age > 30){
      mostFollows = data[friend].follows.length;
    }
  }
  for (friend in data){     //accounts for a tie
    if (data[friend].follows.length == mostFollows && data[friend].age > 30){
      bigFollower += data[friend].name + " ";
    }
  }
  console.log("The biggest follower(s) is/are" , bigFollower);
}

function findExclusiveFollow(){
  findFollowees();
  var str = "";
  for (friend in data){
    cont = 0;
    for (following of data[friend].follows){
      if (data[friend].followedBy.indexOf(following) == -1){
        cont++;
        if (cont == data[friend].follows.length)
          str += data[friend].name + " ";
      }
    }
  }
  console.log(str + "are unmutual followers")
}

function findReach(){
  findFollowees();
  for (friend in data){
    var reach = data[friend].followedBy.length;
    for (person of data[friend].followedBy){
      reach += data[person].followedBy.length;
    }
    console.log(data[friend].name + "'s reach is: " + reach);
  }

}

// listFollowers();
// findBiggestFollower();
// findBiggestFollowee();
// findBiggestFolloweeOver30();
// findBiggestFollowerOver30();
// findExclusiveFollow();
findReach();
// console.log(data)








