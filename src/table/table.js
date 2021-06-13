import {reactive} from "vue";
import moment from 'moment';

export function useTable(){
    const testList = reactive({
        funcList : []
    });

    const addFunctionTest = (funcNo, funcName) =>{
        console.log(funcNo);
        let insertFuncNo = 0;
        let isAlreadyRegistered = false;
        for(const funcItem of testList.funcList)
            if(funcItem.id == funcNo){
                isAlreadyRegistered = true;
                break;
            }
            else if(funcItem.id > funcNo){
                insertFuncNo = funcItem.id;
                break;
            }

        if(!isAlreadyRegistered){
            const newFuncItem = {
                id: funcNo,
                name: funcName,
                testItem: [],
                testDate: moment()
            }

            //間にある場合はinsert、それ以外はpush
            if(insertFuncNo > 0){
                testList.funcList.splice(insertFuncNo, 0, newFuncItem);
            }
            else{
                testList.funcList.push(newFuncItem);
            }
        }

        console.log(testList);
    }

    const removeFunctionTest = (funcNo) => {
        let list = [];
        console.log(funcNo);
        for(let item of testList.funcList){
            if(item.id != funcNo){
                list.push(item);
            }
        }

        testList.funcList = list;

    };

    const addRow = (funcNo) => {
        let insertNo = 0;
        const idx = getFuncItemArg(funcNo);
        for(const item of testList.funcList[idx].testItem){
            if(item.checked){
                insertNo = item.id;
                break;
            }
        }

        const newItem = {
            id: testList.funcList[idx].testItem.length+1, 
            pipeNo: funcNo + "." + (testList.funcList[idx].testItem.length+1),
            primary: "",
            secondary: "",
            input: "",
            expect: "",
            checked: false,
            result: false,
            testDate: moment(),
            reason: ""
        };

        //チェックがついていたら挿入
        if(insertNo > 0){
            testList.funcList[idx].testItem.splice(insertNo, 0, newItem);
        }
        else{
            testList.funcList[idx].testItem.push(newItem);
        }

        arrange(idx);

    };

    const removeRow = (funcNo) =>{
        const newItems = [];
        const idx = getFuncItemArg(funcNo);

        for(const item of testList.funcList[idx].testItem){
            if(!item.checked){
                newItems.push(item);
            }
        }
        testList.funcList[idx].testItem = newItems;
        arrange(idx);
    };

    const checkAll = (idx) =>{
        for(let item of testList.funcList[idx].testItem){
            item.checked = true;
        }
    };

    const uncheckAll = (idx) => {
        for(let item of testList.funcList[idx].testItem){
            item.checked = false;
        }

    };

    const setTestResult = (funcNo, result, reason)=>{
        let funcArg = getFuncItemArg(funcNo);

        //日付set
        const exeDate = moment();

        if(result == false)
        {
            testList.funcList[funcArg].reason = reason;
        }

        testList.funcList[funcArg].result = result;
        testList.funcList[funcArg].testDate = exeDate;

    };


    const getFuncItemArg = (funcNo)=>{
        let retArg = 0;
        for(let funcArg = 0; funcArg < testList.funcList.length; ++funcArg){
            if(testList.funcList[funcArg].id == funcNo){
                retArg = funcArg;
                break;
            }
        }

        return retArg;
    };



    function arrange(idx){
        let id = 1;
        for(let item of testList.funcList[idx].testItem){
            item.id = id;
            item.pipeNo = testList.funcList[idx].id + "." + id;
            ++id;
        }
    }

    return {testList, addFunctionTest, removeFunctionTest, addRow, removeRow, checkAll, getFuncItemArg, uncheckAll, setTestResult};

}