let count=1;
let bill_input=document.getElementById('billamount');
let tip_input=document.getElementById('tippercentage');
let numberofpeopleinput=document.getElementById('count');

function increase(){
    count++;
  updatecount()
 }
function decrease(){
    if(count>1)
    {
        count--;
        updatecount();
    }
  }
 function updatecount()
 {
    document.getElementById('count').innerText=count;
 }
 function calculatebill()
 {
    let bill=Number(bill_input.value);
    let tipper=Number(tip_input.value)/100;
    let numberofpeople=Number(numberofpeopleinput.innerText);
    console.log(numberofpeople);

    let tip_amount=bill*tipper;
    let total=bill+tip_amount;
    // console.log({total:total});
    let result=total/numberofpeople;
    document.getElementById('result').innerText=`$${result.toFixed(2).toLocaleString('en-US')}`;
 }