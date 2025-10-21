const t1 = new Date();
//***** Date is object by default in JAVASCRIPT *****
//******* new Date(year, month, day, hour, minute, second, and millisecond)
// console.log(t1.getFullYear());
// console.log(t1.getDate(), t1.getDay(), t1.getFullYear());
// console.log(t1.getTimezoneOffset());

console.log(t1.toString()); //Sun Mar 23 2025 20:09:03 GMT+0530 (India Standard Time)
console.log(t1.toJSON()); //2025-03-23T14:39:03.990Z
console.log(t1.toDateString()); //Sun Mar 23 2025
console.log(t1.toLocaleDateString()); //23/3/2025
console.log(t1.toTimeString()); //20:09:03 GMT+0530 (India Standard Time)

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let myDate = new Date();
console.log(days[myDate.getDay()]); //--> Gives day

const d = new Date("2025-03-28T12:11:00Z");
/*
  * ISO DATES: ISO(The International Standard) dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
  * Date and time is separated with a capital T.
  * UTC time is defined with a capital letter Z.
  * If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

*/

/*  ****NOTES
  * DATE GET METHODS :

    Date Get Methods          Description
    getFullYear()	            Get year as a four digit number (yyyy)
    getMonth()	              Get month as a number (0-11)
    getDate()	                Get day as a number (1-31)
    getDay()	                Get weekday as a number (0-6)
    getHours()	              Get hour (0-23)
    getMinutes()	            Get minute (0-59)
    getSeconds()	            Get second (0-59)
    getMilliseconds()	        Get millisecond (0-999)
    getTime()	                Get time (milliseconds since January 1, 1970)

  * UTC DATE GET METHODS :
    
    Method	                Same As	              Description
    getUTCDate()	          getDate()	            Returns the UTC date
    getUTCFullYear()	      getFullYear()	        Returns the UTC year
    getUTCMonth()	          getMonth()	          Returns the UTC month
    getUTCDay()	            getDay()	            Returns the UTC day
    getUTCHours()	          getHours()	          Returns the UTC hour
    getUTCMinutes()	        getMinutes()	        Returns the UTC minutes
    getUTCSeconds()	        getSeconds()	        Returns the UTC seconds
    getUTCMilliseconds()    getMilliseconds()	    Returns the UTC milliseconds
  
  * DATE SET METHODS : Set Date methods are used for setting a part of a date
    
    Set Date Methods        Method	Description
    setDate()	              Set the day as a number (1-31)
    setFullYear()	          Set the year (yyyy)
    setHours()	            Set the hour (0-23)
    setMilliseconds()	      Set the milliseconds (0-999)
    setMinutes()	          Set the minutes (0-59)
    setMonth()	            Set the month (0-11)
    setSeconds()	          Set the seconds (0-59)
    setTime()	              Set the time (milliseconds since January 1, 1970)
*/
