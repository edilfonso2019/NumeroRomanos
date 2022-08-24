function limpiar() {
    document.getElementById ('miprograma').reset();
}
function calcular(){
    var num = parseInt(document.getElementById('valor1').value);
    var u,d,c,m,s;
    u=num %10;
    num=num/10;
    num=parseInt(num);

    d=num %10;
    num=num/10;
    num=parseInt(num)

    c=num %10;
    num=num/10;
    num=parseInt(num)

    m=num %10;
    
    switch(u){
        case 1:
            document.write('I');break;
        case 2: 
            document.write('II');break;
        case 3:
            document.write('III');break;
        case 4:
            document.write('IV');break;
        case 5:
            document.write('V');break;
        case 6: 
            document.write('VI');break;
        case 7:
            document.write('VII');break;
        case 8:
            document.write('VIII');break;
        case 9:
            document.write('IX');break;
        case 10: 
            document.write('X');break;
    }
}
