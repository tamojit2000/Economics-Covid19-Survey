//import 'balloon-css';

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

function disableOccupationIndustry(){
  var e=document.getElementById("Employment_Status_1");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_1").value="";
    document.getElementById("Industry_1").value="";
    document.getElementById("Occupation_1").disabled=true;
    document.getElementById("Industry_1").disabled=true;
    document.getElementById("Work_from_home_1").selectedIndex=2;
    document.getElementById("Work_from_home_1").disabled=true;
  }
  else {
    document.getElementById("Occupation_1").disabled=false;
    document.getElementById("Industry_1").disabled=false;
    document.getElementById("Work_from_home_1").selectedIndex=0;
    document.getElementById("Work_from_home_1").disabled=false;
  }

  var e=document.getElementById("Employment_Status_2");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_2").value="";
    document.getElementById("Industry_2").value="";
    document.getElementById("Occupation_2").disabled=true;
    document.getElementById("Industry_2").disabled=true;
    document.getElementById("Work_from_home_2").selectedIndex=2;
    document.getElementById("Work_from_home_2").disabled=true;
  }
  else {
    document.getElementById("Occupation_2").disabled=false;
    document.getElementById("Industry_2").disabled=false;
    document.getElementById("Work_from_home_2").selectedIndex=0;
    document.getElementById("Work_from_home_2").disabled=false;
  }

  var e=document.getElementById("Employment_Status_3");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_3").value="";
    document.getElementById("Industry_3").value="";
    document.getElementById("Occupation_3").disabled=true;
    document.getElementById("Industry_3").disabled=true;
    document.getElementById("Work_from_home_3").selectedIndex=2;
    document.getElementById("Work_from_home_3").disabled=true;
  }
  else {
    document.getElementById("Occupation_3").disabled=false;
    document.getElementById("Industry_3").disabled=false;
    document.getElementById("Work_from_home_3").selectedIndex=0;
    document.getElementById("Work_from_home_3").disabled=false;
  }

  var e=document.getElementById("Employment_Status_4");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_4").value="";
    document.getElementById("Industry_4").value="";
    document.getElementById("Occupation_4").disabled=true;
    document.getElementById("Industry_4").disabled=true;
    document.getElementById("Work_from_home_4").selectedIndex=2;
    document.getElementById("Work_from_home_4").disabled=true;
  }
  else {
    document.getElementById("Occupation_4").disabled=false;
    document.getElementById("Industry_4").disabled=false;
    document.getElementById("Work_from_home_4").selectedIndex=0;
    document.getElementById("Work_from_home_4").disabled=false;
  }

  var e=document.getElementById("Employment_Status_5");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_5").value="";
    document.getElementById("Industry_5").value="";
    document.getElementById("Occupation_5").disabled=true;
    document.getElementById("Industry_5").disabled=true;
    document.getElementById("Work_from_home_5").selectedIndex=2;
    document.getElementById("Work_from_home_5").disabled=true;
  }
  else {
    document.getElementById("Occupation_5").disabled=false;
    document.getElementById("Industry_5").disabled=false;
    document.getElementById("Work_from_home_5").selectedIndex=0;
    document.getElementById("Work_from_home_5").disabled=false;
  }

  var e=document.getElementById("Employment_Status_6");
  var ans=e.options[e.selectedIndex].value;
  if(ans=="Unemployed" || ans=="Not interested in working" || ans=="Retiree" || ans=="NA")
  {
    document.getElementById("Occupation_6").value="";
    document.getElementById("Industry_6").value="";
    document.getElementById("Occupation_6").disabled=true;
    document.getElementById("Industry_6").disabled=true;
    document.getElementById("Work_from_home_6").selectedIndex=2;
    document.getElementById("Work_from_home_6").disabled=true;
  }
  else {
    document.getElementById("Occupation_6").disabled=false;
    document.getElementById("Industry_6").disabled=false;
    document.getElementById("Work_from_home_6").selectedIndex=0;
    document.getElementById("Work_from_home_6").disabled=false;
  }

}

