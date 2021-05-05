/**
 * testlist.js
 * Application Handler Control
 * Copyright (c) 2021 Yuya.Eguchi
*/

"use strict"

let tableItem = new DocTable(1);

//列追加ボタン
let addButton = document.getElementById("addRow");
addButton.addEventListener("click", ()=>{
    tableItem.addRow();
});

//列削除ボタン
let removeButton = document.getElementById("removeRow");
removeButton.addEventListener("click", ()=>{
    tableItem.removeRow();
});


//importボタン
let csvImport = document.getElementById("importcsv");
csvImport.addEventListener("change", (e)=>{
    console.log(e.target.files);

    const reader = new FileReader();
    reader.onload = ()=>{
        tableItem.importCSV(reader.result);
    };

    reader.readAsText(e.target.files[0])

});

//exportボタン
let csvExport = document.getElementById("exportcsv");
csvExport.addEventListener("click", ()=>{
    let filename = document.getElementById("exportfilename");
    tableItem.exportCSV(filename.value);

});