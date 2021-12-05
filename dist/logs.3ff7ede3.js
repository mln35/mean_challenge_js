accounts_value_key = "my-account-key-number-"; // transaction key
accounts_count_key = "all-accounts-count-key";
accounts = [];
count = 0;
trans = [];
t_count = 0;
t_key = "my-transaction-key-number-"; // transaction key
count_key = "all-transactions-count-key";
getValue = function(element) {
    console.debug();
    val = document.querySelector(element).value;
    if (val) return val;
    return "";
};
loadTransactions = ()=>{
    console.log("load");
    t_count = localStorage.getItem(count_key);
    if (t_count) {
        for(i = 0; i < t_count; i++){
            let transaction = localStorage.getItem(t_key + i);
            trans.push(JSON.parse(transaction));
        }
        console.log(t_count);
        console.table(trans);
    } else t_count = 0;
};

//# sourceMappingURL=logs.3ff7ede3.js.map
