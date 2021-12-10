renderAccount = ()=>{
    table = document.querySelector('#table');
    thead = document.querySelector("thead");
    tbody = document.querySelector("#tbody");
    btn = document.querySelector(".btn.clear");
    empty = document.querySelector('#empty');
    if (accounts && accounts.length > 0) {
        thead.style.display = "table-header-group";
        btn.style.display = "block";
        empty.style.display = "none";
        let num = 0;
        tbody.innerHTML = '';
        for (l of accounts){
            let tr = document.createElement('tr');
            code_td = document.createElement('td');
            label_td = document.createElement('td');
            class_td = document.createElement('td');
            code_td.innerHTML = l.code;
            label_td.innerHTML = l.label;
            class_td.innerHTML = l.class;
            tr.appendChild(code_td);
            tr.appendChild(label_td);
            tr.appendChild(class_td);
            if (num % 2 === 0) tr.classList.add("even-row");
            num++;
            tbody.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        tbody.innerHTML = '';
        empty.style.display = "block";
        thead.style.display = "none";
        btn.style.display = "none";
    }
};

//# sourceMappingURL=accounts.60ac09ea.js.map
