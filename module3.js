function cekganjilgenap(number) {
    if (number % 2 == 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

module.exports = cekganjilgenap;