function disableTable18(){
  var num=document.getElementById("Resident1").value;
  document.getElementById("Relationship_1").disabled=true;
  document.getElementById("Age_1").disabled=true;
  document.getElementById("Gender_1").disabled=true;
  document.getElementById("Marital_Status_1").disabled=true;
  document.getElementById("Employment_Status_1").disabled=true;
  document.getElementById("Occupation_1").disabled=true;
  document.getElementById("Industry_1").disabled=true;
  document.getElementById("Education_1").disabled=true;
  document.getElementById("Disability_1").disabled=true;
  document.getElementById("Respondent_1").disabled=true;
  document.getElementById("Work_from_home_1").disabled=true;
  document.getElementById("Member_in_household_1").disabled=true;
  document.getElementById("Temporary_in_household_1").disabled=true;
  //alert(1);
  document.getElementById("Relationship_2").disabled=true;
  document.getElementById("Age_2").disabled=true;
  document.getElementById("Gender_2").disabled=true;
  document.getElementById("Marital_Status_2").disabled=true;
  document.getElementById("Employment_Status_2").disabled=true;
  document.getElementById("Occupation_2").disabled=true;
  document.getElementById("Industry_2").disabled=true;
  document.getElementById("Education_2").disabled=true;
  document.getElementById("Disability_2").disabled=true;
  document.getElementById("Respondent_2").disabled=true;
  document.getElementById("Work_from_home_2").disabled=true;
  document.getElementById("Member_in_household_2").disabled=true;
  document.getElementById("Temporary_in_household_2").disabled=true;
  //alert(2);
  document.getElementById("Relationship_3").disabled=true;
  document.getElementById("Age_3").disabled=true;
  document.getElementById("Gender_3").disabled=true;
  document.getElementById("Marital_Status_3").disabled=true;
  document.getElementById("Employment_Status_3").disabled=true;
  document.getElementById("Occupation_3").disabled=true;
  document.getElementById("Industry_3").disabled=true;
  document.getElementById("Education_3").disabled=true;
  document.getElementById("Disability_3").disabled=true;
  document.getElementById("Respondent_3").disabled=true;
  document.getElementById("Work_from_home_3").disabled=true;
  document.getElementById("Member_in_household_3").disabled=true;
  document.getElementById("Temporary_in_household_3").disabled=true;
  //alert(3);
  document.getElementById("Relationship_4").disabled=true;
  document.getElementById("Age_4").disabled=true;
  document.getElementById("Gender_4").disabled=true;
  document.getElementById("Marital_Status_4").disabled=true;
  document.getElementById("Employment_Status_4").disabled=true;
  document.getElementById("Occupation_4").disabled=true;
  document.getElementById("Industry_4").disabled=true;
  document.getElementById("Education_4").disabled=true;
  document.getElementById("Disability_4").disabled=true;
  document.getElementById("Respondent_4").disabled=true;
  document.getElementById("Work_from_home_4").disabled=true;
  document.getElementById("Member_in_household_4").disabled=true;
  document.getElementById("Temporary_in_household_4").disabled=true;
  //alert(4);
  document.getElementById("Relationship_5").disabled=true;
  document.getElementById("Age_5").disabled=true;
  document.getElementById("Gender_5").disabled=true;
  document.getElementById("Marital_Status_5").disabled=true;
  document.getElementById("Employment_Status_5").disabled=true;
  document.getElementById("Occupation_5").disabled=true;
  document.getElementById("Industry_5").disabled=true;
  document.getElementById("Education_5").disabled=true;
  document.getElementById("Disability_5").disabled=true;
  document.getElementById("Respondent_5").disabled=true;
  document.getElementById("Work_from_home_5").disabled=true;
  document.getElementById("Member_in_household_5").disabled=true;
  document.getElementById("Temporary_in_household_5").disabled=true;
  //alert(5);
  document.getElementById("Relationship_6").disabled=true;
  document.getElementById("Age_6").disabled=true;
  document.getElementById("Gender_6").disabled=true;
  document.getElementById("Marital_Status_6").disabled=true;
  document.getElementById("Employment_Status_6").disabled=true;
  document.getElementById("Occupation_6").disabled=true;
  document.getElementById("Industry_6").disabled=true;
  document.getElementById("Education_6").disabled=true;
  document.getElementById("Disability_6").disabled=true;
  document.getElementById("Respondent_6").disabled=true;
  document.getElementById("Work_from_home_6").disabled=true;
  document.getElementById("Member_in_household_6").disabled=true;
  document.getElementById("Temporary_in_household_6").disabled=true;
  //alert(6);
  document.getElementById("Self_Care_total_hr_1").disabled=true;
  document.getElementById("Self_Care_avg_hr_1").disabled=true;
  document.getElementById("Travel_total_hr_1").disabled=true;
  document.getElementById("Travel_avg_hr_1").disabled=true;
  document.getElementById("Work_total_time_1").disabled=true;
  document.getElementById("Work_avg_time_1").disabled=true;
  document.getElementById("Eating_total_time_1").disabled=true;
  document.getElementById("Eating_avg_time_1").disabled=true;
  document.getElementById("Sleeping_total_time_1").disabled=true;
  document.getElementById("Sleeping_avg_time_1").disabled=true;
  document.getElementById("Studying_total_time_1").disabled=true;
  document.getElementById("Studying_avg_time_1").disabled=true;
  document.getElementById("Leisure_total_time_1").disabled=true;
  document.getElementById("Leisure_avg_time_1").disabled=true;
  document.getElementById("Job_searching_total_time_1").disabled=true;
  document.getElementById("Job_searching_avg_time_1").disabled=true;
  document.getElementById("Cooking_total_time_1").disabled=true;
  document.getElementById("Cooking_avg_time_1").disabled=true;
  document.getElementById("Utensils_clean_total_time_1").disabled=true;
  document.getElementById("Utensils_clean_avg_time_1").disabled=true;
  document.getElementById("Washing_clothes_total_time_1").disabled=true;
  document.getElementById("Washing_clothes_avg_time_1").disabled=true;
  document.getElementById("Ironing_clothes_total_time_1").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_1").disabled=true;
  document.getElementById("Household_clean_total_time_1").disabled=true;
  document.getElementById("Household_clean_avg_time_1").disabled=true;
  document.getElementById("Teaching_children_total_time_1").disabled=true;
  document.getElementById("Teaching_children_avg_time_1").disabled=true;
  document.getElementById("Elderly_person_care_total_time_1").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_1").disabled=true;
  document.getElementById("Shoping_total_time_1").disabled=true;
  document.getElementById("Shoping_avg_time_1").disabled=true;
  document.getElementById("Outside_time_total_time_1").disabled=true;
  document.getElementById("Outside_time_avg_time_1").disabled=true;
  document.getElementById("Others_total_time_1").disabled=true;
  document.getElementById("Others_avg_time_1").disabled=true;

  document.getElementById("Self_Care_total_hr_2").disabled=true;
  document.getElementById("Self_Care_avg_hr_2").disabled=true;
  document.getElementById("Travel_total_hr_2").disabled=true;
  document.getElementById("Travel_avg_hr_2").disabled=true;
  document.getElementById("Work_total_time_2").disabled=true;
  document.getElementById("Work_avg_time_2").disabled=true;
  document.getElementById("Eating_total_time_2").disabled=true;
  document.getElementById("Eating_avg_time_2").disabled=true;
  document.getElementById("Sleeping_total_time_2").disabled=true;
  document.getElementById("Sleeping_avg_time_2").disabled=true;
  document.getElementById("Studying_total_time_2").disabled=true;
  document.getElementById("Studying_avg_time_2").disabled=true;
  document.getElementById("Leisure_total_time_2").disabled=true;
  document.getElementById("Leisure_avg_time_2").disabled=true;
  document.getElementById("Job_searching_total_time_2").disabled=true;
  document.getElementById("Job_searching_avg_time_2").disabled=true;
  document.getElementById("Cooking_total_time_2").disabled=true;
  document.getElementById("Cooking_avg_time_2").disabled=true;
  document.getElementById("Utensils_clean_total_time_2").disabled=true;
  document.getElementById("Utensils_clean_avg_time_2").disabled=true;
  document.getElementById("Washing_clothes_total_time_2").disabled=true;
  document.getElementById("Washing_clothes_avg_time_2").disabled=true;
  document.getElementById("Ironing_clothes_total_time_2").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_2").disabled=true;
  document.getElementById("Household_clean_total_time_2").disabled=true;
  document.getElementById("Household_clean_avg_time_2").disabled=true;
  document.getElementById("Teaching_children_total_time_2").disabled=true;
  document.getElementById("Teaching_children_avg_time_2").disabled=true;
  document.getElementById("Elderly_person_care_total_time_2").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_2").disabled=true;
  document.getElementById("Shoping_total_time_2").disabled=true;
  document.getElementById("Shoping_avg_time_2").disabled=true;
  document.getElementById("Outside_time_total_time_2").disabled=true;
  document.getElementById("Outside_time_avg_time_2").disabled=true;
  document.getElementById("Others_total_time_2").disabled=true;
  document.getElementById("Others_avg_time_2").disabled=true;

  document.getElementById("Self_Care_total_hr_3").disabled=true;
  document.getElementById("Self_Care_avg_hr_3").disabled=true;
  document.getElementById("Travel_total_hr_3").disabled=true;
  document.getElementById("Travel_avg_hr_3").disabled=true;
  document.getElementById("Work_total_time_3").disabled=true;
  document.getElementById("Work_avg_time_3").disabled=true;
  document.getElementById("Eating_total_time_3").disabled=true;
  document.getElementById("Eating_avg_time_3").disabled=true;
  document.getElementById("Sleeping_total_time_3").disabled=true;
  document.getElementById("Sleeping_avg_time_3").disabled=true;
  document.getElementById("Studying_total_time_3").disabled=true;
  document.getElementById("Studying_avg_time_3").disabled=true;
  document.getElementById("Leisure_total_time_3").disabled=true;
  document.getElementById("Leisure_avg_time_3").disabled=true;
  document.getElementById("Job_searching_total_time_3").disabled=true;
  document.getElementById("Job_searching_avg_time_3").disabled=true;
  document.getElementById("Cooking_total_time_3").disabled=true;
  document.getElementById("Cooking_avg_time_3").disabled=true;
  document.getElementById("Utensils_clean_total_time_3").disabled=true;
  document.getElementById("Utensils_clean_avg_time_3").disabled=true;
  document.getElementById("Washing_clothes_total_time_3").disabled=true;
  document.getElementById("Washing_clothes_avg_time_3").disabled=true;
  document.getElementById("Ironing_clothes_total_time_3").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_3").disabled=true;
  document.getElementById("Household_clean_total_time_3").disabled=true;
  document.getElementById("Household_clean_avg_time_3").disabled=true;
  document.getElementById("Teaching_children_total_time_3").disabled=true;
  document.getElementById("Teaching_children_avg_time_3").disabled=true;
  document.getElementById("Elderly_person_care_total_time_3").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_3").disabled=true;
  document.getElementById("Shoping_total_time_3").disabled=true;
  document.getElementById("Shoping_avg_time_3").disabled=true;
  document.getElementById("Outside_time_total_time_3").disabled=true;
  document.getElementById("Outside_time_avg_time_3").disabled=true;
  document.getElementById("Others_total_time_3").disabled=true;
  document.getElementById("Others_avg_time_3").disabled=true;

  document.getElementById("Self_Care_total_hr_4").disabled=true;
  document.getElementById("Self_Care_avg_hr_4").disabled=true;
  document.getElementById("Travel_total_hr_4").disabled=true;
  document.getElementById("Travel_avg_hr_4").disabled=true;
  document.getElementById("Work_total_time_4").disabled=true;
  document.getElementById("Work_avg_time_4").disabled=true;
  document.getElementById("Eating_total_time_4").disabled=true;
  document.getElementById("Eating_avg_time_4").disabled=true;
  document.getElementById("Sleeping_total_time_4").disabled=true;
  document.getElementById("Sleeping_avg_time_4").disabled=true;
  document.getElementById("Studying_total_time_4").disabled=true;
  document.getElementById("Studying_avg_time_4").disabled=true;
  document.getElementById("Leisure_total_time_4").disabled=true;
  document.getElementById("Leisure_avg_time_4").disabled=true;
  document.getElementById("Job_searching_total_time_4").disabled=true;
  document.getElementById("Job_searching_avg_time_4").disabled=true;
  document.getElementById("Cooking_total_time_4").disabled=true;
  document.getElementById("Cooking_avg_time_4").disabled=true;
  document.getElementById("Utensils_clean_total_time_4").disabled=true;
  document.getElementById("Utensils_clean_avg_time_4").disabled=true;
  document.getElementById("Washing_clothes_total_time_4").disabled=true;
  document.getElementById("Washing_clothes_avg_time_4").disabled=true;
  document.getElementById("Ironing_clothes_total_time_4").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_4").disabled=true;
  document.getElementById("Household_clean_total_time_4").disabled=true;
  document.getElementById("Household_clean_avg_time_4").disabled=true;
  document.getElementById("Teaching_children_total_time_4").disabled=true;
  document.getElementById("Teaching_children_avg_time_4").disabled=true;
  document.getElementById("Elderly_person_care_total_time_4").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_4").disabled=true;
  document.getElementById("Shoping_total_time_4").disabled=true;
  document.getElementById("Shoping_avg_time_4").disabled=true;
  document.getElementById("Outside_time_total_time_4").disabled=true;
  document.getElementById("Outside_time_avg_time_4").disabled=true;
  document.getElementById("Others_total_time_4").disabled=true;
  document.getElementById("Others_avg_time_4").disabled=true;

  document.getElementById("Self_Care_total_hr_5").disabled=true;
  document.getElementById("Self_Care_avg_hr_5").disabled=true;
  document.getElementById("Travel_total_hr_5").disabled=true;
  document.getElementById("Travel_avg_hr_5").disabled=true;
  document.getElementById("Work_total_time_5").disabled=true;
  document.getElementById("Work_avg_time_5").disabled=true;
  document.getElementById("Eating_total_time_5").disabled=true;
  document.getElementById("Eating_avg_time_5").disabled=true;
  document.getElementById("Sleeping_total_time_5").disabled=true;
  document.getElementById("Sleeping_avg_time_5").disabled=true;
  document.getElementById("Studying_total_time_5").disabled=true;
  document.getElementById("Studying_avg_time_5").disabled=true;
  document.getElementById("Leisure_total_time_5").disabled=true;
  document.getElementById("Leisure_avg_time_5").disabled=true;
  document.getElementById("Job_searching_total_time_5").disabled=true;
  document.getElementById("Job_searching_avg_time_5").disabled=true;
  document.getElementById("Cooking_total_time_5").disabled=true;
  document.getElementById("Cooking_avg_time_5").disabled=true;
  document.getElementById("Utensils_clean_total_time_5").disabled=true;
  document.getElementById("Utensils_clean_avg_time_5").disabled=true;
  document.getElementById("Washing_clothes_total_time_5").disabled=true;
  document.getElementById("Washing_clothes_avg_time_5").disabled=true;
  document.getElementById("Ironing_clothes_total_time_5").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_5").disabled=true;
  document.getElementById("Household_clean_total_time_5").disabled=true;
  document.getElementById("Household_clean_avg_time_5").disabled=true;
  document.getElementById("Teaching_children_total_time_5").disabled=true;
  document.getElementById("Teaching_children_avg_time_5").disabled=true;
  document.getElementById("Elderly_person_care_total_time_5").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_5").disabled=true;
  document.getElementById("Shoping_total_time_5").disabled=true;
  document.getElementById("Shoping_avg_time_5").disabled=true;
  document.getElementById("Outside_time_total_time_5").disabled=true;
  document.getElementById("Outside_time_avg_time_5").disabled=true;
  document.getElementById("Others_total_time_5").disabled=true;
  document.getElementById("Others_avg_time_5").disabled=true;

  document.getElementById("Self_Care_total_hr_6").disabled=true;
  document.getElementById("Self_Care_avg_hr_6").disabled=true;
  document.getElementById("Travel_total_hr_6").disabled=true;
  document.getElementById("Travel_avg_hr_6").disabled=true;
  document.getElementById("Work_total_time_6").disabled=true;
  document.getElementById("Work_avg_time_6").disabled=true;
  document.getElementById("Eating_total_time_6").disabled=true;
  document.getElementById("Eating_avg_time_6").disabled=true;
  document.getElementById("Sleeping_total_time_6").disabled=true;
  document.getElementById("Sleeping_avg_time_6").disabled=true;
  document.getElementById("Studying_total_time_6").disabled=true;
  document.getElementById("Studying_avg_time_6").disabled=true;
  document.getElementById("Leisure_total_time_6").disabled=true;
  document.getElementById("Leisure_avg_time_6").disabled=true;
  document.getElementById("Job_searching_total_time_6").disabled=true;
  document.getElementById("Job_searching_avg_time_6").disabled=true;
  document.getElementById("Cooking_total_time_6").disabled=true;
  document.getElementById("Cooking_avg_time_6").disabled=true;
  document.getElementById("Utensils_clean_total_time_6").disabled=true;
  document.getElementById("Utensils_clean_avg_time_6").disabled=true;
  document.getElementById("Washing_clothes_total_time_6").disabled=true;
  document.getElementById("Washing_clothes_avg_time_6").disabled=true;
  document.getElementById("Ironing_clothes_total_time_6").disabled=true;
  document.getElementById("Ironing_clothes_avg_time_6").disabled=true;
  document.getElementById("Household_clean_total_time_6").disabled=true;
  document.getElementById("Household_clean_avg_time_6").disabled=true;
  document.getElementById("Teaching_children_total_time_6").disabled=true;
  document.getElementById("Teaching_children_avg_time_6").disabled=true;
  document.getElementById("Elderly_person_care_total_time_6").disabled=true;
  document.getElementById("Elderly_person_care_avg_time_6").disabled=true;
  document.getElementById("Shoping_total_time_6").disabled=true;
  document.getElementById("Shoping_avg_time_6").disabled=true;
  document.getElementById("Outside_time_total_time_6").disabled=true;
  document.getElementById("Outside_time_avg_time_6").disabled=true;
  document.getElementById("Others_total_time_6").disabled=true;
  document.getElementById("Others_avg_time_6").disabled=true;



  switch(num)
  {
    case "6":
    default:
          document.getElementById("Relationship_6").disabled=false;
          document.getElementById("Age_6").disabled=false;
          document.getElementById("Gender_6").disabled=false;
          document.getElementById("Marital_Status_6").disabled=false;
          document.getElementById("Employment_Status_6").disabled=false;
          document.getElementById("Occupation_6").disabled=false;
          document.getElementById("Industry_6").disabled=false;
          document.getElementById("Education_6").disabled=false;
          document.getElementById("Disability_6").disabled=false;
          document.getElementById("Respondent_6").disabled=false;
          document.getElementById("Work_from_home_6").disabled=false;
          document.getElementById("Member_in_household_6").disabled=false;
          document.getElementById("Temporary_in_household_6").disabled=false;

          document.getElementById("Self_Care_total_hr_6").disabled=false;
          document.getElementById("Self_Care_avg_hr_6").disabled=false;
          document.getElementById("Travel_total_hr_6").disabled=false;
          document.getElementById("Travel_avg_hr_6").disabled=false;
          document.getElementById("Work_total_time_6").disabled=false;
          document.getElementById("Work_avg_time_6").disabled=false;
          document.getElementById("Eating_total_time_6").disabled=false;
          document.getElementById("Eating_avg_time_6").disabled=false;
          document.getElementById("Sleeping_total_time_6").disabled=false;
          document.getElementById("Sleeping_avg_time_6").disabled=false;
          document.getElementById("Studying_total_time_6").disabled=false;
          document.getElementById("Studying_avg_time_6").disabled=false;
          document.getElementById("Leisure_total_time_6").disabled=false;
          document.getElementById("Leisure_avg_time_6").disabled=false;
          document.getElementById("Job_searching_total_time_6").disabled=false;
          document.getElementById("Job_searching_avg_time_6").disabled=false;
          document.getElementById("Cooking_total_time_6").disabled=false;
          document.getElementById("Cooking_avg_time_6").disabled=false;
          document.getElementById("Utensils_clean_total_time_6").disabled=false;
          document.getElementById("Utensils_clean_avg_time_6").disabled=false;
          document.getElementById("Washing_clothes_total_time_6").disabled=false;
          document.getElementById("Washing_clothes_avg_time_6").disabled=false;
          document.getElementById("Ironing_clothes_total_time_6").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_6").disabled=false;
          document.getElementById("Household_clean_total_time_6").disabled=false;
          document.getElementById("Household_clean_avg_time_6").disabled=false;
          document.getElementById("Teaching_children_total_time_6").disabled=false;
          document.getElementById("Teaching_children_avg_time_6").disabled=false;
          document.getElementById("Elderly_person_care_total_time_6").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_6").disabled=false;
          document.getElementById("Shoping_total_time_6").disabled=false;
          document.getElementById("Shoping_avg_time_6").disabled=false;
          document.getElementById("Outside_time_total_time_6").disabled=false;
          document.getElementById("Outside_time_avg_time_6").disabled=false;
          document.getElementById("Others_total_time_6").disabled=false;
          document.getElementById("Others_avg_time_6").disabled=false;


    case "5":
          document.getElementById("Relationship_5").disabled=false;
          document.getElementById("Age_5").disabled=false;
          document.getElementById("Gender_5").disabled=false;
          document.getElementById("Marital_Status_5").disabled=false;
          document.getElementById("Employment_Status_5").disabled=false;
          document.getElementById("Occupation_5").disabled=false;
          document.getElementById("Industry_5").disabled=false;
          document.getElementById("Education_5").disabled=false;
          document.getElementById("Disability_5").disabled=false;
          document.getElementById("Respondent_5").disabled=false;
          document.getElementById("Work_from_home_5").disabled=false;
          document.getElementById("Member_in_household_5").disabled=false;
          document.getElementById("Temporary_in_household_5").disabled=false;

          document.getElementById("Self_Care_total_hr_5").disabled=false;
          document.getElementById("Self_Care_avg_hr_5").disabled=false;
          document.getElementById("Travel_total_hr_5").disabled=false;
          document.getElementById("Travel_avg_hr_5").disabled=false;
          document.getElementById("Work_total_time_5").disabled=false;
          document.getElementById("Work_avg_time_5").disabled=false;
          document.getElementById("Eating_total_time_5").disabled=false;
          document.getElementById("Eating_avg_time_5").disabled=false;
          document.getElementById("Sleeping_total_time_5").disabled=false;
          document.getElementById("Sleeping_avg_time_5").disabled=false;
          document.getElementById("Studying_total_time_5").disabled=false;
          document.getElementById("Studying_avg_time_5").disabled=false;
          document.getElementById("Leisure_total_time_5").disabled=false;
          document.getElementById("Leisure_avg_time_5").disabled=false;
          document.getElementById("Job_searching_total_time_5").disabled=false;
          document.getElementById("Job_searching_avg_time_5").disabled=false;
          document.getElementById("Cooking_total_time_5").disabled=false;
          document.getElementById("Cooking_avg_time_5").disabled=false;
          document.getElementById("Utensils_clean_total_time_5").disabled=false;
          document.getElementById("Utensils_clean_avg_time_5").disabled=false;
          document.getElementById("Washing_clothes_total_time_5").disabled=false;
          document.getElementById("Washing_clothes_avg_time_5").disabled=false;
          document.getElementById("Ironing_clothes_total_time_5").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_5").disabled=false;
          document.getElementById("Household_clean_total_time_5").disabled=false;
          document.getElementById("Household_clean_avg_time_5").disabled=false;
          document.getElementById("Teaching_children_total_time_5").disabled=false;
          document.getElementById("Teaching_children_avg_time_5").disabled=false;
          document.getElementById("Elderly_person_care_total_time_5").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_5").disabled=false;
          document.getElementById("Shoping_total_time_5").disabled=false;
          document.getElementById("Shoping_avg_time_5").disabled=false;
          document.getElementById("Outside_time_total_time_5").disabled=false;
          document.getElementById("Outside_time_avg_time_5").disabled=false;
          document.getElementById("Others_total_time_5").disabled=false;
          document.getElementById("Others_avg_time_5").disabled=false;


    case "4":
          document.getElementById("Relationship_4").disabled=false;
          document.getElementById("Age_4").disabled=false;
          document.getElementById("Gender_4").disabled=false;
          document.getElementById("Marital_Status_4").disabled=false;
          document.getElementById("Employment_Status_4").disabled=false;
          document.getElementById("Occupation_4").disabled=false;
          document.getElementById("Industry_4").disabled=false;
          document.getElementById("Education_4").disabled=false;
          document.getElementById("Disability_4").disabled=false;
          document.getElementById("Respondent_4").disabled=false;
          document.getElementById("Work_from_home_4").disabled=false;
          document.getElementById("Member_in_household_4").disabled=false;
          document.getElementById("Temporary_in_household_4").disabled=false;

          document.getElementById("Self_Care_total_hr_4").disabled=false;
          document.getElementById("Self_Care_avg_hr_4").disabled=false;
          document.getElementById("Travel_total_hr_4").disabled=false;
          document.getElementById("Travel_avg_hr_4").disabled=false;
          document.getElementById("Work_total_time_4").disabled=false;
          document.getElementById("Work_avg_time_4").disabled=false;
          document.getElementById("Eating_total_time_4").disabled=false;
          document.getElementById("Eating_avg_time_4").disabled=false;
          document.getElementById("Sleeping_total_time_4").disabled=false;
          document.getElementById("Sleeping_avg_time_4").disabled=false;
          document.getElementById("Studying_total_time_4").disabled=false;
          document.getElementById("Studying_avg_time_4").disabled=false;
          document.getElementById("Leisure_total_time_4").disabled=false;
          document.getElementById("Leisure_avg_time_4").disabled=false;
          document.getElementById("Job_searching_total_time_4").disabled=false;
          document.getElementById("Job_searching_avg_time_4").disabled=false;
          document.getElementById("Cooking_total_time_4").disabled=false;
          document.getElementById("Cooking_avg_time_4").disabled=false;
          document.getElementById("Utensils_clean_total_time_4").disabled=false;
          document.getElementById("Utensils_clean_avg_time_4").disabled=false;
          document.getElementById("Washing_clothes_total_time_4").disabled=false;
          document.getElementById("Washing_clothes_avg_time_4").disabled=false;
          document.getElementById("Ironing_clothes_total_time_4").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_4").disabled=false;
          document.getElementById("Household_clean_total_time_4").disabled=false;
          document.getElementById("Household_clean_avg_time_4").disabled=false;
          document.getElementById("Teaching_children_total_time_4").disabled=false;
          document.getElementById("Teaching_children_avg_time_4").disabled=false;
          document.getElementById("Elderly_person_care_total_time_4").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_4").disabled=false;
          document.getElementById("Shoping_total_time_4").disabled=false;
          document.getElementById("Shoping_avg_time_4").disabled=false;
          document.getElementById("Outside_time_total_time_4").disabled=false;
          document.getElementById("Outside_time_avg_time_4").disabled=false;
          document.getElementById("Others_total_time_4").disabled=false;
          document.getElementById("Others_avg_time_4").disabled=false;


    case "3":
          document.getElementById("Relationship_3").disabled=false;
          document.getElementById("Age_3").disabled=false;
          document.getElementById("Gender_3").disabled=false;
          document.getElementById("Marital_Status_3").disabled=false;
          document.getElementById("Employment_Status_3").disabled=false;
          document.getElementById("Occupation_3").disabled=false;
          document.getElementById("Industry_3").disabled=false;
          document.getElementById("Education_3").disabled=false;
          document.getElementById("Disability_3").disabled=false;
          document.getElementById("Respondent_3").disabled=false;
          document.getElementById("Work_from_home_3").disabled=false;
          document.getElementById("Member_in_household_3").disabled=false;
          document.getElementById("Temporary_in_household_3").disabled=false;

          document.getElementById("Self_Care_total_hr_3").disabled=false;
          document.getElementById("Self_Care_avg_hr_3").disabled=false;
          document.getElementById("Travel_total_hr_3").disabled=false;
          document.getElementById("Travel_avg_hr_3").disabled=false;
          document.getElementById("Work_total_time_3").disabled=false;
          document.getElementById("Work_avg_time_3").disabled=false;
          document.getElementById("Eating_total_time_3").disabled=false;
          document.getElementById("Eating_avg_time_3").disabled=false;
          document.getElementById("Sleeping_total_time_3").disabled=false;
          document.getElementById("Sleeping_avg_time_3").disabled=false;
          document.getElementById("Studying_total_time_3").disabled=false;
          document.getElementById("Studying_avg_time_3").disabled=false;
          document.getElementById("Leisure_total_time_3").disabled=false;
          document.getElementById("Leisure_avg_time_3").disabled=false;
          document.getElementById("Job_searching_total_time_3").disabled=false;
          document.getElementById("Job_searching_avg_time_3").disabled=false;
          document.getElementById("Cooking_total_time_3").disabled=false;
          document.getElementById("Cooking_avg_time_3").disabled=false;
          document.getElementById("Utensils_clean_total_time_3").disabled=false;
          document.getElementById("Utensils_clean_avg_time_3").disabled=false;
          document.getElementById("Washing_clothes_total_time_3").disabled=false;
          document.getElementById("Washing_clothes_avg_time_3").disabled=false;
          document.getElementById("Ironing_clothes_total_time_3").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_3").disabled=false;
          document.getElementById("Household_clean_total_time_3").disabled=false;
          document.getElementById("Household_clean_avg_time_3").disabled=false;
          document.getElementById("Teaching_children_total_time_3").disabled=false;
          document.getElementById("Teaching_children_avg_time_3").disabled=false;
          document.getElementById("Elderly_person_care_total_time_3").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_3").disabled=false;
          document.getElementById("Shoping_total_time_3").disabled=false;
          document.getElementById("Shoping_avg_time_3").disabled=false;
          document.getElementById("Outside_time_total_time_3").disabled=false;
          document.getElementById("Outside_time_avg_time_3").disabled=false;
          document.getElementById("Others_total_time_3").disabled=false;
          document.getElementById("Others_avg_time_3").disabled=false;


    case "2":
          document.getElementById("Relationship_2").disabled=false;
          document.getElementById("Age_2").disabled=false;
          document.getElementById("Gender_2").disabled=false;
          document.getElementById("Marital_Status_2").disabled=false;
          document.getElementById("Employment_Status_2").disabled=false;
          document.getElementById("Occupation_2").disabled=false;
          document.getElementById("Industry_2").disabled=false;
          document.getElementById("Education_2").disabled=false;
          document.getElementById("Disability_2").disabled=false;
          document.getElementById("Respondent_2").disabled=false;
          document.getElementById("Work_from_home_2").disabled=false;
          document.getElementById("Member_in_household_2").disabled=false;
          document.getElementById("Temporary_in_household_2").disabled=false;

          document.getElementById("Self_Care_total_hr_2").disabled=false;
          document.getElementById("Self_Care_avg_hr_2").disabled=false;
          document.getElementById("Travel_total_hr_2").disabled=false;
          document.getElementById("Travel_avg_hr_2").disabled=false;
          document.getElementById("Work_total_time_2").disabled=false;
          document.getElementById("Work_avg_time_2").disabled=false;
          document.getElementById("Eating_total_time_2").disabled=false;
          document.getElementById("Eating_avg_time_2").disabled=false;
          document.getElementById("Sleeping_total_time_2").disabled=false;
          document.getElementById("Sleeping_avg_time_2").disabled=false;
          document.getElementById("Studying_total_time_2").disabled=false;
          document.getElementById("Studying_avg_time_2").disabled=false;
          document.getElementById("Leisure_total_time_2").disabled=false;
          document.getElementById("Leisure_avg_time_2").disabled=false;
          document.getElementById("Job_searching_total_time_2").disabled=false;
          document.getElementById("Job_searching_avg_time_2").disabled=false;
          document.getElementById("Cooking_total_time_2").disabled=false;
          document.getElementById("Cooking_avg_time_2").disabled=false;
          document.getElementById("Utensils_clean_total_time_2").disabled=false;
          document.getElementById("Utensils_clean_avg_time_2").disabled=false;
          document.getElementById("Washing_clothes_total_time_2").disabled=false;
          document.getElementById("Washing_clothes_avg_time_2").disabled=false;
          document.getElementById("Ironing_clothes_total_time_2").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_2").disabled=false;
          document.getElementById("Household_clean_total_time_2").disabled=false;
          document.getElementById("Household_clean_avg_time_2").disabled=false;
          document.getElementById("Teaching_children_total_time_2").disabled=false;
          document.getElementById("Teaching_children_avg_time_2").disabled=false;
          document.getElementById("Elderly_person_care_total_time_2").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_2").disabled=false;
          document.getElementById("Shoping_total_time_2").disabled=false;
          document.getElementById("Shoping_avg_time_2").disabled=false;
          document.getElementById("Outside_time_total_time_2").disabled=false;
          document.getElementById("Outside_time_avg_time_2").disabled=false;
          document.getElementById("Others_total_time_2").disabled=false;
          document.getElementById("Others_avg_time_2").disabled=false;



    case "1":
          document.getElementById("Relationship_1").disabled=false;
          document.getElementById("Age_1").disabled=false;
          document.getElementById("Gender_1").disabled=false;
          document.getElementById("Marital_Status_1").disabled=false;
          document.getElementById("Employment_Status_1").disabled=false;
          document.getElementById("Occupation_1").disabled=false;
          document.getElementById("Industry_1").disabled=false;
          document.getElementById("Education_1").disabled=false;
          document.getElementById("Disability_1").disabled=false;
          document.getElementById("Respondent_1").disabled=false;
          document.getElementById("Work_from_home_1").disabled=false;
          document.getElementById("Member_in_household_1").disabled=false;
          document.getElementById("Temporary_in_household_1").disabled=false;

          document.getElementById("Self_Care_total_hr_1").disabled=false;
          document.getElementById("Self_Care_avg_hr_1").disabled=false;
          document.getElementById("Travel_total_hr_1").disabled=false;
          document.getElementById("Travel_avg_hr_1").disabled=false;
          document.getElementById("Work_total_time_1").disabled=false;
          document.getElementById("Work_avg_time_1").disabled=false;
          document.getElementById("Eating_total_time_1").disabled=false;
          document.getElementById("Eating_avg_time_1").disabled=false;
          document.getElementById("Sleeping_total_time_1").disabled=false;
          document.getElementById("Sleeping_avg_time_1").disabled=false;
          document.getElementById("Studying_total_time_1").disabled=false;
          document.getElementById("Studying_avg_time_1").disabled=false;
          document.getElementById("Leisure_total_time_1").disabled=false;
          document.getElementById("Leisure_avg_time_1").disabled=false;
          document.getElementById("Job_searching_total_time_1").disabled=false;
          document.getElementById("Job_searching_avg_time_1").disabled=false;
          document.getElementById("Cooking_total_time_1").disabled=false;
          document.getElementById("Cooking_avg_time_1").disabled=false;
          document.getElementById("Utensils_clean_total_time_1").disabled=false;
          document.getElementById("Utensils_clean_avg_time_1").disabled=false;
          document.getElementById("Washing_clothes_total_time_1").disabled=false;
          document.getElementById("Washing_clothes_avg_time_1").disabled=false;
          document.getElementById("Ironing_clothes_total_time_1").disabled=false;
          document.getElementById("Ironing_clothes_avg_time_1").disabled=false;
          document.getElementById("Household_clean_total_time_1").disabled=false;
          document.getElementById("Household_clean_avg_time_1").disabled=false;
          document.getElementById("Teaching_children_total_time_1").disabled=false;
          document.getElementById("Teaching_children_avg_time_1").disabled=false;
          document.getElementById("Elderly_person_care_total_time_1").disabled=false;
          document.getElementById("Elderly_person_care_avg_time_1").disabled=false;
          document.getElementById("Shoping_total_time_1").disabled=false;
          document.getElementById("Shoping_avg_time_1").disabled=false;
          document.getElementById("Outside_time_total_time_1").disabled=false;
          document.getElementById("Outside_time_avg_time_1").disabled=false;
          document.getElementById("Others_total_time_1").disabled=false;
          document.getElementById("Others_avg_time_1").disabled=false;




  }

}

