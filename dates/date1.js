const d = new Date();
console.log(d);

{const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d);}

{const d = new Date(2022, 15, 24, 10, 33, 30);
console.log(d);}//month start from 0 to 11//
//if we give >11 in month overflow to next year//

{const d = new Date(2022, 5, 35, 10, 33, 30);
console.log(d);}//day overflow//

{const d = new Date(2018);
console.log(d);}//only 1 parameter takes as milliseconds//

{const d = new Date(99, 11, 24);
console.log(d); }//previous century//

{
    const d = new Date(9, 11, 24);
    console.log(d); }//previous century by one digit//

    {const d = new Date(0);//0 takes as millisecods//
    console.log(d);}//0 ms takes UTC as 00:00:00

    {const d = new Date(100000000000);
    console.log(d);}//10^11 milliseconds is approx 3years3months//

    
    {const d = new Date(-100000000000);
        console.log(d);}//"-"indicate previous year//