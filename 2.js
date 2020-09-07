function sittingArrangement(person, column) {
    var array = [];
    var array2 = [];
    var a;
    var totalPerson = 0;

    if (column === '' || column <= 0) {
        return 'Invalid number';
    } else {
        for (a in person) {
            totalPerson = a;
        }

        for (var c = 0; c <= totalPerson; c++) {
            array2 = [];
            for (var b = 0; b < column; b++) {
                if (person[c + b] == undefined) {
                    person[c + b] = 'Kursi Kosong';
                }
                array2.push(person[c + b])
            }
            c = c + column - 1;
            array.push(array2);
        }
    }

    return array;
}

console.log(sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4));