function disableTable21_1(){
  var age=document.getElementById("Age_1").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_1").disabled=true;
    document.getElementById("Self_Care_avg_hr_1").disabled=true;
    document.getElementById("Travel_total_hr_1").disabled=true;
    document.getElementById("Travel_avg_hr_1").disabled=true;
    document.getElementById("Work_total_time_1").disabled=true;
    document.getElementById("Work_avg_time_1").disabled=true;
    document.getElementById("Eating_total_time_1").disabled=true;
    document.getElementById("Eating_avg_time_1").disabled=true;
    document.getElementById("Sleeping_total_time_1").disabled=true;
    document.getElementById("Sleeping_avg_time_1").disabled=true;
    document.getElementById("Studying_total_time_1").disabled=true;
    document.getElementById("Studying_avg_time_1").disabled=true;
    document.getElementById("Leisure_total_time_1").disabled=true;
    document.getElementById("Leisure_avg_time_1").disabled=true;
    document.getElementById("Job_searching_total_time_1").disabled=true;
    document.getElementById("Job_searching_avg_time_1").disabled=true;
    document.getElementById("Cooking_total_time_1").disabled=true;
    document.getElementById("Cooking_avg_time_1").disabled=true;
    document.getElementById("Utensils_clean_total_time_1").disabled=true;
    document.getElementById("Utensils_clean_avg_time_1").disabled=true;
    document.getElementById("Washing_clothes_total_time_1").disabled=true;
    document.getElementById("Washing_clothes_avg_time_1").disabled=true;
    document.getElementById("Ironing_clothes_total_time_1").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_1").disabled=true;
    document.getElementById("Household_clean_total_time_1").disabled=true;
    document.getElementById("Household_clean_avg_time_1").disabled=true;
    document.getElementById("Teaching_children_total_time_1").disabled=true;
    document.getElementById("Teaching_children_avg_time_1").disabled=true;
    document.getElementById("Elderly_person_care_total_time_1").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_1").disabled=true;
    document.getElementById("Shoping_total_time_1").disabled=true;
    document.getElementById("Shoping_avg_time_1").disabled=true;
    document.getElementById("Outside_time_total_time_1").disabled=true;
    document.getElementById("Outside_time_avg_time_1").disabled=true;
    document.getElementById("Others_total_time_1").disabled=true;
    document.getElementById("Others_avg_time_1").disabled=true;


    document.getElementById("Marital_Status_1").selectedIndex=5;
    document.getElementById("Marital_Status_1").disabled=true;
    document.getElementById("Employment_Status_1").selectedIndex=6;
    document.getElementById("Employment_Status_1").disabled=true;
    document.getElementById("Occupation_1").disabled=true;
    document.getElementById("Industry_1").disabled=true;
  }
  else
  {
    document.getElementById("Self_Care_total_hr_1").disabled=false;
    document.getElementById("Self_Care_avg_hr_1").disabled=false;
    document.getElementById("Travel_total_hr_1").disabled=false;
    document.getElementById("Travel_avg_hr_1").disabled=false;
    document.getElementById("Work_total_time_1").disabled=false;
    document.getElementById("Work_avg_time_1").disabled=false;
    document.getElementById("Eating_total_time_1").disabled=false;
    document.getElementById("Eating_avg_time_1").disabled=false;
    document.getElementById("Sleeping_total_time_1").disabled=false;
    document.getElementById("Sleeping_avg_time_1").disabled=false;
    document.getElementById("Studying_total_time_1").disabled=false;
    document.getElementById("Studying_avg_time_1").disabled=false;
    document.getElementById("Leisure_total_time_1").disabled=false;
    document.getElementById("Leisure_avg_time_1").disabled=false;
    document.getElementById("Job_searching_total_time_1").disabled=false;
    document.getElementById("Job_searching_avg_time_1").disabled=false;
    document.getElementById("Cooking_total_time_1").disabled=false;
    document.getElementById("Cooking_avg_time_1").disabled=false;
    document.getElementById("Utensils_clean_total_time_1").disabled=false;
    document.getElementById("Utensils_clean_avg_time_1").disabled=false;
    document.getElementById("Washing_clothes_total_time_1").disabled=false;
    document.getElementById("Washing_clothes_avg_time_1").disabled=false;
    document.getElementById("Ironing_clothes_total_time_1").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_1").disabled=false;
    document.getElementById("Household_clean_total_time_1").disabled=false;
    document.getElementById("Household_clean_avg_time_1").disabled=false;
    document.getElementById("Teaching_children_total_time_1").disabled=false;
    document.getElementById("Teaching_children_avg_time_1").disabled=false;
    document.getElementById("Elderly_person_care_total_time_1").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_1").disabled=false;
    document.getElementById("Shoping_total_time_1").disabled=false;
    document.getElementById("Shoping_avg_time_1").disabled=false;
    document.getElementById("Outside_time_total_time_1").disabled=false;
    document.getElementById("Outside_time_avg_time_1").disabled=false;
    document.getElementById("Others_total_time_1").disabled=false;
    document.getElementById("Others_avg_time_1").disabled=false;


    document.getElementById("Marital_Status_1").selectedIndex=0;
    document.getElementById("Marital_Status_1").disabled=false;
    document.getElementById("Employment_Status_1").selectedIndex=0;
    document.getElementById("Employment_Status_1").disabled=false;
    document.getElementById("Occupation_1").disabled=false;
    document.getElementById("Industry_1").disabled=false;

  }
}
function disableTable21_2(){

  var age=document.getElementById("Age_2").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_2").disabled=true;
    document.getElementById("Self_Care_avg_hr_2").disabled=true;
    document.getElementById("Travel_total_hr_2").disabled=true;
    document.getElementById("Travel_avg_hr_2").disabled=true;
    document.getElementById("Work_total_time_2").disabled=true;
    document.getElementById("Work_avg_time_2").disabled=true;
    document.getElementById("Eating_total_time_2").disabled=true;
    document.getElementById("Eating_avg_time_2").disabled=true;
    document.getElementById("Sleeping_total_time_2").disabled=true;
    document.getElementById("Sleeping_avg_time_2").disabled=true;
    document.getElementById("Studying_total_time_2").disabled=true;
    document.getElementById("Studying_avg_time_2").disabled=true;
    document.getElementById("Leisure_total_time_2").disabled=true;
    document.getElementById("Leisure_avg_time_2").disabled=true;
    document.getElementById("Job_searching_total_time_2").disabled=true;
    document.getElementById("Job_searching_avg_time_2").disabled=true;
    document.getElementById("Cooking_total_time_2").disabled=true;
    document.getElementById("Cooking_avg_time_2").disabled=true;
    document.getElementById("Utensils_clean_total_time_2").disabled=true;
    document.getElementById("Utensils_clean_avg_time_2").disabled=true;
    document.getElementById("Washing_clothes_total_time_2").disabled=true;
    document.getElementById("Washing_clothes_avg_time_2").disabled=true;
    document.getElementById("Ironing_clothes_total_time_2").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_2").disabled=true;
    document.getElementById("Household_clean_total_time_2").disabled=true;
    document.getElementById("Household_clean_avg_time_2").disabled=true;
    document.getElementById("Teaching_children_total_time_2").disabled=true;
    document.getElementById("Teaching_children_avg_time_2").disabled=true;
    document.getElementById("Elderly_person_care_total_time_2").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_2").disabled=true;
    document.getElementById("Shoping_total_time_2").disabled=true;
    document.getElementById("Shoping_avg_time_2").disabled=true;
    document.getElementById("Outside_time_total_time_2").disabled=true;
    document.getElementById("Outside_time_avg_time_2").disabled=true;
    document.getElementById("Others_total_time_2").disabled=true;
    document.getElementById("Others_avg_time_2").disabled=true;


    document.getElementById("Marital_Status_2").selectedIndex=5;
    document.getElementById("Marital_Status_2").disabled=true;
    document.getElementById("Employment_Status_2").selectedIndex=6;
    document.getElementById("Employment_Status_2").disabled=true;
    document.getElementById("Occupation_2").disabled=true;
    document.getElementById("Industry_2").disabled=true;

  }
  else
  {
    document.getElementById("Self_Care_total_hr_2").disabled=false;
    document.getElementById("Self_Care_avg_hr_2").disabled=false;
    document.getElementById("Travel_total_hr_2").disabled=false;
    document.getElementById("Travel_avg_hr_2").disabled=false;
    document.getElementById("Work_total_time_2").disabled=false;
    document.getElementById("Work_avg_time_2").disabled=false;
    document.getElementById("Eating_total_time_2").disabled=false;
    document.getElementById("Eating_avg_time_2").disabled=false;
    document.getElementById("Sleeping_total_time_2").disabled=false;
    document.getElementById("Sleeping_avg_time_2").disabled=false;
    document.getElementById("Studying_total_time_2").disabled=false;
    document.getElementById("Studying_avg_time_2").disabled=false;
    document.getElementById("Leisure_total_time_2").disabled=false;
    document.getElementById("Leisure_avg_time_2").disabled=false;
    document.getElementById("Job_searching_total_time_2").disabled=false;
    document.getElementById("Job_searching_avg_time_2").disabled=false;
    document.getElementById("Cooking_total_time_2").disabled=false;
    document.getElementById("Cooking_avg_time_2").disabled=false;
    document.getElementById("Utensils_clean_total_time_2").disabled=false;
    document.getElementById("Utensils_clean_avg_time_2").disabled=false;
    document.getElementById("Washing_clothes_total_time_2").disabled=false;
    document.getElementById("Washing_clothes_avg_time_2").disabled=false;
    document.getElementById("Ironing_clothes_total_time_2").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_2").disabled=false;
    document.getElementById("Household_clean_total_time_2").disabled=false;
    document.getElementById("Household_clean_avg_time_2").disabled=false;
    document.getElementById("Teaching_children_total_time_2").disabled=false;
    document.getElementById("Teaching_children_avg_time_2").disabled=false;
    document.getElementById("Elderly_person_care_total_time_2").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_2").disabled=false;
    document.getElementById("Shoping_total_time_2").disabled=false;
    document.getElementById("Shoping_avg_time_2").disabled=false;
    document.getElementById("Outside_time_total_time_2").disabled=false;
    document.getElementById("Outside_time_avg_time_2").disabled=false;
    document.getElementById("Others_total_time_2").disabled=false;
    document.getElementById("Others_avg_time_2").disabled=false;


    document.getElementById("Marital_Status_2").selectedIndex=0;
    document.getElementById("Marital_Status_2").disabled=false;
    document.getElementById("Employment_Status_2").selectedIndex=0;
    document.getElementById("Employment_Status_2").disabled=false;
    document.getElementById("Occupation_2").disabled=false;
    document.getElementById("Industry_2").disabled=false;

  }
}

