import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoGabreel = new Mago("Dova'Sa", 4, 'gelo', 9, 10)
const magoDidi = new Mago('Symas', 8, 'fogo', 7, 10)
const arqueiroLuiz = new Arqueiro('Maximus', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiroFrutas = new Guerreiro('Bretz', 8)

//arqueiroLuiz.#level = 15

const personagens = [magoGabreel, magoDidi, arqueiroLuiz, arqueiroMagoChico, guerreiroFrutas]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(arqueiroLuiz, magoGabreel))

console.log(arqueiroLuiz)
