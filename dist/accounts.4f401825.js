getValue = function(element) {
    console.debug();
    val = document.querySelector(element).value;
    if (val) return val;
    return "";
};
render = ()=>{
    table = document.querySelector('#table');
    thead = document.querySelector("thead");
    tbody = document.querySelector("#tbody");
    btn = document.querySelector(".btn.clear");
    empty = document.querySelector('#empty');
    if (accounts && accounts.length > 0) {
        thead.style.display = "table-header-group";
        btn.style.display = "block";
        empty.style.display = "none";
        let num = 0;
        tbody.innerHTML = '';
        for (l of accounts){
            let tr = document.createElement('tr');
            code_td = document.createElement('td');
            label_td = document.createElement('td');
            class_td = document.createElement('td');
            code_td.innerHTML = l.code;
            label_td.innerHTML = l.label;
            class_td.innerHTML = l.class;
            tr.appendChild(code_td);
            tr.appendChild(label_td);
            tr.appendChild(class_td);
            if (num % 2 === 0) tr.classList.add("even-row");
            num++;
            tbody.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        tbody.innerHTML = '';
        empty.style.display = "block";
        thead.style.display = "none";
        btn.style.display = "none";
    }
};
// fs = require('fs');
add = ()=>{
    console.log('add');
    // table = document.querySelector('.table');
    let _code = getValue('.id-acount');
    let _label = getValue('.account-name');
    let _class = getValue('.class');
    console.log('code: ', _code, 'label: ', _label, 'class: ', _class);
    addAccount(_code, _label, _class);
    render(accounts);
};
addAccount = (_code, _label, _class)=>{
    accounts.push({
        code: _code,
        label: _label,
        class: _class
    });
    localStorage.setItem(accounts_value_key + count++, JSON.stringify({
        code: _code,
        label: _label,
        class: _class
    }));
    localStorage.setItem(accounts_count_key, count);
    console.table(accounts);
};
getAllFromLocalStorage = ()=>{
    count = localStorage.getItem(accounts_count_key);
    if (count) {
        for(i = 0; i < count; i++)accounts.push(JSON.parse(localStorage.getItem(accounts_value_key + i)));
        console.log(count);
        console.table(accounts);
    } else count = 0;
};
clearAll = ()=>{
    count = 0;
    accounts = [];
    localStorage.clear();
    render();
};
// load =(url) => {
//     const contentDiv = document.querySelector(".content");
//     fetch('./logs.html').then((data) => {
//         console.log(data)
//         contentDiv.innerHTML = JSON.stringify(data);
//     });
//     // contentDiv.innerHTML = await fetchHtmlAsText("home.html");
// }
getAllFromLocalStorage();
render();

//# sourceMappingURL=accounts.4f401825.js.map
