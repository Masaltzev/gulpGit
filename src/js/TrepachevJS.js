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


class addTable {
    constructor() {
        // $('#turnir').html('<p>hello</p>');
        // $('#turnir').append('size');
        // $('#turnir').html('<table class="createTable"><tr><td>привет</td></tr></table>')
        let table = document.createElement('table');
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        $('#turnir').append(table);
        $('table').addClass('createTable');

    }

    gettable(){
        $('table').append(tr);
        $('tr').append(td);
    }

    // echo(word) {
    //     $('#turnir').html('<div>' + word + '</div>')
    // }
}

let p = new addTable();
// p.echo('privet');

// $("#turnir").addClass('tTurnir');
