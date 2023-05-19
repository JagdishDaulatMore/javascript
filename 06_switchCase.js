
function weekDay(dayNum) {
    switch (dayNum) {
      case 1:
        console.log(`Day is: Monday as day number is ${dayNum}`);
        break;
      case 2:
        console.log(`Day is: Tuesday as day number is ${dayNum}`);
        break;
      case 3:
        console.log(`Day is: Wednesday as day number is ${dayNum}`);
        break;
      case 4:
        console.log(`Day is: Thursday as day number is ${dayNum}`);
        break;
      case 5:
        console.log(`Day is: Friday as day number is ${dayNum}`);
        break;
      case 6:
        console.log(`Day is: Saturday as day number is ${dayNum}`);
        break;
      case 7:
        console.log(`Day is: Sunday as day number is ${dayNum}`);
        break;
      default:
        console.log(`Invalid input ==>  ${dayNum}`);
        break;
    }
  }
  weekDay(1);
  weekDay(2);
  weekDay(3);
  weekDay(4);
  weekDay(5);
  weekDay(6);
  weekDay(7);
  
  weekDay(null);
  weekDay(undefined);
  weekDay(NaN);
  
  

  