function doTask (tm){
 setTimeout(()=>{
 console.log("Task done")
 }, tm)
}
// doTask(2000)

// async function asynctsk ( ){

// }

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data fetch failed");
        }, 1000);
    });
}


const asynctsk = async () => {
    try{
        const res = await fetchData();
        console.log(res);

    }catch(err){
        console.log(err)
    }
}
asynctsk();