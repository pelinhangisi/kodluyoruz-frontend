
let myName = document.querySelector("#myName")
let myClock = document.querySelector("#myClock")


let userName = prompt ("Adınızı Giriniz :")
myName.innerHTML = userName

    function showTime() {

        let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        const today = new Date()
        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getSeconds()
        let wd = weekDay[today.getDay()]

        myClock.innerHTML = hours+ ":"+ minutes+":"+seconds+"-" + wd

    setTimeout (showTime,1000)
    }

showTime()

