

fetch("maze.json")
    .then(res=> res.json())
    .then(data=> {

        let idIterator = 0;
        let caseContainer = document.getElementsByClassName('container')[0];

        for (let element of data[3]["ex-0"]){

            console.log(element);
            console.log(element["walls"]);

            const mazeCase = document.createElement("div");
            mazeCase.setAttribute('id',idIterator);
            mazeCase.classList.add('case');
            caseContainer.appendChild(mazeCase);
            idIterator ++;
        }




    })



