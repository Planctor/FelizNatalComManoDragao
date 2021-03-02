class Evento {
    get agora() {
        return new Date().getTime()
    };
    get diaDoEvento() {
        return new Date(this.tempo).getTime()
    };
    set diaDoEvento(dia) {
        this.tempo = dia
    };
    get diferenca() {
        return this.diaDoEvento - this.agora
    };
    mostrarTempo() {
        const mes = this.diferenca / (30 * 24 * 60 * 60 * 1000)
        const dia = this.diferenca / (24 * 60 * 60 * 1000)
        const horas = this.diferenca / (60 * 60 * 1000)
        const minutos = this.diferenca / (60 * 1000)
        const segundos = this.diferenca / 1000

        return {
            mes,
            dia,
            horas,
            minutos,
            segundos
        }
    }
}

const Natal = new Evento()
Natal.diaDoEvento = 'Dec 25 2021 00:00:00 GMT-0300'
console.log(Math.floor(Natal.mostrarTempo().mes))


const spanHoras = document.querySelector('[data-natal="horas"]')
const spanDias = document.querySelector('[data-natal="dias"]')
const spanMeses = document.querySelector('[data-natal="meses"]')

setInterval(() => {
    let mes = Math.floor(Natal.mostrarTempo().mes)
    let dia = Math.floor(Natal.mostrarTempo().dia)
    let horas = Math.floor(Natal.mostrarTempo().horas)
    let minutos = Math.floor(Natal.mostrarTempo().minutos)
    let segundos = Math.floor(Natal.mostrarTempo().segundos)

    spanHoras.innerHTML = ` ${horas % 24}:${minutos % 60}:${segundos % 60}`
    spanDias.innerHTML = `${(dia % 30) + 1}`
    spanMeses.innerHTML = mes
})
