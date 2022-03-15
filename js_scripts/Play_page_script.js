
var score = 0;
var clickingPower = 1;

var cursorCost = 15;
var totalCursors = 0;

var grandpaCost = 100;
var totalGrandpas = 0;

var bakeryCost = 1000;
var totalBakeries = 0;

var factoryCost = 10000;
var totalFactories = 0;

var mineCost = 50000;
var totalMines = 0;

var planetCost = 1000000;
var totalPlanets = 0;

function buyCursor()
{
  if (score >= cursorCost)
  {
    score = score - cursorCost;
    totalCursors = totalCursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("cursor_cost").innerHTML = cursorCost;
    document.getElementById("total_cursors").innerHTML = totalCursors;
  }
}

function buyGrandpa()
{
  if (score >= grandpaCost)
  {
    score = score - grandpaCost;
    totalGrandpas = totalGrandpas + 1;
    grandpaCost = Math.round(grandpaCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("grandpa_cost").innerHTML = grandpaCost;
    document.getElementById("total_grandpas").innerHTML = totalGrandpas;
  }
}

function buyBakeries()
{
  if (score >= bakeryCost)
  {
    score = score - bakeryCost;
    totalBakeries = totalBakeries + 1;
    bakeryCost = Math.round(bakeryCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("bakery_cost").innerHTML = bakeryCost;
    document.getElementById("total_bakeries").innerHTML = totalBakeries;
  }
}

function buyFactories()
{
  if (score >= factoryCost)
  {
    score = score - factoryCost;
    totalFactories = totalFactories + 1;
    factoryCost = Math.round(factoryCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("factory_cost").innerHTML = factoryCost;
    document.getElementById("total_factories").innerHTML = totalFactories;
  }
}

function buyMines()
{
  if (score >= mineCost)
  {
    score = score - mineCost;
    totalMines = totalMines + 1;
    mineCost = Math.round(mineCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("mine_cost").innerHTML = mineCost;
    document.getElementById("total_mines").innerHTML = totalMines;

  }
}

function buyPlanets()
{
  if (score >= planetCost)
  {
    score = score - planetCost;
    totalPlanets = totalPlanets + 1;
    planetCost = Math.round(planetCost * 1.15);

    document.getElementById("score").innerHTML = score;
    document.getElementById("planet_cost").innerHTML = planetCost;
    document.getElementById("total_planets").innerHTML = totalPlanets;
  }
}

function addToScore(amount)
{
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

function loadGame()
{
  var savedGame = JSON.parse(localStorage.getItem("gameSave"))

  if (typeof savedGame.score != "undefined") score = savedGame.score;
  if (typeof savedGame.clickingPower != "undefined") clickingPower = savedGame.clickingPower;
  if (typeof savedGame.cursorCost != "undefined") cursorCost = savedGame.cursorCost;
  if (typeof savedGame.totalCursors != "undefined") totalCursors = savedGame.totalCursors;
  if (typeof savedGame.grandpaCost != "undefined") grandpaCost = savedGame.grandpaCost;
  if (typeof savedGame.totalGrandpas != "undefined") totalGrandpas = savedGame.totalGrandpas;
  if (typeof savedGame.bakeryCost != "undefined") bakeryCost = savedGame.bakeryCost;
  if (typeof savedGame.totalBakeries != "undefined") totalBakeries = savedGame.totalBakeries;
  if (typeof savedGame.factoryCost != "undefined") factoryCost = savedGame.factoryCost;
  if (typeof savedGame.totalFactories != "undefined") totalFactories = savedGame.totalFactories;
  if (typeof savedGame.mineCost != "undefined") mineCost = savedGame.mineCost;
  if (typeof savedGame.totalMines != "undefined") totalMines = savedGame.totalMines;
  if (typeof savedGame.planetCost != "undefined") planetCost = savedGame.planetCost;
  if (typeof savedGame.totalPlanets != "undefined") totalPlanets = savedGame.totalPlanets;
}

function saveGame()
{
  var gameSave = {
    score: score,
    clickingPower: clickingPower,
    cursorCost: cursorCost,
    totalCursors: totalCursors,
    grandpaCost: grandpaCost,
    totalGrandpas: totalGrandpas,
    bakeryCost: bakeryCost,
    totalBakeries: totalBakeries,
    factoryCost: factoryCost,
    totalFactories: totalFactories,
    mineCost: mineCost,
    totalMines: totalMines,
    planetCost: planetCost,
    totalPlanets: totalPlanets
  };

  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame()
{
  if (confirm("Are you sure you want to reset your game?"))
  {
    var gameSave = {};
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
    location.reload();
  }
}

window.onload = function()
{
  loadGame();

  document.getElementById("score").innerHTML = score;
  document.getElementById("cursor_cost").innerHTML = cursorCost;
  document.getElementById("total_cursors").innerHTML = totalCursors;
  document.getElementById("grandpa_cost").innerHTML = grandpaCost;
  document.getElementById("total_grandpas").innerHTML = totalGrandpas;
  document.getElementById("bakery_cost").innerHTML = bakeryCost;
  document.getElementById("total_bakeries").innerHTML = totalBakeries;
  document.getElementById("factory_cost").innerHTML = factoryCost;
  document.getElementById("total_factories").innerHTML = totalFactories;
  document.getElementById("mine_cost").innerHTML = mineCost;
  document.getElementById("total_mines").innerHTML = totalMines;
  document.getElementById("planet_cost").innerHTML = planetCost;
  document.getElementById("total_planets").innerHTML = totalPlanets;
};

setInterval(function()
{
  score = score + totalCursors;
  score = score + (totalGrandpas * 5) + (totalBakeries * 50) + (totalFactories * 500) +
  (totalMines * 1000) + (totalPlanets * 10000);
  document.getElementById("score").innerHTML = score;
}, 1000);

setInterval(function()
{
  saveGame();
}, 30000);
