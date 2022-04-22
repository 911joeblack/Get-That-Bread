var score = 0;
var clickingPower = 1;
var totalGenRate = 0

var cursorCost = 15;
var totalCursors = 0;
var cursorUpgradeCost = 10000;
var cursorGenRate = 1;

var grandpaCost = 100;
var totalGrandpas = 0;
var grandpaUpgradeCost = 100000;
var grandpaGenRate = 5;

var bakeryCost = 1000;
var totalBakeries = 0;
var bakeryUpgradeCost = 1000000;
var bakeryGenRate = 50;

var factoryCost = 10000;
var totalFactories = 0;
var factoryUpgradeCost = 10000000;
var factoryGenRate = 500;

var mineCost = 50000;
var totalMines = 0;
var mineUpgradeCost = 50000000;
var mineGenRate = 1000;

var planetCost = 1000000;
var totalPlanets = 0;
var planetUpgradeCost = 100000000;
var planetGenRate = 10000;

function buyCursor()
{
  if (score >= cursorCost)
  {
    score = score - cursorCost;
    totalCursors = totalCursors + 1;
    cursorCost = Math.round(cursorCost * 1.15);
    totalGenRate = totalGenRate + cursorGenRate;

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
    totalGenRate = totalGenRate + grandpaGenRate;

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
    totalGenRate = totalGenRate + bakeryGenRate;

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
    totalGenRate = totalGenRate + factoryGenRate;

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
    totalGenRate = totalGenRate + mineGenRate;

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
    totalGenRate = totalGenRate + planetGenRate;

    document.getElementById("score").innerHTML = score;
    document.getElementById("planet_cost").innerHTML = planetCost;
    document.getElementById("total_planets").innerHTML = totalPlanets;
  }
}

function buyCursorUpgrade()
{
  if(score >= cursorUpgradeCost)
  {
    score = score - cursorUpgradeCost
    totalGenRate = totalGenRate + cursorGenRate*totalCursors;
    cursorGenRate = cursorGenRate * 2;
    cursorUpgradeCost = Math.round(cursorUpgradeCost * 2.5);


    document.getElementById("score").innerHTML = score;
    document.getElementById("cursor_upgrade_cost").innerHTML = cursorUpgradeCost;
  }
}

function buyGrandpaUpgrade()
{
  if(score >= grandpaUpgradeCost)
  {
    score = score - grandpaUpgradeCost
    totalGenRate = totalGenRate + grandpaGenRate*totalGrandpas;
    grandpaGenRate = grandpaGenRate * 2;
    grandpaUpgradeCost = Math.round(grandpaUpgradeCost * 2.5);


    document.getElementById("score").innerHTML = score;
    document.getElementById("grandpa_upgrade_cost").innerHTML = grandpaUpgradeCost;
  }
}

function buyBakeryUpgrade()
{
  if(score >= bakeryUpgradeCost)
  {
    score = score - bakeryUpgradeCost
    totalGenRate = totalGenRate + bakeryGenRate*totalBakeries;
    bakeryGenRate = bakeryGenRate * 2;
    bakeryUpgradeCost = Math.round(bakeryUpgradeCost * 2.5);


    document.getElementById("score").innerHTML = score;
    document.getElementById("bakery_upgrade_cost").innerHTML = bakeryUpgradeCost;
  }
}

function buyFactoryUpgrade()
{
  if(score >= factoryUpgradeCost)
  {
    score = score - factoryUpgradeCost;
    totalGenRate = totalGenRate + factoryGenRate*totalFactories;
    factoryGenRate = factoryGenRate * 2;
    factoryUpgradeCost = Math.round(factoryUpgradeCost * 2.5);


    document.getElementById("score").innerHTML = score;
    document.getElementById("factory_upgrade_cost").innerHTML = factoryUpgradeCost;
  }
}

