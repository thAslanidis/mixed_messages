const first=["tomorrow","today","in a month","this year"]
const second1=[" you"," they"," he"," she"," it"];
const second2=[" don't"," try to"," be carfull to"]
const third1=[" will have a great time"," will have a terible time"," will make a cake"," will have a hard time"," will make a lot of money"," will find love"];
const third2=[" have some love"," have some dessert"," have some happines"]
//function that generates the part of the message randomly
const choise=(a)=>{

    let i = Math.floor((Math.random() * a.length));
    return a[i];

}
//choise of what kind of message it will display
let i=Math.floor(Math.random() * 10)
if (i>=5){
    console.log( choise(first) + choise(second1) + choise(third1));
    console.log(i);
}
else {
    console.log( choise(first) + choise(second2) + choise(third2));
    console.log(i);
}