function disableTable21_3(){

  var age=document.getElementById("Age_3").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_3").disabled=true;
    document.getElementById("Self_Care_avg_hr_3").disabled=true;
    document.getElementById("Travel_total_hr_3").disabled=true;
    document.getElementById("Travel_avg_hr_3").disabled=true;
    document.getElementById("Work_total_time_3").disabled=true;
    document.getElementById("Work_avg_time_3").disabled=true;
    document.getElementById("Eating_total_time_3").disabled=true;
    document.getElementById("Eating_avg_time_3").disabled=true;
    document.getElementById("Sleeping_total_time_3").disabled=true;
    document.getElementById("Sleeping_avg_time_3").disabled=true;
    document.getElementById("Studying_total_time_3").disabled=true;
    document.getElementById("Studying_avg_time_3").disabled=true;
    document.getElementById("Leisure_total_time_3").disabled=true;
    document.getElementById("Leisure_avg_time_3").disabled=true;
    document.getElementById("Job_searching_total_time_3").disabled=true;
    document.getElementById("Job_searching_avg_time_3").disabled=true;
    document.getElementById("Cooking_total_time_3").disabled=true;
    document.getElementById("Cooking_avg_time_3").disabled=true;
    document.getElementById("Utensils_clean_total_time_3").disabled=true;
    document.getElementById("Utensils_clean_avg_time_3").disabled=true;
    document.getElementById("Washing_clothes_total_time_3").disabled=true;
    document.getElementById("Washing_clothes_avg_time_3").disabled=true;
    document.getElementById("Ironing_clothes_total_time_3").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_3").disabled=true;
    document.getElementById("Household_clean_total_time_3").disabled=true;
    document.getElementById("Household_clean_avg_time_3").disabled=true;
    document.getElementById("Teaching_children_total_time_3").disabled=true;
    document.getElementById("Teaching_children_avg_time_3").disabled=true;
    document.getElementById("Elderly_person_care_total_time_3").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_3").disabled=true;
    document.getElementById("Shoping_total_time_3").disabled=true;
    document.getElementById("Shoping_avg_time_3").disabled=true;
    document.getElementById("Outside_time_total_time_3").disabled=true;
    document.getElementById("Outside_time_avg_time_3").disabled=true;
    document.getElementById("Others_total_time_3").disabled=true;
    document.getElementById("Others_avg_time_3").disabled=true;


    document.getElementById("Marital_Status_3").selectedIndex=5;
    document.getElementById("Marital_Status_3").disabled=true;
    document.getElementById("Employment_Status_3").selectedIndex=6;
    document.getElementById("Employment_Status_3").disabled=true;
    document.getElementById("Occupation_3").disabled=true;
    document.getElementById("Industry_3").disabled=true;

  }
  else
  {
    document.getElementById("Self_Care_total_hr_3").disabled=false;
    document.getElementById("Self_Care_avg_hr_3").disabled=false;
    document.getElementById("Travel_total_hr_3").disabled=false;
    document.getElementById("Travel_avg_hr_3").disabled=false;
    document.getElementById("Work_total_time_3").disabled=false;
    document.getElementById("Work_avg_time_3").disabled=false;
    document.getElementById("Eating_total_time_3").disabled=false;
    document.getElementById("Eating_avg_time_3").disabled=false;
    document.getElementById("Sleeping_total_time_3").disabled=false;
    document.getElementById("Sleeping_avg_time_3").disabled=false;
    document.getElementById("Studying_total_time_3").disabled=false;
    document.getElementById("Studying_avg_time_3").disabled=false;
    document.getElementById("Leisure_total_time_3").disabled=false;
    document.getElementById("Leisure_avg_time_3").disabled=false;
    document.getElementById("Job_searching_total_time_3").disabled=false;
    document.getElementById("Job_searching_avg_time_3").disabled=false;
    document.getElementById("Cooking_total_time_3").disabled=false;
    document.getElementById("Cooking_avg_time_3").disabled=false;
    document.getElementById("Utensils_clean_total_time_3").disabled=false;
    document.getElementById("Utensils_clean_avg_time_3").disabled=false;
    document.getElementById("Washing_clothes_total_time_3").disabled=false;
    document.getElementById("Washing_clothes_avg_time_3").disabled=false;
    document.getElementById("Ironing_clothes_total_time_3").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_3").disabled=false;
    document.getElementById("Household_clean_total_time_3").disabled=false;
    document.getElementById("Household_clean_avg_time_3").disabled=false;
    document.getElementById("Teaching_children_total_time_3").disabled=false;
    document.getElementById("Teaching_children_avg_time_3").disabled=false;
    document.getElementById("Elderly_person_care_total_time_3").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_3").disabled=false;
    document.getElementById("Shoping_total_time_3").disabled=false;
    document.getElementById("Shoping_avg_time_3").disabled=false;
    document.getElementById("Outside_time_total_time_3").disabled=false;
    document.getElementById("Outside_time_avg_time_3").disabled=false;
    document.getElementById("Others_total_time_3").disabled=false;
    document.getElementById("Others_avg_time_3").disabled=false;


    document.getElementById("Marital_Status_3").selectedIndex=0;
    document.getElementById("Marital_Status_3").disabled=false;
    document.getElementById("Employment_Status_3").selectedIndex=0;
    document.getElementById("Employment_Status_3").disabled=false;
    document.getElementById("Occupation_3").disabled=false;
    document.getElementById("Industry_3").disabled=false;

  }
}

