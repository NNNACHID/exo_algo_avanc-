let tailleX = 24;

function createMaze(mazeArray) {
  let idIterator = 0;
  let caseContainer = document.getElementsByClassName("container")[0];

  for (let element of mazeArray) {
    const mazeCase = document.createElement("div");
    mazeCase.setAttribute("id", idIterator);
    mazeCase.classList.add("case");
    caseContainer.appendChild(mazeCase);
    //console.log(element);

    //generate enter and exit
    if (element["entrance"] === true) {
      document.getElementById(idIterator).style.backgroundColor = "green";
    }
    if (element["exit"] === true) {
      document.getElementById(idIterator).style.backgroundColor = "red";
    }

    // generate wall
    if (element["walls"][0] === true) {
      document.getElementById(idIterator).style.borderTop = "3px solid black";
    }
    if (element["walls"][1] === true) {
      document.getElementById(idIterator).style.borderRight = "3px solid black";
    }
    if (element["walls"][2] === true) {
      document.getElementById(idIterator).style.borderBottom =
        "3px solid black";
    }
    if (element["walls"][3] === true) {
      document.getElementById(idIterator).style.borderLeft = "3px solid black";
    }

    idIterator++;
  }
}

function searchEnter(maze) {
  for (let element of maze) {
    if (element["entrance"] === true) {
      return element;
    }
  }
}

function dfsIterative(maze, enter) {


  let mazeStack = [];

  mazeStack.push(enter);
  let pos = [-tailleX, 1, tailleX, -1];

  while (mazeStack.length > 0) {

    let mazePosition = mazeStack.pop();

    if (mazePosition["isVisited"] == null) 
    {
      mazePosition.isVisited = true;
      let mazeId = mazePosition["posX"] * tailleX + mazePosition["posY"];
      document.getElementById(mazeId).style.backgroundColor = "blue";
      console.log(document.getElementById(mazeId));
      if (mazePosition["exit"]) 
      {
        let thisCase = mazePosition;
        let mazeId = thisCase["posX"] * tailleX + thisCase["posY"];
        document.getElementById(mazeId).style.backgroundColor = "yellow";
        do
        {
          console.log(thisCase["parent"]);
          thisCase = maze[thisCase["parent"]]
          let mazeId = thisCase["posX"] * tailleX + thisCase["posY"];
          document.getElementById(mazeId).style.backgroundColor = "yellow";
        } while(thisCase["parent"] != null)
        return;
      }
      for(let i = 0; mazePosition["walls"].length > i; i++)
      {
        if(!mazePosition["walls"][i])
        {
          let isAvailableCase = maze[mazePosition["posX"] * tailleX + mazePosition["posY"] + pos[i]];
          if(isAvailableCase["isVisited"] == null)
          {
            isAvailableCase.parent = mazePosition["posX"] * tailleX + mazePosition["posY"];
            mazeStack.push(isAvailableCase);
            //console.log(isAvailableCase["parent"]);
          }
        }
      }
    }
   
    
  }
  return undefined;
}

fetch("maze.json")
  .then((res) => res.json())
  .then((data) => {
    let mazeArray = data[tailleX]["ex-2"];

    createMaze(mazeArray);
    dfsIterative(mazeArray, searchEnter(mazeArray));
  });
