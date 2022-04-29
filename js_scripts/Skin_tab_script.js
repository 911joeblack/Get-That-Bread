function openNav()
{
  document.getElementById("myNav").style.width = "100%";
}

function closeNav()
{
  document.getElementById("myNav").style.width = "0%";
}

// Bread Slice Image
function changeImage1()
{
  var image = document.getElementById("m_image");
  image.src = "../pictures/bread_slice.png";
  image.height = "340";
  image.width = "260";
}

// Bread Roll Image
function changeImage2()
{
  if (achievementProgress[0] == 1)
  {
    var image = document.getElementById("m_image");
    image.src = "../pictures/bread_roll.png";
    image.height = "400";
    image.width = "500";
  }

  else
  {
    alert("Unlock Achievement #1 to get Bread Roll skin");
  }
}

// Concha Image
function changeImage3()
{
  if (achievementProgress[1] == 1)
  {
    var image = document.getElementById("m_image");
    image.src = "../pictures/concha.png";
    image.height = "400";
    image.width = "650";
  }

  else
  {
    alert("Unlock Achievement #2 to get Concha skin");
  }
}

// Bagel Image
function changeImage4()
{
  if (achievementProgress[2] == 1)
  {
    var image = document.getElementById("m_image");
    image.src = "../pictures/bagel.png";
    image.height = "400";
    image.width = "600";
  }

  else
  {
    alert("Unlock Achievement #3 to get Bagel skin");
  }
}

// English Muffin Image
function changeImage5()
{
  if (achievementProgress[3] == 1)
  {
    var image = document.getElementById("m_image");
    image.src = "../pictures/english_muffins.png";
    image.height = "300";
    image.width = "600";
  }

  else
  {
    alert("Unlock Achievement #4 to get English Muffins skin");
  }
}

// Banana Crepe Image
function changeImage6()
{
  if (achievementProgress[4] == 1)
  {
    var image = document.getElementById("m_image");
    image.src = "../pictures/banana_crepe.png";
    image.height = "400";
    image.width = "500";
  }

  else
  {
    alert("Unlock Achievement #5 to get Banana Crepe skin");
  }
}
