class Student{
    constructor(name, course, scores, pScores){
        this.name = name
        this.course = course
        this.scores = scores
        this.pScores = pScores
    }
    getName(){
        return this.name
    }

    getCourse(){
        return this.course
    }

    addScores(){
       return this.scores.reduce((preValue, currValue) => (preValue + currValue))
    }
    addPossScores(){
        return this.pScores.reduce((preValue, currValue) => (preValue + currValue)) 
    }

    convertScores(){
        var myScore = (this.addScores()/this.addPossScores())*100
        if (myScore > 90) return "A"
        if (myScore > 80) return "B"
        if (myScore > 70) return "C"
        if (myScore > 60) return "D"
        else return "F"
    }
}