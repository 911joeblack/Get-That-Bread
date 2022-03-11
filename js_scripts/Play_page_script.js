
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

function addToScore(amount)
{
  score = score + amount;
  document.getElementById("score").innerHTML = score;
}

setInterval(function()
{
  score = score + totalCursors;
  score = score + (totalGrandpas * 5) + (totalBakeries * 50) + (totalFactories * 500)
  document.getElementById("score").innerHTML = score;
}, 1000);
