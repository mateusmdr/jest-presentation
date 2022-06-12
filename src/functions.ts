/**
 * 
 * @param n Número inteiro
 * @returns Fatorial de n
 */
export const fatorial = (n: number) => {
    return n <= 0 ? 1 : n * fatorial(n-1);
};

/**
 * 
 * @param angulo Valor (em graus) do ângulo a ser convertido
 * @returns Ângulo em radianos
 */
export const grausParaRadianos = (angulo: number) => {
    return (angulo * Math.PI / 180);
}

/**
 * 
 * @param x Valor do ângulo
 * @param n Termo do polinômio
 * @returns N-ésimo termo do polinômio de taylor da
 *  função cos(x) em torno do ponto x = 0
 */
 export const taylorCosseno = (x: number, n: number) => {
    return (-1)**(n) * x**(2*n) / fatorial(2*n);
}

/**
 * 
 * @param angulo Ângulo considerado no cálculo
 * @param graus Verdadeiro se ângulo for fornecido em graus
 * @param erro Taxa de erro
 */
export const cos = (angulo: number, graus: boolean = false, erro: number = 10**(-4)) : number => {
    if(erro <= 0) throw new RangeError("A taxa de erro deve ser positiva");

    const rad = graus ? grausParaRadianos(angulo) : angulo;

    let soma: number = 0;
    let termo: number;
    let n: number = 0;

    do {
        termo = taylorCosseno(rad,n); 
        soma += termo;

        n++;
    }while(Math.abs(termo) >= erro)
    
    return soma;
}