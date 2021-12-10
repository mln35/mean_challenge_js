
t_key = "my-transaction-key-number-";
count_key = "all-transactions-count-key";

exports.loadTransactions = () => {
  let nb = localStorage.getItem(count_key) || 0;
  let tmpList = [];
    for (i = 0; i < nb; i++) {
      let transaction = localStorage.getItem(t_key + i);
      tmpList.push(JSON.parse(transaction));
    }
    return {count:nb,list:tmpList}
};


exports.saveLog = (
    _date,
    _code_deb,
    _code_cred,
    _label_deb,
    _label_cred,
    _amount_debit_debit,
    _amount_debit_credit,
    _amount_credit_debit,
    _amount_credit_credit,
    _object
  ) => {

    let t_count = localStorage.getItem(count_key) || 0;


    source = {
      date: _date,
      code_debit: _code_deb,
      label_debit: _label_deb,
      amount_debit_debit: _amount_debit_debit,
      amount_debit_credit: _amount_debit_credit,
      object: _object,
    };
    target = {
      date: _date,
      code_credit: _code_cred,
      label_credit: _label_cred,
      amount_credit_debit: _amount_credit_debit,
      amount_credit_credit: _amount_credit_credit,
      object: _object,
    };
    
    localStorage.setItem(t_key + t_count++, JSON.stringify(source));
    localStorage.setItem(t_key + t_count++, JSON.stringify(target));
    localStorage.setItem(count_key, t_count);
  };

exports.clearTransactions = () => {

  let count = localStorage.getItem(count_key);
    for (let i = 0; i < count; i++) {
        localStorage.removeItem(t_key+i);
    }
    localStorage.removeItem(count_key);
};
