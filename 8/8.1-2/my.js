c=0;
function f1()
{
 
 t=document.getElementById('e1');

 if (c==0)
 { s='center'; t.value='absolute';c=1;}
 else
 {  s='start';t.value = "center" ; c=0; }
  elems = document.getElementsByClassName('k');
    for (i in elems)
    {elems[i].style.textAlign=s;}
}
function f2()
{
 var images = document.querySelectorAll('img');

for (var i = 0; i < images.length; i++) {
   
    images[i].src = 'popug.jpg';
}
  
}



