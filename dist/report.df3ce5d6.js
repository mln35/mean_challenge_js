console.log(trans);
renderReport = ()=>{
    let table = document.querySelector("#table");
    let thead = document.querySelector("thead");
    let tbody = document.querySelector("#tbody");
    empty = document.querySelector("#empty");
    if (trans && trans.length > 0) {
        thead.style.display = "table-header-group";
        let num = 0;
        tbody.innerHTML = "";
        for(let i = 0; i < trans.length; i += 2){
            const l_debit = trans[i];
            const l_credit = trans[i + 1];
            tr = document.createElement("tr");
            date_td = document.createElement("td");
            label_td = document.createElement("td");
            debit_td = document.createElement("td");
            credit_td = document.createElement("td");
            date_td.innerHTML = l_debit.date;
            label_td.innerHTML = l_debit.object;
            if (l_debit.amount_debit_debit) {
                debit_td.innerHTML = l_debit.amount_debit_debit;
                credit_td.innerHTML = l_credit.amount_credit_credit;
                tr.classList.add("even-row");
            } else {
                debit_td.innerHTML = l_credit.amount_credit_debit;
                credit_td.innerHTML = l_debit.amount_debit_credit;
            }
            tr.appendChild(date_td);
            tr.appendChild(label_td);
            tr.appendChild(debit_td);
            tr.appendChild(credit_td);
            num++;
            tbody.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        thead.style.display = "none";
        tbody.innerHTML = "";
        empty = document.querySelector("#empty");
        empty.innerHTML = "No log saved yet";
    }
};
loadTransactions();
renderReport();

//# sourceMappingURL=report.df3ce5d6.js.map
