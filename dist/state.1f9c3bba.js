/*
console.log(trans);
renderReport = () => {
  let dateInf = getElementValue("#dateInf");
  let dateSup = getElementValue("#dateSup");
  
  console.log(dateInf);
  console.log(dateSup);
  let account = document.querySelector("#account");
  let thead = document.querySelector("thead");
  let tbody = document.querySelector("#tbody");
  empty = document.querySelector("#empty");
  let totalDebit = 0;
  let totalCredit = 0;
  let solde = 0;
  if (trans && trans.length > 0) {
    thead.style.display = "table-header-group";
    let num = 0;
    tbody.innerHTML = "";

    for (let i = 0; i < trans.length; i += 2) {
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
        
        totalDebit += +l_debit.amount_debit_debit;
        totalCredit += +l_credit.amount_credit_credit;
        console.log(":)", totalDebit);
        tr.classList.add("even-row");
      } else {
        debit_td.innerHTML = l_credit.amount_credit_debit;
        credit_td.innerHTML = l_debit.amount_debit_credit;

        // totalDebit += +l_debit.amount_credit_debit;
        // totalCredit += +l_credit.amount_debit_credit;
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
  document.querySelector("#totalDebit").innerHTML= totalDebit;
  document.querySelector("#totalCredit").innerHTML = totalCredit;
  document.querySelector("#solde").innerHTML = totalDebit - totalCredit;
};

getReport = function(){

}


loadTransactions();
renderReport();

*/ console.log(trans);
document.querySelector("table").style.display = "none";
renderReport = (start, end, label)=>{
    console.log('st', start);
    console.log(end);
    let account = document.querySelector("#account");
    let thead = document.querySelector("thead");
    let tbody = document.querySelector("#tbody");
    let empty = document.querySelector("#empty");
    let totalDebit = 0;
    let totalCredit = 0;
    let solde = 0;
    let relevant = trans.filter((el)=>Date(el.date) > start
    );
    console.table(relevant);
    if (trans && trans.length > 0) {
        thead.style.display = "table-header-group";
        // document.querySelector("#tr-total").style.display = "table-row"
        // document.querySelector("#tr-solde").style.display = "table-row"
        let num = 0;
        tbody.innerHTML = "";
        for(let i = 0; i < trans.length; i++){
            const rec = trans[i];
            let dateTrans = new Date(rec.date);
            console.log(label, rec.label_debit, rec.label_credit);
            if (dateTrans > start && dateTrans < end && (rec.label_debit === label || rec.label_credit === label)) {
                console.log('poi', dateTrans);
                tr = document.createElement("tr");
                date_td = document.createElement("td");
                label_td = document.createElement("td");
                debit_td = document.createElement("td");
                credit_td = document.createElement("td");
                date_td.innerHTML = rec.date;
                label_td.innerHTML = rec.object;
                if (rec.amount_debit_debit) {
                    debit_td.innerHTML = rec.amount_debit_debit;
                    totalDebit += +rec.amount_debit_debit;
                } else if (rec.amount_credit_debit) {
                    debit_td.innerHTML = rec.amount_credit_debit;
                    totalDebit += +rec.amount_credit_debit;
                }
                if (rec.amount_debit_credit) {
                    credit_td.innerHTML = rec.amount_debit_credit;
                    totalCredit += +rec.amount_debit_credit;
                } else if (rec.amount_credit_credit) {
                    credit_td.innerHTML = rec.amount_credit_credit;
                    totalCredit += +rec.amount_credit_credit;
                }
                if (num % 2 === 0) tr.classList.add("even-row");
                tr.appendChild(date_td);
                tr.appendChild(label_td);
                tr.appendChild(debit_td);
                tr.appendChild(credit_td);
                num++;
                tbody.appendChild(tr);
                document.querySelector("table").style.display = "table";
            }
        }
    /* for (let i = 0; i < trans.length; i += 2) {
      const l_debit = trans[i];
      const l_credit = trans[i + 1];
      let dateDeb = new Date(l_debit.date)
      let dateCred = new Date(l_credit.date);
      console.log('poi',dateDeb)
      console.log('poi',dateCred);
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

        totalDebit += +l_debit.amount_debit_debit;
        totalCredit += +l_credit.amount_credit_credit;
        console.log(":)", totalDebit);
        tr.classList.add("even-row");
      } else {
        debit_td.innerHTML = l_credit.amount_credit_debit;
        credit_td.innerHTML = l_debit.amount_debit_credit;

        // totalDebit += +l_debit.amount_credit_debit;
        // totalCredit += +l_credit.amount_debit_credit;
      }

      tr.appendChild(date_td);
      tr.appendChild(label_td);
      tr.appendChild(debit_td);
      tr.appendChild(credit_td);
      num++;
      tbody.appendChild(tr);
    } */ } else {
        // container = document.querySelector('.container');
        // thead.style.display = "none";
        document.querySelector("table").style.display = "none";
        // tbody.innerHTML = "";
        empty = document.querySelector("#empty");
        empty.innerHTML = "No log saved yet";
    }
    document.querySelector("#totalDebit").innerHTML = totalDebit;
    document.querySelector("#totalCredit").innerHTML = totalCredit;
    document.querySelector("#solde").innerHTML = totalDebit - totalCredit;
};
getReport = function() {
    console.log('get rep');
    let dateInf = new Date(getElementValue("#dateInf"));
    let dateSup = new Date(getElementValue("#dateSup"));
    let reportLabel = getElementValue("#reportLabel");
    console.log(dateInf);
    console.log(dateSup);
    if (dateInf && dateSup && dateInf < dateSup) {
        renderReport(dateInf, dateSup, reportLabel);
        console.log("ok");
    }
};
loadAccounts();
loadTransactions();
getReport();
let optionList = document.querySelector('#reportLabel').options;
accounts.forEach((a)=>optionList.add(new Option(a.label, a.label, false))
);

//# sourceMappingURL=state.1f9c3bba.js.map
