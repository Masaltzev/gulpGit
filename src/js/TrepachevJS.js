let tds = $('.myTable td')
// console.log(tds);
for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function () {
        tds[i].innerHTML = i + 1;
    });
}
let tbl = document.querySelector('.myTable2');
let tds2 = tbl.querySelectorAll('td');
for (let i = 0; i < tds2.length; i++) {
    tds2[i].addEventListener("click", function () {
        if (this.classList.contains('tds')) {
            this.classList.remove('tds');
        } else {
            this.classList.add('tds');
        }

    })

}


let turnir = document.querySelector('#turnir');
let table = document.createElement('table');
turnir.append(table);
table.classList.add('createTable');
let com = ['Russia', 'Usa', 'China'];
let theader = ['п.п', 'Наименование'];
for (let r = 0; r <= com.length; r++) {
    if (r === 0) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let h = 0; h < (theader.length); h++) {
            let th = document.createElement('th');
            tr.appendChild(th);
            th.classList.add('createTh');
            th.innerHTML = theader[h];
        }
        for (let h = 0; h < (com.length); h++) {
            let th = document.createElement('th');
            tr.appendChild(th);
            th.classList.add('createTh');
            th.innerHTML = h + 1;
        }
    } else {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        for (let y = 0; y <= com.length + 1; y++) {
            let td = document.createElement("td");
            //let th = document.createElement('th');
            if (y === 1) {
                tr.appendChild(td);
                td.classList.add('createTd');
                td.innerHTML = com[r - 1];
            } else {
                tr.appendChild(td);
                td.classList.add('createTd');
                if (y === 0) {
                    td.innerHTML = r;
                } else {
                    if (r === y - 1 && y === r + 1) {
                        td.classList.add('fillTd');
                        //td.innerHTML = '@';
                    } //else
                        // td.innerHTML = y - 1;

                }
            }

        }
    }
}





