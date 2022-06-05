import {cos} from '../src/functions'

test("Cosseno de 0 rad deveria ser 1", () => {
    expect(cos(0)).toBe(1)
})

test("Cosseno de 0 graus deveria ser 1", () => {
    expect(cos(0, true)).toBe(1)
})

test("Cosseno de 60 graus deveria ser próximo de 0.5", () => {
    expect(cos(60, true)).toBeCloseTo(0.5, 4)
})

test("Cosseno de pi rad deveria ser próximo de -1", () => {
    expect(cos(Math.PI)).toBeCloseTo(-1, 4)
})