
 let td = document.getElementsByTagName('td');
  let max = '';
  let n = 0;
  function f() {
    for (let i = 0; i < td.length; i++) {
      if (+td[i].innerHTML > max) {
        max = +td[i].innerHTML;
        n = i;
      }
    }
    td[n].style.backgroundColor = 'red';
  }

