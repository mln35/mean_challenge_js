getElementValue = function(element) {
    console.debug();
    val = document.querySelector(element).value;
    if (val) return val;
    return "";
};
let _code = getElementValue('.id-acount');
let _label = getElementValue('.account-name');
let _class = getElementValue('.class');
// fs = require('fs');
addAccount = (_code, _label, _class)=>{
    console.log('add');
    // table = document.querySelector('.table');
    console.log('code: ', _code, 'label: ', _label, 'class: ', _class);
    saveAccount(_code, _label, _class);
    renderAccounts(accounts);
};
loadAccounts();
renderAccounts();

//# sourceMappingURL=accounts.4f401825.js.map
