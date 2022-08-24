

function convertirEnteroARomano(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        return null;
    }

    const ROMANOS = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
    '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'];

    let digitos = String(numero).split('');
    let romano = '';
    let i = 3;

    while (i--) {
        romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
    }

    return Array(+digitos.join('') + 1).join('M') + romano;
}


console.log(convertirEnteroARomano(1));  // I
console.log(convertirEnteroARomano(2));  // II
console.log(convertirEnteroARomano(3));  // III
console.log(convertirEnteroARomano(4));  // IV
console.log(convertirEnteroARomano(5));  // V
console.log(convertirEnteroARomano(6));  // VI
console.log(convertirEnteroARomano(7));  // VI
console.log(convertirEnteroARomano(8));  // VIII
console.log(convertirEnteroARomano(9));  // IX
console.log(convertirEnteroARomano(10));  // X

