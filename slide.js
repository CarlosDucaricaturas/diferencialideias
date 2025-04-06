var radio = document.querySelector('.manual-btn')
document.getElementById('radio1').cheked = true
var cont = 1


setInterval(() => {
    proximapng()
}, 3000)

function proximapng(){
  cont++
  if(cont > 4){
      cont = 1
  }
  
  document. getElementById('radio'+cont).checked = true
}
