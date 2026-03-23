function formatarTelefone(input) {
    if (!input) return null;

    // Remove qualquer coisa que não seja número
    let telefone = input.replace(/\D/g, "");

    // Precisa ter pelo menos DDI (2) + DDD (2) + número (8 ou 9)
    if (telefone.length < 12 || telefone.length > 13) {
        return null;
    }

    const ddi = telefone.slice(0, 2);
    const ddd = telefone.slice(2, 4);
    let numero = telefone.slice(4);

    // Se tiver 9 dígitos e começar com 9, remove
    if (numero.length === 9 && numero.startsWith("9")) {
        numero = numero.slice(1);
    }

    const resultado = ddi + ddd + numero;

    // Validação final: precisa ter exatamente 12 dígitos
    if (resultado.length !== 12) {
        return null;
    }

    return resultado;
}

const numero = "+55 51 996267743"
const numeroFormatado = formatarTelefone(numero)

console.log(numeroFormatado)