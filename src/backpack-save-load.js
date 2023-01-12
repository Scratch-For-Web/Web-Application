import localforage from "localforage";
export default async function Load(backpack){
    const content = await localforage.getItem("backpack");
    if(content !== null){
        backpack.setContents(content)
    }
    Save(backpack)
}
async function Save(backpack){
setInterval(async function(){ 
    localforage.setItem("backpack",backpack.getContents());
  
}, 1000);
}