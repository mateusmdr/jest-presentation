import { fatorial } from "../src/functions"

test("Fatorial de 0 deveria ser igual a 1",() => {
    expect(fatorial(0)).toBe(1)
})

test("Fatorial de 1 deveria ser igual a 1",() => {
    expect(fatorial(1)).toBe(1)
})

test("Fatorial de 2 deveria ser igual a 2",() => {
    expect(fatorial(2)).toBe(2)
})

test("Fatorial de 3 deveria ser igual a 6",() => {
    expect(fatorial(3)).toBe(6)
})

test("Fatorial de 5 deveria ser igual a 5 * 4 * 3 * 2 * 1",() => {
    expect(fatorial(5)).toBe(5 * 4 * 3 * 2 * 1)
})