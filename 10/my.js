i=0;
function chan1()
{ 
   
   if(i<=3){
   ris=new Array('2.jpg','3.jpg');
    r=document.getElementById('e1');
    r.src=ris[i];
    i++;
    
   }
   
    
}

function chan2()
{
  
   if(i>=0){
   ris=new Array('1.jpg','2.jpg');
   r=document.getElementById('e1');
    r.src=ris[i];
   
    i--;
    }
}

function chan3(){ 
    
    txt=new Array('Закончил лицей №1','Сейчас учусь во ВГУИТ');
    r=document.getElementById('e2');
    r.innerHTML=txt[i];
   
   	 

}

function chan4()
{
  
   txt=new Array('Привет! Меня зовут Никита Харламов, я родился и вырос в городе Воронеж','Закончил лицей №1');
   r=document.getElementById('e2');
    r.innerHTML=txt[i];
    
   
}
document.addEventListener("keydown", function(event) {
  r2=document.getElementById('e2')	
   if (event.code === "KeyN") {
    r2.style.fontSize = "xx-large";
    r2.style.fontFamily = "Arial";
    
  }
  if (event.code === "KeyH") {
   r2.style.fontSize = "medium";
   r2.style.fontFamily = "Times New Roman";
  }
  if (event.code === "KeyY") {
     r3=document.getElementById('e3')
      r3.style.fontFamily = "Times New Roman";	
  const bday = new Date(2023,6,21);
  const today = new Date();
  const diffMs = bday - today;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
  alert('До дня рождения осталось ' + diffDays + ' дней');
   
  }
});