const { getElementValue } = require("../shared/shared");
import logStorage, { clearTransactions } from "../storage/log.storage";
import account from "../storage/account.storage";

let logs = [];
let accounts = [];

init = () => {
  let tr = logStorage.loadTransactions();
  logs = tr.list;
  let ac = account.loadAccounts();
  accounts = ac.list;

  let optionList = document.querySelector("#reportLabel").options;

  accounts.forEach((a) => optionList.add(new Option(a.label, a.label, false)));
};
document.querySelector("table").style.display = "none";

renderReport = (start, end, label) => {
  let account = document.querySelector("#account");
  let thead = document.querySelector("thead");
  let tbody = document.querySelector("#tbody");
  let empty = document.querySelector("#empty");
  let totalDebit = 0;
  let totalCredit = 0;
  let solde = 0;
  let relevant = logs.filter((el) => Date(el.date) > start);
  console.table(relevant);

  if (logs.length > 0) {
    thead.style.display = "table-header-group";
    let num = 0;
    tbody.innerHTML = "";

    for (let i = 0; i < logs.length; i++) {
      const rec = logs[i];
      let dateTrans = new Date(rec.date);
      if (
        dateTrans > start &&
        dateTrans < end &&
        (rec.label_debit === label || rec.label_credit === label)
      ) {
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
  } else {
    document.querySelector("table").style.display = "none";
    empty = document.querySelector("#empty");
    empty.innerHTML = "No log saved yet";
  }
  document.querySelector("#totalDebit").innerHTML = totalDebit;
  document.querySelector("#totalCredit").innerHTML = totalCredit;
  document.querySelector("#solde").innerHTML = totalDebit - totalCredit;
};

getReport = function () {
  init();
  let dateInf = new Date(getElementValue("#dateInf"));
  let dateSup = new Date(getElementValue("#dateSup"));
  let reportLabel = getElementValue("#reportLabel");
  if (dateInf && dateSup && dateInf < dateSup) {
    renderReport(dateInf, dateSup, reportLabel);
  }
};

init();