function disableTable21_4(){

  var age=document.getElementById("Age_4").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_4").disabled=true;
    document.getElementById("Self_Care_avg_hr_4").disabled=true;
    document.getElementById("Travel_total_hr_4").disabled=true;
    document.getElementById("Travel_avg_hr_4").disabled=true;
    document.getElementById("Work_total_time_4").disabled=true;
    document.getElementById("Work_avg_time_4").disabled=true;
    document.getElementById("Eating_total_time_4").disabled=true;
    document.getElementById("Eating_avg_time_4").disabled=true;
    document.getElementById("Sleeping_total_time_4").disabled=true;
    document.getElementById("Sleeping_avg_time_4").disabled=true;
    document.getElementById("Studying_total_time_4").disabled=true;
    document.getElementById("Studying_avg_time_4").disabled=true;
    document.getElementById("Leisure_total_time_4").disabled=true;
    document.getElementById("Leisure_avg_time_4").disabled=true;
    document.getElementById("Job_searching_total_time_4").disabled=true;
    document.getElementById("Job_searching_avg_time_4").disabled=true;
    document.getElementById("Cooking_total_time_4").disabled=true;
    document.getElementById("Cooking_avg_time_4").disabled=true;
    document.getElementById("Utensils_clean_total_time_4").disabled=true;
    document.getElementById("Utensils_clean_avg_time_4").disabled=true;
    document.getElementById("Washing_clothes_total_time_4").disabled=true;
    document.getElementById("Washing_clothes_avg_time_4").disabled=true;
    document.getElementById("Ironing_clothes_total_time_4").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_4").disabled=true;
    document.getElementById("Household_clean_total_time_4").disabled=true;
    document.getElementById("Household_clean_avg_time_4").disabled=true;
    document.getElementById("Teaching_children_total_time_4").disabled=true;
    document.getElementById("Teaching_children_avg_time_4").disabled=true;
    document.getElementById("Elderly_person_care_total_time_4").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_4").disabled=true;
    document.getElementById("Shoping_total_time_4").disabled=true;
    document.getElementById("Shoping_avg_time_4").disabled=true;
    document.getElementById("Outside_time_total_time_4").disabled=true;
    document.getElementById("Outside_time_avg_time_4").disabled=true;
    document.getElementById("Others_total_time_4").disabled=true;
    document.getElementById("Others_avg_time_4").disabled=true;


    document.getElementById("Marital_Status_4").selectedIndex=5;
    document.getElementById("Marital_Status_4").disabled=true;
    document.getElementById("Employment_Status_4").selectedIndex=6;
    document.getElementById("Employment_Status_4").disabled=true;
    document.getElementById("Occupation_4").disabled=true;
    document.getElementById("Industry_4").disabled=true;

  }
  else
  {
    document.getElementById("Self_Care_total_hr_4").disabled=false;
    document.getElementById("Self_Care_avg_hr_4").disabled=false;
    document.getElementById("Travel_total_hr_4").disabled=false;
    document.getElementById("Travel_avg_hr_4").disabled=false;
    document.getElementById("Work_total_time_4").disabled=false;
    document.getElementById("Work_avg_time_4").disabled=false;
    document.getElementById("Eating_total_time_4").disabled=false;
    document.getElementById("Eating_avg_time_4").disabled=false;
    document.getElementById("Sleeping_total_time_4").disabled=false;
    document.getElementById("Sleeping_avg_time_4").disabled=false;
    document.getElementById("Studying_total_time_4").disabled=false;
    document.getElementById("Studying_avg_time_4").disabled=false;
    document.getElementById("Leisure_total_time_4").disabled=false;
    document.getElementById("Leisure_avg_time_4").disabled=false;
    document.getElementById("Job_searching_total_time_4").disabled=false;
    document.getElementById("Job_searching_avg_time_4").disabled=false;
    document.getElementById("Cooking_total_time_4").disabled=false;
    document.getElementById("Cooking_avg_time_4").disabled=false;
    document.getElementById("Utensils_clean_total_time_4").disabled=false;
    document.getElementById("Utensils_clean_avg_time_4").disabled=false;
    document.getElementById("Washing_clothes_total_time_4").disabled=false;
    document.getElementById("Washing_clothes_avg_time_4").disabled=false;
    document.getElementById("Ironing_clothes_total_time_4").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_4").disabled=false;
    document.getElementById("Household_clean_total_time_4").disabled=false;
    document.getElementById("Household_clean_avg_time_4").disabled=false;
    document.getElementById("Teaching_children_total_time_4").disabled=false;
    document.getElementById("Teaching_children_avg_time_4").disabled=false;
    document.getElementById("Elderly_person_care_total_time_4").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_4").disabled=false;
    document.getElementById("Shoping_total_time_4").disabled=false;
    document.getElementById("Shoping_avg_time_4").disabled=false;
    document.getElementById("Outside_time_total_time_4").disabled=false;
    document.getElementById("Outside_time_avg_time_4").disabled=false;
    document.getElementById("Others_total_time_4").disabled=false;
    document.getElementById("Others_avg_time_4").disabled=false;


    document.getElementById("Marital_Status_4").selectedIndex=0;
    document.getElementById("Marital_Status_4").disabled=false;
    document.getElementById("Employment_Status_4").selectedIndex=0;
    document.getElementById("Employment_Status_4").disabled=false;
    document.getElementById("Occupation_4").disabled=false;
    document.getElementById("Industry_4").disabled=false;

  }
}