function buyMineUpgrade()
{
  if(score >= mineUpgradeCost)
  {
    score = score - mineUpgradeCost;
    totalGenRate = totalGenRate + mineGenRate*totalMines;
    mineGenRate = mineGenRate * 2;
    mineUpgradeCost = Math.round(mineUpgradeCost * 2.5);


    document.getElementById("score").innerHTML = score;
    document.getElementById("mine_upgrade_cost").innerHTML = mineUpgradeCost;
  }
}

function buyPlanetUpgrade()
{
  if(score >= planetUpgradeCost)
  {
    score = score - planetUpgradeCost
    totalGenRate = totalGenRate + planetGenRate*totalPlanets;
    planetGenRate = planetGenRate * 2;
    planetUpgradeCost = Math.round(planetUpgradeCost * 2.5);

    document.getElementById("score").innerHTML = score;
    document.getElementById("planet_upgrade_cost").innerHTML = planetUpgradeCost;
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
  if (typeof savedGame.cursorGenRate != "undefined") cursorGenRate = savedGame.cursorGenRate;
  if (typeof savedGame.grandpaGenRate != "undefined") grandpaGenRate = savedGame.grandpaGenRate;
  if (typeof savedGame.bakeryGenRate != "undefined") bakeryGenRate = savedGame.bakeryGenRate;
  if (typeof savedGame.factoryGenRate != "undefined") factoryGenRate = savedGame.factoryGenRate;
  if (typeof savedGame.mineGenRate != "undefined") mineGenRate = savedGame.mineGenRate;
  if (typeof savedGame.planetGenRate != "undefined") planetGenRate = savedGame.planetGenRate;
  if (typeof savedGame.cursorUpgradeCost != "undefined") cursorUpgradeCost = savedGame.cursorUpgradeCost;
  if (typeof savedGame.grandpaUpgradeCost != "undefined") grandpaUpgradeCost = savedGame.grandpaUpgradeCost;
  if (typeof savedGame.bakeryUpgradeCost != "undefined") bakeryUpgradeCost = savedGame.bakeryUpgradeCost;
  if (typeof savedGame.factoryUpgradeCost != "undefined") factoryUpgradeCost = savedGame.factoryUpgradeCost;
  if (typeof savedGame.mineUpgradeCost != "undefined") mineUpgradeCost = savedGame.mineUpgradeCost;
  if (typeof savedGame.planetUpgradeCost != "undefined") planetUpgradeCost = savedGame.planetUpgradeCost;
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
    totalPlanets: totalPlanets,
    cursorGenRate: cursorGenRate,
    grandpaGenRate: grandpaGenRate,
    bakeryGenRate: bakeryGenRate,
    factoryGenRate: factoryGenRate,
    mineGenRate: mineGenRate,
    planetGenRate: planetGenRate,
    cursorUpgradeCost: cursorUpgradeCost,
    grandpaUpgradeCost: grandpaUpgradeCost,
    bakeryUpgradeCost: bakeryUpgradeCost,
    factoryUpgradeCost: factoryUpgradeCost,
    mineUpgradeCost: mineUpgradeCost,
    planetUpgradeCost: planetUpgradeCost,
    totalGenRate: totalGenRate
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
  document.getElementById("cursor_upgrade_cost").innerHTML = cursorUpgradeCost;
  document.getElementById("grandpa_upgrade_cost").innerHTML = grandpaUpgradeCost;
  document.getElementById("bakery_upgrade_cost").innerHTML = bakeryUpgradeCost;
  document.getElementById("factory_upgrade_cost").innerHTML = factoryUpgradeCost;
  document.getElementById("mine_upgrade_cost").innerHTML = mineUpgradeCost;
  document.getElementById("planet_upgrade_cost").innerHTML = planetUpgradeCost;
};

//to simplify, we should have
//score = score + totalGenRate

setInterval(function()
{
  score = score + totalGenRate;
  document.getElementById("score").innerHTML = score;
}, 1000);


setInterval(function()
{
  saveGame();
}, 30000);
