

const populate=async (value,currency)=>{
    let str="";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_WUELstqEJkbj81e3BfO7MiO9LEtJljB91BHlR0F2&base_currency="+currency
        let response=await fetch(url);
        let rjason=await response.json();
        for(let key of Object.keys(rjason["data"])){
            
                str += `<tr> 
                <td>${key}</td> 
                <td>${rjason["data"][key]["code"]}</td>
                <td>${rjason["data"][key]["value"]*value}</td>
                </tr>`;
        }
        document.querySelector(".output").style.display="block";
        let tbody=document.querySelector("tbody");
        tbody.innerHTML=str;

}

// const populate2=async (value,currency)=>{
//     let str="";
//     url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_WUELstqEJkbj81e3BfO7MiO9LEtJljB91BHlR0F2&base_currency="+currency
//         let response=await fetch(url);
//         let rjason=await response.json();
//         for(let key of Object.keys(rjason["data"])){
//             if([key]==currency){
//             str += `<tr> 
//             <td>${key}</td> 
//             <td>${rjason["data"][key]["code"]}</td>
//             <td>${rjason["data"][key]["value"]*value}</td>
//             </tr>`;}
//         }
//         document.querySelector(".output").style.display="block";
//         let tbody=document.querySelector("tbody");
//         tbody.innerHTML=str;

// }


let btn=document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let value=Number(document.querySelector("input[name='Quantity']").value);
    let currency=document.querySelector(".slct1[name='Currency']").value;
    populate(value,currency);

})

    // let btn2=document.querySelector(".btn2")
    // btn2.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     let value2=Number(document.querySelector("input[name='Quantity']").value);
    //     let Currency2=document.querySelector(".slct2[name='Currency2']").value;
    //     populate2(value2,Currency2);
    
    // }) 
