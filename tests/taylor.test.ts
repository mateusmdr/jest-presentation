import { taylorCosseno } from "../src/functions"

// Lista de valores diversos
const angulos: Array<number> = [0,5,-2,300,8,0.75,-2.7,Math.PI,Math.sqrt(2)]

test("O primeiro termo (0) do polinômio deveria ser 1, para qualquer ângulo", () => {
    angulos.forEach(angulo => {
        expect(taylorCosseno(angulo, 0)).toBe(1)
    })
})

test("Todos os termos após o primeiro devem ser 0, caso o ângulo seja 0", () => {
    for(let c = 1; c<100;c++) {
        expect(Math.abs(taylorCosseno(0,c))).toBe(0)
    }
})

test("O segundo termo (1) do polinômio deveria ser -1 * ângulo²/2", () => {
    angulos.forEach(angulo => {
        expect(taylorCosseno(angulo,1)).toBe(-1 * angulo**2/2)
    })
})

test("O terceiro termo (2) do polinômio deveria ser ângulo**4/(4*3*2*1)", () => {
    angulos.forEach(angulo => {
        expect(taylorCosseno(angulo,2)).toBe(angulo**4/(4*3*2*1))
    })
})