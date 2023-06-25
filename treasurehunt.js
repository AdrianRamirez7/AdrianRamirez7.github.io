const treasure = (location) => {
    const treasureLocation = Math.floor(Math.random() * 9);
    const bombLocation = Math.floor(Math.random() * 9);
  
    if (location === treasureLocation) {
      document.getElementById(location).innerHTML = "🪙";
      alert("You found the treasure! You win!");
    } else if (location === bombLocation) {
      document.getElementById(location).innerHTML = "💣";
      alert("Oh no! You clicked on a bomb! Game over!");
    } else {
      document.getElementById(location).innerHTML = "💀";
        //cell.innerHTML = "🍏";
        //cell.onclick = null;
    }
  };

  

  


  