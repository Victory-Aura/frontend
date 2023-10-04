
export const useGetImg = ( name, list ) => {
    let elemName = '';
    list.forEach(data => {
    if(data.name === name){
        elemName = data.file
    }
})
return elemName;
}