function disableTable21_5(){

  var age=document.getElementById("Age_5").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_5").disabled=true;
    document.getElementById("Self_Care_avg_hr_5").disabled=true;
    document.getElementById("Travel_total_hr_5").disabled=true;
    document.getElementById("Travel_avg_hr_5").disabled=true;
    document.getElementById("Work_total_time_5").disabled=true;
    document.getElementById("Work_avg_time_5").disabled=true;
    document.getElementById("Eating_total_time_5").disabled=true;
    document.getElementById("Eating_avg_time_5").disabled=true;
    document.getElementById("Sleeping_total_time_5").disabled=true;
    document.getElementById("Sleeping_avg_time_5").disabled=true;
    document.getElementById("Studying_total_time_5").disabled=true;
    document.getElementById("Studying_avg_time_5").disabled=true;
    document.getElementById("Leisure_total_time_5").disabled=true;
    document.getElementById("Leisure_avg_time_5").disabled=true;
    document.getElementById("Job_searching_total_time_5").disabled=true;
    document.getElementById("Job_searching_avg_time_5").disabled=true;
    document.getElementById("Cooking_total_time_5").disabled=true;
    document.getElementById("Cooking_avg_time_5").disabled=true;
    document.getElementById("Utensils_clean_total_time_5").disabled=true;
    document.getElementById("Utensils_clean_avg_time_5").disabled=true;
    document.getElementById("Washing_clothes_total_time_5").disabled=true;
    document.getElementById("Washing_clothes_avg_time_5").disabled=true;
    document.getElementById("Ironing_clothes_total_time_5").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_5").disabled=true;
    document.getElementById("Household_clean_total_time_5").disabled=true;
    document.getElementById("Household_clean_avg_time_5").disabled=true;
    document.getElementById("Teaching_children_total_time_5").disabled=true;
    document.getElementById("Teaching_children_avg_time_5").disabled=true;
    document.getElementById("Elderly_person_care_total_time_5").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_5").disabled=true;
    document.getElementById("Shoping_total_time_5").disabled=true;
    document.getElementById("Shoping_avg_time_5").disabled=true;
    document.getElementById("Outside_time_total_time_5").disabled=true;
    document.getElementById("Outside_time_avg_time_5").disabled=true;
    document.getElementById("Others_total_time_5").disabled=true;
    document.getElementById("Others_avg_time_5").disabled=true;


    document.getElementById("Marital_Status_5").selectedIndex=5;
    document.getElementById("Marital_Status_5").disabled=true;
    document.getElementById("Employment_Status_5").selectedIndex=6;
    document.getElementById("Employment_Status_5").disabled=true;
    document.getElementById("Occupation_5").disabled=true;
    document.getElementById("Industry_5").disabled=true;

  }
  else
  {
    document.getElementById("Self_Care_total_hr_5").disabled=false;
    document.getElementById("Self_Care_avg_hr_5").disabled=false;
    document.getElementById("Travel_total_hr_5").disabled=false;
    document.getElementById("Travel_avg_hr_5").disabled=false;
    document.getElementById("Work_total_time_5").disabled=false;
    document.getElementById("Work_avg_time_5").disabled=false;
    document.getElementById("Eating_total_time_5").disabled=false;
    document.getElementById("Eating_avg_time_5").disabled=false;
    document.getElementById("Sleeping_total_time_5").disabled=false;
    document.getElementById("Sleeping_avg_time_5").disabled=false;
    document.getElementById("Studying_total_time_5").disabled=false;
    document.getElementById("Studying_avg_time_5").disabled=false;
    document.getElementById("Leisure_total_time_5").disabled=false;
    document.getElementById("Leisure_avg_time_5").disabled=false;
    document.getElementById("Job_searching_total_time_5").disabled=false;
    document.getElementById("Job_searching_avg_time_5").disabled=false;
    document.getElementById("Cooking_total_time_5").disabled=false;
    document.getElementById("Cooking_avg_time_5").disabled=false;
    document.getElementById("Utensils_clean_total_time_5").disabled=false;
    document.getElementById("Utensils_clean_avg_time_5").disabled=false;
    document.getElementById("Washing_clothes_total_time_5").disabled=false;
    document.getElementById("Washing_clothes_avg_time_5").disabled=false;
    document.getElementById("Ironing_clothes_total_time_5").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_5").disabled=false;
    document.getElementById("Household_clean_total_time_5").disabled=false;
    document.getElementById("Household_clean_avg_time_5").disabled=false;
    document.getElementById("Teaching_children_total_time_5").disabled=false;
    document.getElementById("Teaching_children_avg_time_5").disabled=false;
    document.getElementById("Elderly_person_care_total_time_5").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_5").disabled=false;
    document.getElementById("Shoping_total_time_5").disabled=false;
    document.getElementById("Shoping_avg_time_5").disabled=false;
    document.getElementById("Outside_time_total_time_5").disabled=false;
    document.getElementById("Outside_time_avg_time_5").disabled=false;
    document.getElementById("Others_total_time_5").disabled=false;
    document.getElementById("Others_avg_time_5").disabled=false;


    document.getElementById("Marital_Status_5").selectedIndex=0;
    document.getElementById("Marital_Status_5").disabled=false;
    document.getElementById("Employment_Status_5").selectedIndex=0;
    document.getElementById("Employment_Status_5").disabled=false;
    document.getElementById("Occupation_5").disabled=false;
    document.getElementById("Industry_5").disabled=false;

  }
}

