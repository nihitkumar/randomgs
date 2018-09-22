var keyList="A1B@2C3!D4$E5F6G#7H8&I9J*KLM$NO#P@QRSTUVWXZY";
var keyList1="a12!b3c@d6#5e$f6gh%ij&kl*7mn%op38qrst9uvwxyz";
var keyList2="#@$%&*_";
var keyList3="123456789";
var finalKeyList=keyList+keyList1+keyList2+keyList3;
//console.log(finalKeyList)
function genPass(pLength){
    var temp=" ";
for(i=0;i<pLength;i++){
    temp+=finalKeyList.charAt(Math.floor(Math.random()*finalKeyList.length))
    }
    return temp;
    
}

function generator(enterlength){
    //var x=document.getElementById("text").value;
    
  document.passgen.output.value=genPass(enterlength)
}