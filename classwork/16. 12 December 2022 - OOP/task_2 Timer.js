function Timer() {


    let startTime
    let stopTime
    let isRunning = false
    
    this.duration = 0

    this.start = () => {
        startTime = new Date()
    }

    this.stop = () => {
        stopTime = new Date()
        this.duration = (stopTime.getTime() - startTime.getTime()) / 1000
    }

    this.reset = () => {
        stopTime = null
        startTime = null
        this.duration = null
    }


}
 
let timer = new Timer()


timer.start()

timer.stop()

console.log(timer.duration) 