
accounts_value_key = "my-account-key-number-";
accounts_count_key = "all-accounts-count-key";

exports.saveAccount = (_code,_label,_class) => {

    let count = localStorage.getItem(accounts_count_key) || 0;
    localStorage.setItem(accounts_value_key+count++,JSON.stringify({code:_code,label:_label,class:_class}))
    localStorage.setItem(accounts_count_key,count);
    
}

exports.loadAccounts = () => {
    let nb = localStorage.getItem(accounts_count_key);
    let tmpList = [];
    console.log('nb ',nb);
    if(nb)
    {
        for(i=0; i<nb; i++){
            console.log(JSON.parse(localStorage.getItem(accounts_value_key+i)));
            tmpList.push(JSON.parse(localStorage.getItem(accounts_value_key+i)));
        }
    }
    else {
        nb = 0;
    }
    return {count:nb, list:tmpList};
  }

exports.clearAccounts = () => {
    let count = localStorage.getItem(accounts_count_key);
    for (let i = 0; i < count; i++) {
        localStorage.removeItem(accounts_value_key+i);
    }
    localStorage.removeItem(accounts_count_key);
}