function disableTable21_6(){

  var age=document.getElementById("Age_6").value;
  if(age<18)
  {
    document.getElementById("Self_Care_total_hr_6").disabled=true;
    document.getElementById("Self_Care_avg_hr_6").disabled=true;
    document.getElementById("Travel_total_hr_6").disabled=true;
    document.getElementById("Travel_avg_hr_6").disabled=true;
    document.getElementById("Work_total_time_6").disabled=true;
    document.getElementById("Work_avg_time_6").disabled=true;
    document.getElementById("Eating_total_time_6").disabled=true;
    document.getElementById("Eating_avg_time_6").disabled=true;
    document.getElementById("Sleeping_total_time_6").disabled=true;
    document.getElementById("Sleeping_avg_time_6").disabled=true;
    document.getElementById("Studying_total_time_6").disabled=true;
    document.getElementById("Studying_avg_time_6").disabled=true;
    document.getElementById("Leisure_total_time_6").disabled=true;
    document.getElementById("Leisure_avg_time_6").disabled=true;
    document.getElementById("Job_searching_total_time_6").disabled=true;
    document.getElementById("Job_searching_avg_time_6").disabled=true;
    document.getElementById("Cooking_total_time_6").disabled=true;
    document.getElementById("Cooking_avg_time_6").disabled=true;
    document.getElementById("Utensils_clean_total_time_6").disabled=true;
    document.getElementById("Utensils_clean_avg_time_6").disabled=true;
    document.getElementById("Washing_clothes_total_time_6").disabled=true;
    document.getElementById("Washing_clothes_avg_time_6").disabled=true;
    document.getElementById("Ironing_clothes_total_time_6").disabled=true;
    document.getElementById("Ironing_clothes_avg_time_6").disabled=true;
    document.getElementById("Household_clean_total_time_6").disabled=true;
    document.getElementById("Household_clean_avg_time_6").disabled=true;
    document.getElementById("Teaching_children_total_time_6").disabled=true;
    document.getElementById("Teaching_children_avg_time_6").disabled=true;
    document.getElementById("Elderly_person_care_total_time_6").disabled=true;
    document.getElementById("Elderly_person_care_avg_time_6").disabled=true;
    document.getElementById("Shoping_total_time_6").disabled=true;
    document.getElementById("Shoping_avg_time_6").disabled=true;
    document.getElementById("Outside_time_total_time_6").disabled=true;
    document.getElementById("Outside_time_avg_time_6").disabled=true;
    document.getElementById("Others_total_time_6").disabled=true;
    document.getElementById("Others_avg_time_6").disabled=true;


    document.getElementById("Marital_Status_6").selectedIndex=5;
    document.getElementById("Marital_Status_6").disabled=true;
    document.getElementById("Employment_Status_6").selectedIndex=6;
    document.getElementById("Employment_Status_6").disabled=true;
    document.getElementById("Occupation_6").disabled=true;
    document.getElementById("Industry_6").disabled=true;

  }
  else
  {
    document.getElementById("Self_Care_total_hr_6").disabled=false;
    document.getElementById("Self_Care_avg_hr_6").disabled=false;
    document.getElementById("Travel_total_hr_6").disabled=false;
    document.getElementById("Travel_avg_hr_6").disabled=false;
    document.getElementById("Work_total_time_6").disabled=false;
    document.getElementById("Work_avg_time_6").disabled=false;
    document.getElementById("Eating_total_time_6").disabled=false;
    document.getElementById("Eating_avg_time_6").disabled=false;
    document.getElementById("Sleeping_total_time_6").disabled=false;
    document.getElementById("Sleeping_avg_time_6").disabled=false;
    document.getElementById("Studying_total_time_6").disabled=false;
    document.getElementById("Studying_avg_time_6").disabled=false;
    document.getElementById("Leisure_total_time_6").disabled=false;
    document.getElementById("Leisure_avg_time_6").disabled=false;
    document.getElementById("Job_searching_total_time_6").disabled=false;
    document.getElementById("Job_searching_avg_time_6").disabled=false;
    document.getElementById("Cooking_total_time_6").disabled=false;
    document.getElementById("Cooking_avg_time_6").disabled=false;
    document.getElementById("Utensils_clean_total_time_6").disabled=false;
    document.getElementById("Utensils_clean_avg_time_6").disabled=false;
    document.getElementById("Washing_clothes_total_time_6").disabled=false;
    document.getElementById("Washing_clothes_avg_time_6").disabled=false;
    document.getElementById("Ironing_clothes_total_time_6").disabled=false;
    document.getElementById("Ironing_clothes_avg_time_6").disabled=false;
    document.getElementById("Household_clean_total_time_6").disabled=false;
    document.getElementById("Household_clean_avg_time_6").disabled=false;
    document.getElementById("Teaching_children_total_time_6").disabled=false;
    document.getElementById("Teaching_children_avg_time_6").disabled=false;
    document.getElementById("Elderly_person_care_total_time_6").disabled=false;
    document.getElementById("Elderly_person_care_avg_time_6").disabled=false;
    document.getElementById("Shoping_total_time_6").disabled=false;
    document.getElementById("Shoping_avg_time_6").disabled=false;
    document.getElementById("Outside_time_total_time_6").disabled=false;
    document.getElementById("Outside_time_avg_time_6").disabled=false;
    document.getElementById("Others_total_time_6").disabled=false;
    document.getElementById("Others_avg_time_6").disabled=false;


    document.getElementById("Marital_Status_6").selectedIndex=0;
    document.getElementById("Marital_Status_6").disabled=false;
    document.getElementById("Employment_Status_6").selectedIndex=0;
    document.getElementById("Employment_Status_6").disabled=false;
    document.getElementById("Occupation_6").disabled=false;
    document.getElementById("Industry_6").disabled=false;

  }

}

function disableTable23(){
  var ele=document.querySelector('input[name="Domestic_help_available"]:checked').value;
  if(ele=="No")
  {
    document.getElementById("Preparing_food_activity").disabled=true;
    document.getElementById("Cleaning_food_activity").disabled=true;
    document.getElementById("Cleaning_clothes_activity").disabled=true;
    document.getElementById("Folding_clothes_activity").disabled=true;
    document.getElementById("Ironing_clothes_activity").disabled=true;
    document.getElementById("Brooming_activity").disabled=true;
    document.getElementById("Mopping_activity").disabled=true;
    document.getElementById("Children_activity").disabled=true;
  }
  else{
    document.getElementById("Preparing_food_activity").disabled=false;
    document.getElementById("Cleaning_food_activity").disabled=false;
    document.getElementById("Cleaning_clothes_activity").disabled=false;
    document.getElementById("Folding_clothes_activity").disabled=false;
    document.getElementById("Ironing_clothes_activity").disabled=false;
    document.getElementById("Brooming_activity").disabled=false;
    document.getElementById("Mopping_activity").disabled=false;
    document.getElementById("Children_activity").disabled=false;
  }
}

function ScrollRight(){
  var ele=document.getElementById("DIV18");
  ele.scrollBy(50,0);
}

function ScrollLeft(){
  var ele=document.getElementById("DIV18");
  ele.scrollBy(-1000,0);
}

function calculateTotal_1(){
  var e1=Number(document.getElementById("Self_Care_total_hr_1").value);
  var e2=Number(document.getElementById("Travel_total_hr_1").value);
  var e3=Number(document.getElementById("Work_total_time_1").value);
  var e4=Number(document.getElementById("Eating_total_time_1").value);
  var e5=Number(document.getElementById("Sleeping_total_time_1").value);
  var e6=Number(document.getElementById("Studying_total_time_1").value);
  var e7=Number(document.getElementById("Leisure_total_time_1").value);
  var e8=Number(document.getElementById("Job_searching_total_time_1").value);
  var e9=Number(document.getElementById("Cooking_total_time_1").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_1").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_1").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_1").value);
  var e13=Number(document.getElementById("Household_clean_total_time_1").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_1").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_1").value);
  var e16=Number(document.getElementById("Shoping_total_time_1").value);
  var e17=Number(document.getElementById("Outside_time_total_time_1").value);
  var e18=Number(document.getElementById("Others_total_time_1").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_1").innerHTML=total;
}

