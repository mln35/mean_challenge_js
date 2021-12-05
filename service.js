accounts_value_key = "my-account-key-number-";
accounts_count_key = "all-accounts-count-key";
accounts = [];
count = 0;

trans = [];
t_count = 0;
t_key = "my-transaction-key-number-";
count_key = "all-transactions-count-key";



getValue = function (element) {
  let val = document.querySelector(element).value;
  if (val) return val;
  return "";
};
loadTransactions = () => {
  t_count = localStorage.getItem(count_key);
  if (t_count) {
    for (i = 0; i < t_count; i++) {
      let transaction = localStorage.getItem(t_key + i);
      trans.push(JSON.parse(transaction));
    }

  } else {
    t_count = 0;
  }
};


loadAccounts = () => {
  count = localStorage.getItem(accounts_count_key);
  if(count)
  {
      accounts = [];
      for(i=0; i<count; i++){
          accounts.push(JSON.parse(localStorage.getItem(accounts_value_key+i)));
      }
  }
  else {
      count = 0;
  }
}

loadAccounts();
