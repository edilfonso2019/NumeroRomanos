<<<<<<< HEAD

=======
>>>>>>> 98f6dc2dd7ddbddab1a34d152055be1d872920e3

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


console.log(convertirEnteroARomano(1));  // XI
console.log(convertirEnteroARomano(8));  // XI
console.log(convertirEnteroARomano(23));  // XXIII
console.log(convertirEnteroARomano(8));  // VIII
console.log(convertirEnteroARomano(8));  // VIII

