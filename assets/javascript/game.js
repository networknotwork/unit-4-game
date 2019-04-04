$(document).ready(function(){

var gold = [0, 0, 0, 0];
var diamond;
var bag;
var win = 0;
var lose = 0;

function lootset(){
    diamond = Math.floor(Math.random() * 120) + 19;
    $("#bank").text("Bag Capacity: " + diamond);
    gold = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1,Math.floor(Math.random() * 12) + 1,Math.floor(Math.random() * 12) + 1];
    console.log(gold);
    bag = 0;
    $("#haul").text("Bag Weight: " + bag);
};
function red(){
    bag += gold[0];
    console.log(bag);
    $("#haul").text("Bag Weight: " + bag);
};
function blue(){
    bag += gold[1];
    console.log(bag);
    $("#haul").text("Bag Weight: " + bag);
};
function green(){
    bag += gold[2];
    console.log(bag);
    $("#haul").text("Bag Weight: " + bag);
};
function yellow(){
    bag += gold[3];
    console.log(bag);
    $("#haul").text("Bag Weight: " + bag);
};
function gamestate(){
    if(parseInt(bag)===parseInt(diamond)){
        win++;
        console.log("Win: " + win);
        $("#wins").text("Wins: " + win);
        lootset();
    } else if(parseInt(bag)>parseInt(diamond)){
        lose++;
        console.log("Lose: "+ lose);
        $("#losses").text("Losses: " + lose);
        lootset();
    }
};

$("#ruby").click(function(){
    red();
    gamestate();
});
$("#sapphire").click(function(){
    blue();
    gamestate();
});
$("#emerald").click(function(){
    green();
    gamestate();
});
$("#topaz").click(function(){
    yellow();
    gamestate();
});

lootset();

});