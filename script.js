let searchtext = document.querySelector("#inputtext");
let button = document.querySelector("#btn");
let resultdata = document.querySelector("#result");

button.addEventListener("click", async () => {
    let value = document.getElementById("inputtext").value
    // document.querySelector("#result").style.display = "block"


    if (value.length == 0) {
        alert('Please enter the valid number');
    }
    else {

        try {
            let data = await fetch(`https://api-thirukkural.vercel.app/api?num=1`)
            let data1 = await data.json();
            console.log(data1)
            resultdata.innerHTML =
                `
                <div class="main2">
                <ul>
                <li>chap_eng :${data1.chap_eng}</li><br>
                <li>chap_tam : ${data1.chap_tam}</li><br>
                <li>chapgrp_eng : ${data1.chapgrp_eng}</li><br>
                <li>chapgrp_tam :${data1.chapgrp_tam}</li><br>
                <li>eng :${data1.eng}</li><br>
                <li>line1 :${data1.line1}</li><br>
                <li>line2 :${data1.line2}</li><br>
                <li>number :${data1.number}</li><br>
                <li> sect_eng :${data1.sect_eng}</li><br>
                <li>sect_tam :${data1.sect_tam}</li><br>
                <li>tam_exp :${data1.tam_exp}</li>
                </ul>
               </div>
                
                `
        }
        catch {
            console.log(err)
        }
    }
})




























































































































