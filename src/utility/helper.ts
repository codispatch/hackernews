export const NEW_OPERATION = "NEW";
export const UPDATE_OPERATION = "UPDATE";
export const HIDE_STORY = "HIDE_STORY";
export const INC_VOTE = "INC_VOTE";

class util {
    public setLocalStorageObject(storyId: number, operation: string, newData: any) {
        if (localStorage.getItem(storyId.toString()) === null) {
            const obj = this.performUpdateOperation(NEW_OPERATION, operation, {}, newData);
            localStorage.setItem(storyId.toString(), JSON.stringify(obj));
        } else {
            const obj = localStorage.getItem(storyId.toString());
            const newObj = this.performUpdateOperation(UPDATE_OPERATION, operation, obj, newData);
            localStorage.setItem(storyId.toString(), JSON.stringify(newObj));
        }
    }
    public getLocalStorageObject(responseData: any) {
        let response: any = [];
        let tempObj: any;
        if (responseData && responseData.data && responseData.data.data && responseData.data.data.hits.length && responseData.data.data.hits.length > 0) {
            let rowData = responseData.data.data.hits;
            const length = responseData.data.data.hits.length;
            for (let i = 0; i < length; i++) {
                if (localStorage.getItem(rowData[i]["objectID"]) !== null) {
                    tempObj = JSON.parse(localStorage.getItem(rowData[i]["objectID"]) || "");
                    if (typeof tempObj["voteCount"] !== "undefined") {
                        rowData[i]["points"] = tempObj["voteCount"];
                    }
                    if (typeof tempObj["hide"] !== "undefined" && Boolean(tempObj["hide"]) === true) {
                        continue;
                    }
                }
                response.push(rowData[i]);
            }
        }
        return response;
    }
    public performUpdateOperation(state: string, operation: string, obj: any, newData: any) {
        let newObj: any;
        switch (operation) {
            case HIDE_STORY: if (state === NEW_OPERATION) { newObj = { hide: newData } } if (state === UPDATE_OPERATION) { newObj = JSON.parse(obj); newObj["hide"] = newData; } break;
            case INC_VOTE: if (state === NEW_OPERATION) { newObj = { voteCount: newData } } if (state === UPDATE_OPERATION) { newObj = JSON.parse(obj); newObj["voteCount"] = newData; } break;
        }
        return newObj;
    }
}
export default new util();