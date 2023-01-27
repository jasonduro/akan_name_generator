/* // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 */

//function 



function generateAkanName() {
  let birthDate = document.getElementById("birthday").value
  let gender = document.getElementById("gender").value
  let dayIndex = new Date(birthDate).getDay()

  //This one evaluates for the day of the week based on the day index
  const getDayName = (dayIndex) =>{
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
  const dayName = getDayName(dayIndex)
  
    //This code block evaluates for the Male Akan Name based on the dayindex above.
  const getMaleAkanName = (dayIndex)=>{
    const names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
    return names[dayIndex];
  } 

  //This code block evaluates for the Feale Akan Name based on the dayindex above.
  const getFemaleAkanName = (dayIndex)=>{
    const names = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
    return names[dayIndex];
  }

  let akanName 
  if(gender == "male"){
    akanName = getMaleAkanName(dayIndex);
  } else if(gender == "female"){
    akanName = getFemaleAkanName(dayIndex);
  }

  console.log(akanName)
}


//https://github.com/apprenticecloud/Akan-1/blob/master/akan.js