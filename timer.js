function clock(end){
    const now = new Date();
    if(end>now){
    console.log(now)
        const diff = (end - now)/1000;
        res3.value=Math.floor(diff%60);
        res2.value=Math.floor(diff/60%60);
        res1.value=Math.floor(diff/60/60);
        res0.value=Math.floor(diff/60/60/24);
    }
    else{
        document.getElementById("txtt").style.color="yellow"
        document.getElementById("txtt").innerText="Your time is up !"
    }
}
function startTimer(){
    const end = new Date();
    const hour=document.querySelector("#hour").value
    const min=document.querySelector("#min").value
    const sec=document.querySelector("#sec").value
    end.setHours(end.getHours() + Number(hour));
    end.setMinutes(end.getMinutes() + Number(min));
    end.setSeconds(end.getSeconds() + Number(sec));
    document.getElementById("divInp").style.display="none";
    document.getElementById("main").style.display="flex";
    clock(end);
    setInterval(()=>{clock(end)},1000);
};