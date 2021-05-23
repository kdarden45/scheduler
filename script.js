
let today = moment().format('MMMM Do YYYY')
$("#currentDay").text("todays date "+ today)
let currentHour = moment().format('H')
currentHour = parseInt(currentHour)
function saveTheDate () { 
let time = $(this).parent().attr("id")
let content = $(this).siblings(".description").val()
time = parseInt(time.replace("hour-",''))
localStorage.setItem(time,content)
}
let hourArr = [9, 10, 11, 12, 13, 14, 15, 16, 17]
let task = ['', '', '', '', '', '', '', '', '']
function setTheClass () {
    for(i=0; i < 8; i++){
        let stringArr = hourArr[i].toString()
        task[i] = localStorage.getItem(stringArr)
    }
    for(i = 9; i < 18; i++){
        let div = document.querySelector('#hour-' + i)
       $('#hour-' + i).children()[1] 
      .value = task[i-9]  
        if (hourArr[i-9] < currentHour) {
            div.setAttribute('class', 'row time-block past')
        } else if (hourArr[i-9] > currentHour) {
            div.setAttribute('class', 'row time-block future')
        } else if (hourArr[i-9] === currentHour) {
            div.setAttribute('class', 'row time-block present')
        }
    }

}

$(".saveBtn").on("click",saveTheDate)
setTheClass()