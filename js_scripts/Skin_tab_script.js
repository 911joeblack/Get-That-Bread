var image = document.getElementById("m_image");
image.src = "../pictures/bread_slice.png";

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
  image = document.getElementById("m_image");
  image.src = "../pictures/bread_slice.png";
  image.height = "380";
  image.width = "300";
}

// Bread Roll Image
function changeImage2()
{
  if (achievementProgress[0] == 1)
  {
    image = document.getElementById("m_image");
    image.src = "../pictures/bread_roll.png";
    image.height = "350";
    image.width = "450";
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
    image = document.getElementById("m_image");
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
    image = document.getElementById("m_image");
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
    image = document.getElementById("m_image");
    image.src = "../pictures/english_muffins.png";
    image.height = "350";
    image.width = "700";
  }

  else
  {
    alert("Unlock Achievement #4 to get English Muffin skin");
  }
}

// Banana Crepe Image
function changeImage6()
{
  if (achievementProgress[4] == 1)
  {
    image = document.getElementById("m_image");
    image.src = "../pictures/banana_crepe.png";
    image.height = "400";
    image.width = "450";
  }

  else
  {
    alert("Unlock Achievement #5 to get Banana Crepe skin");
  }
}

// Corn Bread Image
function changeImage7()
{
  if (achievementProgress[5] == 1)
  {
    image = document.getElementById("m_image");
    image.src = "../pictures/corn_bread.png";
    image.height = "400";
    image.width = "400";
  }

  else
  {
    alert("Unlock Achievement #6 to get Corn Bread skin");
  }
}

// Churros Image
function changeImage8()
{
  if (achievementProgress[6] == 1)
  {
    image = document.getElementById("m_image");
    image.src = "../pictures/churros.png";
    image.height = "400";
    image.width = "450";
  }

  else
  {
    alert("Unlock Achievement #7 to get Churro skin");
  }
}

// Cinnamon Roll Image
function changeImage9()
{
  if (achievementProgress[7] == 1)
  {
    image = document.getElementById("m_image");
    image.src = "../pictures/cinnamon_roll.png";
    image.height = "350";
    image.width = "700";
  }

  else
  {
    alert("Unlock Achievement #8 to get Cinnamon Roll skin");
  }
}
