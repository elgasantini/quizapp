import { trocarTema, verificarTema } from "./helpers/tema-helpers.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click",()=>{
    trocarTema(body, botaoTema)
})

verificarTema(body, botaoTema)

const botoesassunto = document.querySelectorAll(".assuntos button")
botoesassunto.forEach(botao =>{
    botao.addEventListener("click", selecionarAssunto)
}
)
function selecionarAssunto(evento){
    const classBotao = evento.target.className
    const assunto = document.querySelector(`.${classBotao} span`).innerText
    localStorage.setItem("assunto",assunto)
    window.location.href = "./pages/quiz/quiz.html"
}