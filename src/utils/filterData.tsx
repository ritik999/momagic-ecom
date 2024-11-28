
export const filterData=(input:string,data:string[])=>{
    let filteredData=data.filter((ele)=>ele.toLocaleLowerCase().includes(input));
    let removedDuplicateData=filteredData.filter((item,index)=>filteredData.indexOf(item)==index);
    return removedDuplicateData
}