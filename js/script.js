let inputWrapp = document.querySelector('.input-wrapp')
let inputEl = inputWrapp.querySelector('.input')
let inputPlaceholder = inputWrapp.querySelector('p')
let buttonEl = document.querySelector('.send-button')
let buttonRepeatEl = document.querySelector('.repeat-button')
let listWrapp= document.querySelector('.list-wrapp')
let month = ""
let year = ""
let day = ""

inputEl.onfocus = ()=>{
  inputPlaceholder.classList.add('active')
}
inputEl.onblur = ()=>{
  if(inputEl.value.length == 0){
    inputPlaceholder.classList.remove('active')
  }else{

  }
  let inputText = inputEl.value.replace(/\D/g, "")
  let formatedText = ''
  if(!inputText ) return inputEl.value = ""
  
  day = inputText.substring(0,2)
  month = inputText.substring(2,4)
  year = inputText.substring(4,8)
  if(inputText.length == 8){
    formatedText = day+"."+month+"."+year
  }else{
    formatedText = day+""+month+""+year
  }
  inputEl.value = formatedText
}
inputEl.oninput = ()=>{
  inputEl.value = inputEl.value.replace(/\D/g, "")
  if(inputEl.value.replace(/\D/g, "").length > 8){
    return inputEl.value = inputEl.value.replace(/\D/g, "").substring(0,8)
  }
} 
buttonEl.onclick = ()=>{
  if(inputEl.value.replace(/\D/g, "").length != 8){
    inputEl.style.border = '3px solid #9b4040'
  }else{
    inputEl.style.border = ''
    itemArr = document.querySelectorAll('.item')
    let inputText =  inputEl.value.replace(/\D/g, "")
    for (let i = 0; i < itemArr.length; i++) {
      itemArr[i].querySelector('span').innerHTML = ""
    }
    let num1 = 0
    let num2 = 0
    let num3 = 0
    let num4 = 0
    for (let i = 0; i < inputText.length; i++) {
      num1 += Number(inputText[i]);
    }
    for (let i = 0; i < String(num1).length; i++) {
      num2 += Number(String(num1)[i]);
    }
    if(inputText[0] == 0){
      num3 = num1 - inputText[1] * 2
    }else{
      num3 = num1 - inputText[0] * 2
    }
    for (let i = 0; i < String(num3).length; i++) {
      num4 += Number(String(num3)[i]);
    }
    inputText = inputText+""+num1+""+num2+""+num3+""+num4
    for (let i = 0; i < String(inputText).length; i++) {
      if(String(inputText)[i] == 1){
        itemArr[2].querySelector('span').innerHTML += '1' 
      }
      if(String(inputText)[i] == 2){
        itemArr[6].querySelector('span').innerHTML += '2'
      }
      if(String(inputText)[i] == 3){
        itemArr[10].querySelector('span').innerHTML += '3'
      }
      if(String(inputText)[i] == 4){
        itemArr[3].querySelector('span').innerHTML += '4'
      }
      if(String(inputText)[i] == 5){
        itemArr[7].querySelector('span').innerHTML += '5'
      }
      if(String(inputText)[i] == 6){
        itemArr[11].querySelector('span').innerHTML += '6'
      }
      if(String(inputText)[i] == 7){
        itemArr[4].querySelector('span').innerHTML += '7'
      }
      if(String(inputText)[i] == 8){
        itemArr[8].querySelector('span').innerHTML += '8'
      }
      if(String(inputText)[i] == 9){
        itemArr[12].querySelector('span').innerHTML += '9'
      }
    }
    itemArr[5].querySelector('span').innerHTML = itemArr[2].querySelector('span').innerHTML.length + itemArr[3].querySelector('span').innerHTML.length + itemArr[4].querySelector('span').innerHTML.length
    itemArr[9].querySelector('span').innerHTML = itemArr[6].querySelector('span').innerHTML.length + itemArr[7].querySelector('span').innerHTML.length + itemArr[8].querySelector('span').innerHTML.length
    itemArr[13].querySelector('span').innerHTML = itemArr[10].querySelector('span').innerHTML.length + itemArr[11].querySelector('span').innerHTML.length + itemArr[12].querySelector('span').innerHTML.length
    itemArr[14].querySelector('span').innerHTML = itemArr[2].querySelector('span').innerHTML.length + itemArr[6].querySelector('span').innerHTML.length + itemArr[10].querySelector('span').innerHTML.length
    itemArr[15].querySelector('span').innerHTML = itemArr[3].querySelector('span').innerHTML.length + itemArr[7].querySelector('span').innerHTML.length + itemArr[11].querySelector('span').innerHTML.length
    itemArr[16].querySelector('span').innerHTML = itemArr[4].querySelector('span').innerHTML.length + itemArr[8].querySelector('span').innerHTML.length + itemArr[12].querySelector('span').innerHTML.length

    itemArr[17].querySelector('span').innerHTML = itemArr[2].querySelector('span').innerHTML.length + itemArr[7].querySelector('span').innerHTML.length + itemArr[12].querySelector('span').innerHTML.length
    itemArr[1].querySelector('span').innerHTML = itemArr[10].querySelector('span').innerHTML.length + itemArr[7].querySelector('span').innerHTML.length + itemArr[4].querySelector('span').innerHTML.length

    
    for (let i = 0; i < itemArr.length; i++) {
      if(itemArr[i].querySelector('span').innerHTML == ""){
        itemArr[i].querySelector('span').innerHTML = "0"
      }
    }
    for (let i = 0; i < document.querySelectorAll('span').length; i++) {
      if(document.querySelectorAll('span')[i].innerHTML == '0'){
        document.querySelectorAll('span')[i].innerHTML = '-'
      }
    }
    let destiny = Number(inputText[0])+Number(inputText[1])+Number(inputText[2])+Number(inputText[3])+Number(inputText[4])+Number(inputText[5])+Number(inputText[6])+Number(inputText[7])
    destiny = num2
    let res = destiny
    let number1 = String(destiny)[0]
    let number2 = String(destiny)[1]
    if(res == 10){
      number1 = String(res)[0]
      number2 = String(res)[1]
      res = Number(number1)+Number(number2)
      console.log(res);
    }
    if(res > 11){
      number1 = String(res)[0]
      number2 = String(res)[1]
      res = Number(number1)+Number(number2)
    }
    itemArr[0].querySelector('span').innerHTML = res
    if(document.querySelector('.german') != undefined){
      itemArr[0].querySelectorAll('p')[1].innerHTML = "Geburtsdatum "+inputEl.value
      itemArr[0].querySelectorAll('p')[2].innerHTML = "Zusatzzahlen "+num1+" "+num2+" "+num3+" "+num4
      document.querySelector('.summtext').innerHTML = itemArr[2].querySelector('span').innerHTML+"/"+itemArr[6].querySelector('span').innerHTML+"/"+itemArr[10].querySelector('span').innerHTML+"/"+itemArr[3].querySelector('span').innerHTML+"/"+itemArr[7].querySelector('span').innerHTML+"/"+itemArr[11].querySelector('span').innerHTML+"/"+itemArr[4].querySelector('span').innerHTML+"/"+itemArr[8].querySelector('span').innerHTML+"/"+itemArr[12].querySelector('span').innerHTML+"/lz"+itemArr[0].querySelector('span').innerHTML
    }else{
      itemArr[0].querySelectorAll('p')[1].innerHTML = "Дата рождения "+inputEl.value
      itemArr[0].querySelectorAll('p')[2].innerHTML = "Доп числа "+num1+" "+num2+" "+num3+" "+num4
      document.querySelector('.summtext').innerHTML = itemArr[2].querySelector('span').innerHTML+"/"+itemArr[6].querySelector('span').innerHTML+"/"+itemArr[10].querySelector('span').innerHTML+"/"+itemArr[3].querySelector('span').innerHTML+"/"+itemArr[7].querySelector('span').innerHTML+"/"+itemArr[11].querySelector('span').innerHTML+"/"+itemArr[4].querySelector('span').innerHTML+"/"+itemArr[8].querySelector('span').innerHTML+"/"+itemArr[12].querySelector('span').innerHTML+"/чс"+itemArr[0].querySelector('span').innerHTML
    }
    toggleList()

  }
}
buttonRepeatEl.onclick = ()=>{
  toggleList()
  inputEl.value = ""
  inputPlaceholder.classList.remove('active')
}
const toggleList = ()=>{
  if(listWrapp.classList.contains('disabled')){
    listWrapp.classList.remove('disabled')
    inputWrapp.classList.add('disabled')
  }else{
    listWrapp.classList.add('disabled')
    inputWrapp.classList.remove('disabled')
  }
}
document.querySelector('.summtext').onclick = ()=>{
  document.querySelector('.copytext').value = document.querySelector('.summtext').innerHTML
  document.querySelector('.copytext').select()
  document.execCommand("copy");
}


