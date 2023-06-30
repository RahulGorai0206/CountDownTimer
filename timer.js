var endDate="30 Jun 2023 07:26 PM";
const inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    if(end>now){
        const diff = (end - now)/1000;
        inputs[3].value=Math.floor(diff%60);
        inputs[2].value=Math.floor(diff/60%60);
        inputs[1].value=Math.floor(diff/60/60);
        inputs[0].value=Math.floor(diff/60/60/24);
    }
    else{
        document.getElementById("txtt").innerText="Your time is up !"
    }
}
clock();
setInterval(()=>{clock()},1000)