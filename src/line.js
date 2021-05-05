/**
 * line.js
 * Add and Remove Table Class
 * Copyright (c) 2021 Yuya.Eguchi
*/

class DocTable{
    constructor(pipelineNo){
        this.table = document.getElementById("list_parent");
        this.pipelineNo = pipelineNo;
        };

    //細かな中身追加
    appendCell(inputType, IDName, contents) {
        let colElement = document.createElement("td");
        colElement.id = `table_${IDName}_${this.table.rows.length}`;
        let cellElement;
        if(inputType === ""){
            cellElement = document.createElement("span");
        }
        else{
            cellElement = document.createElement("input");
            cellElement.type = inputType;
        }
        cellElement.id = `cell_${IDName}_${this.table.rows.length}`;
        cellElement.value = contents;
        colElement.appendChild(cellElement);
        return colElement;
    }

    //列の追加
    addRow(rowNo) {
        //1列分のデータ追加
        let rowElement = this.table.insertRow(this.table.rows.length);
        rowElement.id = `row_${this.table.rows.length}`;
        this.table.appendChild(rowElement);

        
        //各行追加
        rowElement.appendChild(this.appendCell("checkbox", "check", ""));
        rowElement.appendChild(this.appendCell("", "pipe", `${this.pipelineNo}.${this.table.rows.length}`));
        rowElement.appendChild(this.appendCell("text", "primary", ""));
        rowElement.appendChild(this.appendCell("text", "secondary", ""));
        rowElement.appendChild(this.appendCell("text", "input", ""));
        rowElement.appendChild(this.appendCell("text", "expectation", ""));
        rowElement.appendChild(this.appendCell("button", "result", "成功"));

        this.arrange();
    }

    //チェックボックスにチェックが入っている列一覧を取得
    getCheckedRows(){
        let checkedList = new Array();
        for(let i = 1; i <= this.table.childNodes.length; ++i){
            let rowCheckboxElement = document.getElementById(`cell_check_${i}`);
            //console.log(rowCheckboxElement);
            if(rowCheckboxElement.checked){
                checkedList.push(i);

            }
        }

        return checkedList;
    }

    //列削除
    removeRow(){
        //削除対象のリスト取得
        let removeList = this.getCheckedRows();

        for(let removeID of removeList){
            let rowElement = document.getElementById(`row_${removeID}`);
            console.log(removeID);
            console.log(rowElement.firstChild);
            while(rowElement.firstChild){
                let tdElement = rowElement.firstChild;
                tdElement.removeChild(tdElement.firstChild);
                rowElement.removeChild(tdElement);
            }
            this.table.removeChild(rowElement);
        }

        this.arrange();
    }

    //importした内容を表示
    importCSV(importText){
        console.log(importText);
    }

    exportCSV(filename){
        if(filename.match('/*.csv/', "g") == null){
            //正しくない場合は最後に.csvを追加
            filename += ".csv";
        }

        //csv書き出し
        let exportFile = this.tableToText();

        let blob = new Blob(exportFile, {"type" : "text/plain"});
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }

    //Tableの形からCSV書き出し用テキストに
    tableToText(){
        let exportList = new Array();
        exportList.push("No., 大項目, 小項目, 入力, 期待値\n");
        for(let i = 0; i < this.table.childNodes.length; ++i){
            let exportText = "";
            let trElement = this.table.childNodes[i];
            exportText += trElement.childNodes[1].textContent + ", ";
            exportText += trElement.childNodes[2].firstChild.value + ", ";
            exportText += trElement.childNodes[3].firstChild.value + ", ";
            exportText += trElement.childNodes[4].firstChild.value + ", ";
            exportText += trElement.childNodes[5].firstChild.value + "\n";
            exportList.push(exportText);
        }

        return exportList;
    }

    copyRow(){

    }

    pasteRow(){

    }

    //追加・削除された際にIDを整列させる
    arrange(){
        for(let ID = 0; ID < this.table.childNodes.length; ++ID){
            //子要素のID変更
            let trElement = this.table.childNodes[ID];

            if(trElement.id === "title"){
                continue;
            }
            trElement.id = `row_${ID+1}`;


            //checkbox
            trElement.childNodes[0].firstChild.id = `cell_check_${ID+1}`;
            trElement.childNodes[0].id = `table_check_${ID+1}`;
            //pipelineNo
            trElement.childNodes[1].firstChild.id = `cell_pipe_${ID+1}`;
            trElement.childNodes[1].id = `table_pipe_${ID+1}`;
            trElement.childNodes[1].textContent = `${this.pipelineNo}.${ID+1}`;
            //大項目
            trElement.childNodes[2].firstChild.id = `cell_primary_${ID+1}`;
            trElement.childNodes[2].id = `table_primary_${ID+1}`;
            //小項目
            trElement.childNodes[3].firstChild.id = `cell_secondary_${ID+1}`;
            trElement.childNodes[3].id = `table_secondary_${ID+1}`;
            //入力
            trElement.childNodes[4].firstChild.id = `cell_input_${ID+1}`;
            trElement.childNodes[4].id = `table_input_${ID+1}`;
            //期待値
            trElement.childNodes[5].firstChild.id = `cell_expectation_${ID+1}`;
            trElement.childNodes[5].id = `table_expectation_${ID+1}`;
            //結果
            trElement.childNodes[6].firstChild.id = `cell_result_${ID+1}`;
            trElement.childNodes[6].id = `table_result_${ID+1}`;
        }
    }
}