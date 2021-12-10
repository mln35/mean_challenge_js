const { getElementValue } = require("../shared/shared");
import logStorage from "../storage/log.storage";

logs = [];

let table = document.querySelector("#table");
let thead = document.querySelector("thead");
let tbody = document.querySelector("#tbody");
let empty = document.querySelector("#empty");

let btn = document.querySelector(".btn.clear");

renderTransactions = () => {
  initView();
  if (logs.length > 0) {
    thead.style.display = "table-header-group";
    btn.style.display = "block";
    empty.style.display = "none";
    let num = 0;
    tbody.innerHTML = "";
    for (l of logs) {
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
    thead.style.display = "none";
    btn.style.display = "none";
    tbody.innerHTML = "";
    empty.style.display = "block";
  }
};

addLog = () => {
  date = getElementValue("#date");
  code_debit = getElementValue("#code_debit");
  code_credit = getElementValue("#code_credit");
  label_debit = getElementValue("#label_debit");
  label_credit = getElementValue("#label_credit");
  amount_debit_debit = getElementValue("#amount_debit_debit");
  amount_debit_credit = getElementValue("#amount_debit_credit");
  amount_credit_debit = getElementValue("#amount_credit_debit");
  amount_credit_credit = getElementValue("#amount_credit_credit");
  object = getElementValue("#object");

  logStorage.saveLog(
    date,
    code_debit,
    code_credit,
    label_debit,
    label_credit,
    amount_debit_debit,
    amount_debit_credit,
    amount_credit_debit,
    amount_credit_credit,
    object
  );
  renderTransactions();
};

clearJournal = () => {
  logStorage.clearTransactions();
  renderTransactions();
};

initView = () => {
  let l = logStorage.loadTransactions();
  logs = l.list;
};
initView();
renderTransactions();
