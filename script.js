function MakeArray(d) {
    this.length = d;
    for (var i = 1; i <=d; i++) {
      this[i] = 0;
    }
 }

 // gender Array
gender = new MakeArray(2);
gender[1] = "Male"
gender[2] = "Female"


// Days of Week Array
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

// Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"

//Day of Week Function
function compute(form) {
    var val1 = parseInt(form.day.value, 10)
     if ((val1 < 1) || (val1 > 31)) {
       alert("Incorrect date range. Must be between 1-31")
    }
    var val2 = parseInt(form.month.value, 10)
     if ((val2 < 1) || (val2 > 12)) {
       alert("Incorrect month range. Must be between 1-12")
    }
 
    var val2x = parseInt(form.month.value, 10)
    var val3 = parseInt(form.year.value, 10)
     if (val3 < 1900) {
       alert("Incorrect year range. You cannot be that old")
    }
     if (val3 > 2021) {
       alert("Incorrect year range. You cannot be that young")
    }
     if (val2 == 1) {
       val2x = 13;
       val3 = val3-1
    }
     if (val2 == 2) {
       val2x = 14;
       val3 = val3-1
    }
    var val4 = parseInt(((val2x+1)*3)/5, 10)
    var val5 = parseInt(val3/4, 10)
    var val6 = parseInt(val3/100, 10)
    var val7 = parseInt(val3/400, 10)
    var val8 = val1+(val2x*2)+val4+val3+val5-val6+val7+2
    var val9 = parseInt(val8/7, 10)
    var val0 = val8-(val9*7)
    form.result1.value = months[val2]+" "+form.day.value +", "+form.year.value
    form.result2.value = days[val0]
 
    var akan = days[val0]
 
    var gender = (form.gender.value)
    let text1 = "Your Akan name is";

    var sundayMale = "Kwasi"
    var mondayMale = "Kwadwo"
    var tuesdayMale = "Kwabena"
    var wednesdayMale = "Kwaku"
    var thursdayMale = "Yaw"
    var fridayMale = "Kofi"
    var saturdayMale = "Kwame"
 
        if(akan === 'Sunday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", sundayMale)  }
        if(akan === 'Monday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", mondayMale)  }
        if(akan === 'Tuesday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", tuesdayMale)  }
        if(akan === 'Wednesday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", wednesdayMale)  }
        if(akan === 'Thursday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", thursdayMale)  }
        if(akan === 'Friday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", fridayMale)  }
        if(akan === 'Saturday' && gender === 'Male'){
          form.result3.value = text1.concat(" ", saturdayMale)  }
 
     var sundayFemale = "Akosua"
     var mondayFemale = "Adwoa"
     var tuesdayFemale = "Abenaa"
     var wednesdayFemale = "Akua"
     var thursdayFemale = "Yaa"
     var fridayFemale = "Afua"
     var saturdayFemale = "Ama"
 
       if(akan === 'Sunday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", sundayFemale)  }
       if(akan === 'Monday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", mondayFemale)  }
       if(akan === 'Tuesday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", tuesdayFemale)  }
       if(akan === 'Wednesday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", wednesdayFemale)  }
       if(akan === 'Thursday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", thursdayFemale)  }
       if(akan === 'Friday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", fridayFemale)  }
       if(akan === 'Saturday' && gender === 'Female'){
         form.result3.value = text1.concat(" ", saturdayFemale)  }
   }
 