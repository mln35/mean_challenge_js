val = function(raw) {
    if (raw) return raw;
    else return "";
};
addTransaction = function(_date, _code_deb, _code_cred, _label_deb, _label_cred, _amount_debit_debit, _amount_debit_credit, _amount_credit_debit, _amount_credit_credit, _object) {
    console.log("addtrans()");
    t1 = {
        date: _date,
        code_debit: _code_deb,
        label_debit: _label_deb,
        amount_debit_debit: _amount_debit_debit,
        amount_debit_credit: _amount_debit_credit,
        object: _object
    };
    t2 = {
        date: _date,
        code_credit: _code_cred,
        label_credit: _label_cred,
        amount_credit_debit: _amount_credit_debit,
        amount_credit_credit: _amount_credit_credit,
        object: _object
    };
    trans.push(t1);
    trans.push(t2);
    localStorage.setItem(t_key + t_count++, JSON.stringify(t1));
    localStorage.setItem(t_key + t_count++, JSON.stringify(t2));
    localStorage.setItem(count_key, t_count);
    console.table(trans);
};
tAdd = ()=>{
    console.log("tAdd()");
    date = getValue("#date");
    code_debit = getValue("#code_debit");
    code_credit = getValue("#code_credit");
    label_debit = getValue("#label_debit");
    label_credit = getValue("#label_credit");
    // class_debit = getValue('#class_debit');
    // class_credit = getValue('#class_credit');
    amount_debit_debit = getValue("#amount_debit_debit");
    amount_debit_credit = getValue("#amount_debit_credit");
    amount_credit_debit = getValue("#amount_credit_debit");
    amount_credit_credit = getValue("#amount_credit_credit");
    object = getValue("#object");
    addTransaction(date, code_debit, code_credit, label_debit, label_credit, amount_debit_debit, amount_debit_credit, amount_credit_debit, amount_credit_credit, object);
    renderTransactions();
};
renderTransactions = ()=>{
    let table = document.querySelector("#table");
    let thead = document.querySelector("thead");
    let tbody = document.querySelector("#tbody");
    empty = document.querySelector("#empty");
    btn = document.querySelector(".btn.clear");
    if (trans && trans.length > 0) {
        thead.style.display = "table-header-group";
        btn.style.display = "block";
        empty.style.display = "none";
        let num = 0;
        tbody.innerHTML = "";
        for (l of trans){
            console.log('1', l.amount_debit_debit);
            console.log('2', l.amount_debit_credit);
            console.log('3', l.amount_credit_debit);
            console.log('4', l.amount_credit_credit);
            tr = document.createElement("tr");
            date_td = document.createElement("td");
            code_deb_td = document.createElement("td");
            code_cred_td = document.createElement("td");
            object_td = document.createElement("td");
            amount_debit_td = document.createElement("td");
            amount_credit_td = document.createElement("td");
            date_td.innerHTML = val(l.date);
            if (num % 2 === 0) {
                code_deb_td.innerHTML = val(l.code_debit);
                object_td.innerHTML = val(l.object);
                amount_debit_td.innerHTML = val(l.amount_debit_debit);
                amount_credit_td.innerHTML = val(l.amount_debit_credit);
                tr.classList.add("even-row");
            } else {
                code_cred_td.innerHTML = val(l.code_credit);
                object_td.innerHTML = val(l.object);
                amount_debit_td.innerHTML = val(l.amount_credit_debit);
                amount_credit_td.innerHTML = val(l.amount_credit_credit);
            }
            tr.appendChild(date_td);
            tr.appendChild(code_deb_td);
            tr.appendChild(code_cred_td);
            tr.appendChild(object_td);
            tr.appendChild(amount_debit_td);
            tr.appendChild(amount_credit_td);
            num++;
            tbody.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        thead.style.display = "none";
        btn.style.display = "none";
        tbody.innerHTML = "";
        empty.style.display = "block";
    }
};
clearAll = ()=>{
    localStorage.clear();
    trans = [];
    t_count = 0;
    renderTransactions();
};
loadTransactions();
renderTransactions();

//# sourceMappingURL=logs.f30d9678.js.map
