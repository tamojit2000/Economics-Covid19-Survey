function disableCaste(){
  var e=document.getElementById("Religion");
  var ans=e.options[e.selectedIndex].value;
  if(ans!="Hinduism")
  {
    document.getElementById("Caste").selectedIndex=4;
    document.getElementById("Caste").disabled=true;
  }
  else {
    document.getElementById("Caste").disabled=false;
  }
}

function disableVehicletype(){
  var ele=document.querySelector('input[name="Vehicle_ownership"]:checked').value;
  if(ele=="No")
  {
    document.getElementById("Vehicle_type4").checked=true;
    document.getElementById("Vehicle_type1").disabled=true;
    document.getElementById("Vehicle_type2").disabled=true;
    document.getElementById("Vehicle_type3").disabled=true;
  }
  else {
    document.getElementById("Vehicle_type1").disabled=false;
    document.getElementById("Vehicle_type2").disabled=false;
    document.getElementById("Vehicle_type3").disabled=false;
    document.getElementById("Vehicle_type4").disabled=false;
    document.getElementById("Vehicle_type4").checked=false;
  }
}

function disableDriverhelp(){
  var ele=document.querySelector('input[name="Driver"]:checked').value;
  if(ele=="No")
  {
    document.getElementById("Driver_use4").checked=true;
    document.getElementById("Driver_use1").disabled=true;
    document.getElementById("Driver_use2").disabled=true;
    document.getElementById("Driver_use3").disabled=true;
  }
  else {
    document.getElementById("Driver_use1").disabled=false;
    document.getElementById("Driver_use2").disabled=false;
    document.getElementById("Driver_use3").disabled=false;
    document.getElementById("Driver_use4").disabled=false;
    document.getElementById("Driver_use4").checked=false;
  }

}
