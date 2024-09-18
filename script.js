// async getData()=>{

// }
const input=document.getElementById("input");
const output=document.getElementById("output");
// console.log(input.value)
// console.log(output)



async function getData(){
    const url=`https://api.postalpincode.in/postoffice/${input.value}`
    const response=await fetch(url)
    if(!response.ok){
        throw new Error(`invalid name || Something went wrong || no data found Response status:${response.status}`)
    }
    const data=await response.json()
    try {
        console.log("try")
        data[0].PostOffice.length
    } catch (error) {
        console.log("catch")
                output.innerHTML="No data found or invalid pincode or area name"
    }
    const length=data[0].PostOffice.length;
let x="";
    for(let i=0;i<length;i++){
        x+=`=> ${data[0].PostOffice[i].Name} Pincode: ${data[0].PostOffice[i].Pincode} 
             , District:  ${data[0].PostOffice[i].District} 
         , State: ${data[0].PostOffice[i].State} <br>`
        console.log(
            data[0].PostOffice[i].Name+"=> Pincode: "+data[0].PostOffice[i].Pincode +
            " , District: "+ data[0].PostOffice[i].District +
            " , State: "+ data[0].PostOffice[i].State
        )
    }
    output.innerHTML="";
    output.innerHTML=x;
//    console.log(data[0])
    console.log(url+" "+response+" "+data) 
//     // if()
//     console.log()
//     console.log(data[0].PostOffice[0].Pincode)
}
async function getCity(){
    const url=`https://api.postalpincode.in/pincode/${input.value}`
    const response=await fetch(url)
    const  data=await response.json()
try {
    console.log("try")
    data[0].PostOffice.length
} catch (error) {
    console.log("catch")
            output.innerHTML="No data found or invalid pincode or area name"
}


    const length=data[0].PostOffice.length;
    let x="";
    x+=`<p>city or villages of pincode:${input.value}</p><br>`
    for(let i=0;i<length;i++){
        x+=`=> ${data[0].PostOffice[i].Name}  , ${data[0].PostOffice[i].District} , ${data[0].PostOffice[i].State}<br>`
    }
    // console.log(x)
    console.log(url+" "+response+" "+data) 
    output.innerHTML="";
    output.innerHTML=x;
    // console.log(x)
    // console.log(url)

}

function sayPincode(){
    output.innerHTML=`<p id="loading">Loading...</p>`;

        if(!isNaN(input.value)){
            getCity()
            // console.log(getCity())
        }else{
            getData()
            // console.log(getData())
        } 





}