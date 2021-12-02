accounts = [];
count = 0;
trans = [];
t_counts = 0;
renderTransaction = (list)=>{
    table = document.querySelector('#table');
    if (list && list.length > 0) {
        tbody = document.querySelector('#tbody');
        let num = 0;
        table.innerHTML = '';
        for (l of list){
            let tr = document.createElement('tr');
            date_td = document.createElement('td');
            code_deb_td = document.createElement('td');
            code_cred_td = document.createElement('td');
            label_deb_td = document.createElement('td');
            label_cred_td = document.createElement('td');
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
            table.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        table.innerHTML = '';
        empty = document.querySelector('#empty');
        empty.innerHTML = 'No account saved yet';
    }
};
render = (list)=>{
    table = document.querySelector('#table');
    if (list && list.length > 0) {
        tbody = document.querySelector('#tbody');
        let num = 0;
        table.innerHTML = '';
        for (l of list){
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
            table.appendChild(tr);
        }
    } else {
        // container = document.querySelector('.container');
        table.innerHTML = '';
        empty = document.querySelector('#empty');
        empty.innerHTML = 'No account saved yet';
    }
};
// fs = require('fs');
add = ()=>{
    console.log('add');
    // table = document.querySelector('.table');
    let _code = document.querySelector('.id-acount').value;
    let _label = document.querySelector('.account-name').value;
    let _class = document.querySelector('.class').value;
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
    localStorage.setItem('count', ++count);
    localStorage.setItem('code ' + count, _code);
    localStorage.setItem('label ' + count, _label);
    localStorage.setItem('class ' + count, _class);
    console.table(accounts);
};
getAllFromLocalStorage = ()=>{
    count = localStorage.getItem('count');
    if (count) {
        for(i = 1; i <= count; i++){
            let cd = localStorage.getItem('code ' + i);
            let lb = localStorage.getItem('label ' + i);
            let cl = localStorage.getItem('class ' + i);
            accounts.push({
                code: cd,
                label: lb,
                class: cl
            });
        }
        console.log(count);
        console.table(accounts);
    } else count = 0;
};
clearAll = ()=>{
    count = localStorage.getItem('count');
    if (count) localStorage.clear();
    accounts = [];
    render(accounts);
};
// load =(url) => {
//     const contentDiv = document.querySelector(".content");
//     fetch('./logs.html').then((data) => {
//         console.log(data)
//         contentDiv.innerHTML = JSON.stringify(data);
//     });
//     // contentDiv.innerHTML = await fetchHtmlAsText("home.html");
// }
addTransaction = ()=>{
};
getAllFromLocalStorage();
render(accounts);

//# sourceMappingURL=index.c5d2dfee.js.map
