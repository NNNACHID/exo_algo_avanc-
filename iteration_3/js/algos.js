// Converts from degrees to radians.
Number.prototype.toRadians = function () {
  return (this * Math.PI) / 180;
};

// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  //console.log("distanceFromGrenoble - implement me !");
  //console.log(city.latitude);

  var CityLat = parseFloat(city.latitude);
  var CityLong = parseFloat(city.longitude);
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  const R = 6371;
  const φ1 = GrenobleLat.toRadians(); // φ, λ in radians
  const φ2 = CityLat.toRadians();
  const Δφ = (CityLat - GrenobleLat).toRadians();
  const Δλ = (CityLong - GrenobleLong).toRadians();

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  console.log(R*c);
  return R * c;
 
}


// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city

function swap(i, j) {

  // Do not delete this line (for display)
  displayBuffer.push(["swap", i, j]); 

  [csvData[i], csvData[j]] = [csvData[j], csvData[i]];

  console.log("swap - implement me !");
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city

function isLess(i, j) {

  // Do not delete this line (for display)
  displayBuffer.push(["compare", i, j]);


  if (distanceFromGrenoble(csvData[i]) < distanceFromGrenoble(csvData[j])){
    return true;
  }else{
    return false;
  }


 // console.log(displayBuffer);
  //console.log("isLess - implement me !");
}

function insertsort() {

  for (let i = 1; i < csvData.length; i++){
    for (let j=i; j > 0; j--){
      if(isLess(j, j-1)){

      
       swap(j, j-1);
      }
    }
  }
  
  //console.log("insertsort - implement me !");
}

function selectionsort() {

  for (let i = 0; i < csvData.length; i++){

    for(let j = i+1; j < csvData.length; j++){

      if(isLess(j, i)){

        swap(i, j);

      }
    }

  }

 // console.log("selectionsort - implement me !");
}

function bubblesort() {
  console.log("bubblesort - implement me !");
}

function shellsort() {
  console.log("shellsort - implement me !");
}

function mergesort() {
  console.log("mergesort - implement me !");
}

function heapsort() {
  console.log("heapsort - implement me !");
}

function quicksort() {
  console.log("quicksort - implement me !");
}
function quick3sort() {
  console.log("quick3sort - implement me !");
}

function sort(algo) {
  switch (algo) {
    case "insert":
      insertsort();
      break;
    case "select":
      selectionsort();
      break;
    case "bubble":
      bubblesort();
      break;
    case "shell":
      shellsort();
      break;
    case "merge":
      mergesort();
      break;
    case "heap":
      heapsort();
      break;
    case "quick":
      quicksort();
      break;
    case "quick3":
      quick3sort();
      break;
    default:
      throw "Invalid algorithm " + algo;
  }
}
