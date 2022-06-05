import { grausParaRadianos } from "../src/functions"

test("0 graus deveria ser igual a 0 radianos", () => {
    expect(grausParaRadianos(0)).toBe(0)
})

test("180 graus deveria ser igual a pi radianos", () => {
    expect(grausParaRadianos(180)).toBe(Math.PI)
})

test("270 graus deveria ser igual a 3pi/2 radianos", () => {
    expect(grausParaRadianos(270)).toBe(3*Math.PI/2)
})