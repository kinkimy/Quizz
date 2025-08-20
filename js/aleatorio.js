const nomes = ["Leonardo", "Isabella", "Marco", "Valentina", "Enzo", "Sofia", "Lucca"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)