function calculateTotal_2(){
  var e1=Number(document.getElementById("Self_Care_total_hr_2").value);
  var e2=Number(document.getElementById("Travel_total_hr_2").value);
  var e3=Number(document.getElementById("Work_total_time_2").value);
  var e4=Number(document.getElementById("Eating_total_time_2").value);
  var e5=Number(document.getElementById("Sleeping_total_time_2").value);
  var e6=Number(document.getElementById("Studying_total_time_2").value);
  var e7=Number(document.getElementById("Leisure_total_time_2").value);
  var e8=Number(document.getElementById("Job_searching_total_time_2").value);
  var e9=Number(document.getElementById("Cooking_total_time_2").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_2").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_2").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_2").value);
  var e13=Number(document.getElementById("Household_clean_total_time_2").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_2").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_2").value);
  var e16=Number(document.getElementById("Shoping_total_time_2").value);
  var e17=Number(document.getElementById("Outside_time_total_time_2").value);
  var e18=Number(document.getElementById("Others_total_time_2").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_2").innerHTML=total;
}

function calculateTotal_3(){
  var e1=Number(document.getElementById("Self_Care_total_hr_3").value);
  var e2=Number(document.getElementById("Travel_total_hr_3").value);
  var e3=Number(document.getElementById("Work_total_time_3").value);
  var e4=Number(document.getElementById("Eating_total_time_3").value);
  var e5=Number(document.getElementById("Sleeping_total_time_3").value);
  var e6=Number(document.getElementById("Studying_total_time_3").value);
  var e7=Number(document.getElementById("Leisure_total_time_3").value);
  var e8=Number(document.getElementById("Job_searching_total_time_3").value);
  var e9=Number(document.getElementById("Cooking_total_time_3").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_3").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_3").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_3").value);
  var e13=Number(document.getElementById("Household_clean_total_time_3").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_3").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_3").value);
  var e16=Number(document.getElementById("Shoping_total_time_3").value);
  var e17=Number(document.getElementById("Outside_time_total_time_3").value);
  var e18=Number(document.getElementById("Others_total_time_3").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_3").innerHTML=total;
}

function calculateTotal_4(){
  var e1=Number(document.getElementById("Self_Care_total_hr_4").value);
  var e2=Number(document.getElementById("Travel_total_hr_4").value);
  var e3=Number(document.getElementById("Work_total_time_4").value);
  var e4=Number(document.getElementById("Eating_total_time_4").value);
  var e5=Number(document.getElementById("Sleeping_total_time_4").value);
  var e6=Number(document.getElementById("Studying_total_time_4").value);
  var e7=Number(document.getElementById("Leisure_total_time_4").value);
  var e8=Number(document.getElementById("Job_searching_total_time_4").value);
  var e9=Number(document.getElementById("Cooking_total_time_4").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_4").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_4").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_4").value);
  var e13=Number(document.getElementById("Household_clean_total_time_4").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_4").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_4").value);
  var e16=Number(document.getElementById("Shoping_total_time_4").value);
  var e17=Number(document.getElementById("Outside_time_total_time_4").value);
  var e18=Number(document.getElementById("Others_total_time_4").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_4").innerHTML=total;
}

function calculateTotal_5(){
  var e1=Number(document.getElementById("Self_Care_total_hr_5").value);
  var e2=Number(document.getElementById("Travel_total_hr_5").value);
  var e3=Number(document.getElementById("Work_total_time_5").value);
  var e4=Number(document.getElementById("Eating_total_time_5").value);
  var e5=Number(document.getElementById("Sleeping_total_time_5").value);
  var e6=Number(document.getElementById("Studying_total_time_5").value);
  var e7=Number(document.getElementById("Leisure_total_time_5").value);
  var e8=Number(document.getElementById("Job_searching_total_time_5").value);
  var e9=Number(document.getElementById("Cooking_total_time_5").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_5").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_5").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_5").value);
  var e13=Number(document.getElementById("Household_clean_total_time_5").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_5").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_5").value);
  var e16=Number(document.getElementById("Shoping_total_time_5").value);
  var e17=Number(document.getElementById("Outside_time_total_time_5").value);
  var e18=Number(document.getElementById("Others_total_time_5").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_5").innerHTML=total;
}

function calculateTotal_6(){
  var e1=Number(document.getElementById("Self_Care_total_hr_6").value);
  var e2=Number(document.getElementById("Travel_total_hr_6").value);
  var e3=Number(document.getElementById("Work_total_time_6").value);
  var e4=Number(document.getElementById("Eating_total_time_6").value);
  var e5=Number(document.getElementById("Sleeping_total_time_6").value);
  var e6=Number(document.getElementById("Studying_total_time_6").value);
  var e7=Number(document.getElementById("Leisure_total_time_6").value);
  var e8=Number(document.getElementById("Job_searching_total_time_6").value);
  var e9=Number(document.getElementById("Cooking_total_time_6").value);
  var e10=Number(document.getElementById("Utensils_clean_total_time_6").value);
  var e11=Number(document.getElementById("Washing_clothes_total_time_6").value);
  var e12=Number(document.getElementById("Ironing_clothes_total_time_6").value);
  var e13=Number(document.getElementById("Household_clean_total_time_6").value);
  var e14=Number(document.getElementById("Teaching_children_total_time_6").value);
  var e15=Number(document.getElementById("Elderly_person_care_total_time_6").value);
  var e16=Number(document.getElementById("Shoping_total_time_6").value);
  var e17=Number(document.getElementById("Outside_time_total_time_6").value);
  var e18=Number(document.getElementById("Others_total_time_6").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Total_6").innerHTML=total;
}

function calculateAvg_1(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_1").value);
  var e2=Number(document.getElementById("Travel_avg_hr_1").value);
  var e3=Number(document.getElementById("Work_avg_time_1").value);
  var e4=Number(document.getElementById("Eating_avg_time_1").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_1").value);
  var e6=Number(document.getElementById("Studying_avg_time_1").value);
  var e7=Number(document.getElementById("Leisure_avg_time_1").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_1").value);
  var e9=Number(document.getElementById("Cooking_avg_time_1").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_1").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_1").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_1").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_1").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_1").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_1").value);
  var e16=Number(document.getElementById("Shoping_avg_time_1").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_1").value);
  var e18=Number(document.getElementById("Others_avg_time_1").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_1").innerHTML=total;
}

function calculateAvg_2(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_2").value);
  var e2=Number(document.getElementById("Travel_avg_hr_2").value);
  var e3=Number(document.getElementById("Work_avg_time_2").value);
  var e4=Number(document.getElementById("Eating_avg_time_2").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_2").value);
  var e6=Number(document.getElementById("Studying_avg_time_2").value);
  var e7=Number(document.getElementById("Leisure_avg_time_2").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_2").value);
  var e9=Number(document.getElementById("Cooking_avg_time_2").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_2").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_2").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_2").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_2").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_2").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_2").value);
  var e16=Number(document.getElementById("Shoping_avg_time_2").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_2").value);
  var e18=Number(document.getElementById("Others_avg_time_2").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_2").innerHTML=total;
}

function calculateAvg_3(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_3").value);
  var e2=Number(document.getElementById("Travel_avg_hr_3").value);
  var e3=Number(document.getElementById("Work_avg_time_3").value);
  var e4=Number(document.getElementById("Eating_avg_time_3").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_3").value);
  var e6=Number(document.getElementById("Studying_avg_time_3").value);
  var e7=Number(document.getElementById("Leisure_avg_time_3").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_3").value);
  var e9=Number(document.getElementById("Cooking_avg_time_3").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_3").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_3").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_3").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_3").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_3").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_3").value);
  var e16=Number(document.getElementById("Shoping_avg_time_3").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_3").value);
  var e18=Number(document.getElementById("Others_avg_time_3").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_3").innerHTML=total;
}

function calculateAvg_4(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_4").value);
  var e2=Number(document.getElementById("Travel_avg_hr_4").value);
  var e3=Number(document.getElementById("Work_avg_time_4").value);
  var e4=Number(document.getElementById("Eating_avg_time_4").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_4").value);
  var e6=Number(document.getElementById("Studying_avg_time_4").value);
  var e7=Number(document.getElementById("Leisure_avg_time_4").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_4").value);
  var e9=Number(document.getElementById("Cooking_avg_time_4").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_4").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_4").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_4").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_4").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_4").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_4").value);
  var e16=Number(document.getElementById("Shoping_avg_time_4").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_4").value);
  var e18=Number(document.getElementById("Others_avg_time_4").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_4").innerHTML=total;
}

function calculateAvg_5(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_5").value);
  var e2=Number(document.getElementById("Travel_avg_hr_5").value);
  var e3=Number(document.getElementById("Work_avg_time_5").value);
  var e4=Number(document.getElementById("Eating_avg_time_5").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_5").value);
  var e6=Number(document.getElementById("Studying_avg_time_5").value);
  var e7=Number(document.getElementById("Leisure_avg_time_5").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_5").value);
  var e9=Number(document.getElementById("Cooking_avg_time_5").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_5").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_5").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_5").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_5").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_5").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_5").value);
  var e16=Number(document.getElementById("Shoping_avg_time_5").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_5").value);
  var e18=Number(document.getElementById("Others_avg_time_5").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_5").innerHTML=total;
}

function calculateAvg_6(){
  var e1=Number(document.getElementById("Self_Care_avg_hr_6").value);
  var e2=Number(document.getElementById("Travel_avg_hr_6").value);
  var e3=Number(document.getElementById("Work_avg_time_6").value);
  var e4=Number(document.getElementById("Eating_avg_time_6").value);
  var e5=Number(document.getElementById("Sleeping_avg_time_6").value);
  var e6=Number(document.getElementById("Studying_avg_time_6").value);
  var e7=Number(document.getElementById("Leisure_avg_time_6").value);
  var e8=Number(document.getElementById("Job_searching_avg_time_6").value);
  var e9=Number(document.getElementById("Cooking_avg_time_6").value);
  var e10=Number(document.getElementById("Utensils_clean_avg_time_6").value);
  var e11=Number(document.getElementById("Washing_clothes_avg_time_6").value);
  var e12=Number(document.getElementById("Ironing_clothes_avg_time_6").value);
  var e13=Number(document.getElementById("Household_clean_avg_time_6").value);
  var e14=Number(document.getElementById("Teaching_children_avg_time_6").value);
  var e15=Number(document.getElementById("Elderly_person_care_avg_time_6").value);
  var e16=Number(document.getElementById("Shoping_avg_time_6").value);
  var e17=Number(document.getElementById("Outside_time_avg_time_6").value);
  var e18=Number(document.getElementById("Others_avg_time_6").value);
  var total=e1+e2+e3+e4+e5+e6+e7+e8+e9+e10+e11+e12+e13+e14+e15+e16+e17+e18;
  document.getElementById("Avg_6").innerHTML=total;
}
