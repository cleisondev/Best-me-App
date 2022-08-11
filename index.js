const questions = [
    "O que aprendi hoje?",
    "O que me deixou frustrou? O que eu poderia fazer pra melhorar?",
    "O que me deixou feliz hoje",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    return process.stdout.write('\n' +  questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }  
})

process.on('exit', () => {
    console.log(`
    Bacana Cleison!

    O que você aprendeu hoje foi:
    > ${answers[0]}

    "O que me deixou frustrou? O que eu poderia fazer pra melhorar?"
    > ${answers[1]}
    
    "O que te deixou feliz hoje:
    > ${answers[2]}

    Voce ajudou:
    > ${answers[3]}

    Volte amanhã para novas reflexões
  `)
})