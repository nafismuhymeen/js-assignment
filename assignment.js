// feetToMile

function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet/5280;
    } else {
        var mile = "Valu Of Feet Can Not Be Negative";
    }
    return mile;
}

var result = feetToMile(10000);
console.log(result.toFixed(5));


// woodCalculator

function woodCalculator(chair, table, bed) {
    var woodForChair = 1;
    var woodForTable = 3;
    var woodForBed = 5;
    var totalWood = [chair*woodForChair+table*woodForTable+bed*woodForBed];
    return totalWood;
    
}

var totalWood = woodCalculator(2, 5, 4);
console.log("Total Wood Needed:",totalWood);


// brickCalculator


function brickCalculator(floors) {
    if(floors>= 0 && floors <= 10){
        var totalBrick = floors * 15000;
    }
    else if (floors > 10 && floors <= 20) {
        var totalBrick = 150000 + (floors-10)*12000;
    } 
    else if(floors > 20) {
        var totalBrick = 270000 + (floors-20)*10000;
    }
    else if(floors < 0){
        var totalBrick = "Floor number can not be negative!";
    }
    return totalBrick
}

var bricks = brickCalculator(1);
console.log(bricks);


// tinyFriend

function tinyFriends(friendName) {
     names = friendName[0];
    for (var i=0; i < names.length; i++) {
        
        currentName = friendName[i];
        if (currentName>names) {
            names = currentName;
            
        }

    }
    return names
    
}

var smallName = tinyFriends(['nafis', 'muhymeen', 'roy', 'raja'])
console.log(smallName);




