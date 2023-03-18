const toes = [
    "Biggy",
    "Wiggly",
    "Squiggly",
    "Smally",
    "Curly",
    "Funky",
    "Silly",
    "Gummy",
    "Scrunchy",
    "Stinky",
    "Snuggly",
    "Snappy",
    "Bumpy",
    "Floppy",
    "Twisty",
    "Sexy",
    "Yummy"
    
  ];
  
  function generateToesName() {
    const index = Math.floor(Math.random() * toes.length);
    const toeName = toes[index];
    document.getElementById("toe-name").innerText = toeName;
  }
  