var radio = document.querySelector('.manual-btn')
document.getElementById('radio1').cheked = true
var cont = 1
var cont = 3

setInterval(() => {
    proximapng()
}, 2500)

function proximapng(){
  cont++
 
    if(cont > 4) { 
      cont = 1
      
  
     
      
      }
  
  document. getElementById('radio'+cont).checked = true
  }