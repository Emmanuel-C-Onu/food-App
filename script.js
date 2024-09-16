
let inputName = document.getElementById('inputName')



function displayInputValue() {
    localStorage.setItem('login', inputName.value)
    window.location.href = "index.html"
}
let user = localStorage.getItem('login')
document.getElementById('final').textContent = `Welcome! ${user}`



let foods = ["rice", "beans", "yam", "swallow", "cocoyam", "goat_meat", "cow_meat", "dog_meat"]
let responds = document.getElementById("order")

function food(){

    let number = document.getElementById("input1").value;
    
    if(foods.includes(number)){
        responds.innerHTML = "We have" + ` ${number} ` + "in our Menu, kindly select from our" + ` ${number} ` + "varities";
        document.getElementById("riceVar").style.display = "flex";
        responds.style.color = "#000"
        result.style.textAlign = "center";
        responds.style.fontSize = "2.5rem";
        //  console.log(`${number} is available`)
        
    
    }else{
        responds.innerHTML = "Sorry, we don't have" + ` ${number} ` + "at the moment, do you need anything else?";
        document.getElementById("order1").style.display = "flex";
        responds.style.color = "red"
        result.style.textAlign = "center";
        responds.style.fontSize = "2.5rem";
        // console.log(`${number} is not available`)
    }
}



        // function endNow() {
        //     const finalResult = document.getElementById('container');
        //     const point = document.getElementById('riceType').value
        //     finalResult.innerHTML = `Emmanuel Onu, your Order cost $${point} and is been packaged. It will be delivered to your doorstep shortly`;
        //                 result.style.color = "Green"
        //                 result.style.marginTop = "30px";
        //                 result.style.textAlign = "center";
        //                 result.style.fontSize = "35px";
            
        // }


        var endNow = document.getElementById('endNow');
      
        endNow.addEventListener('click', function() {
              let finalResult = document.getElementById('left');
              let amount = document.getElementById('riceType1').value;
              finalResult.innerHTML = `Emmanuel Onu, your Order cost $${amount} and is been packaged. It will be delivered to your doorstep shortly`;

              finalResult.style.color = "#F38D0E"
              finalResult.style.marginTop = "100px";
              finalResult.style.textAlign = "center"; 
              finalResult.style.fontSize = "31px";
              finalResult.style.fontWeight = "900";
            
          });
        

       

// document.querySelector(".btn1").addEventListener("click", () => {
//     var foods = ["rice", "beans", "yam", "swallow", "cocoyam", "goat_meat", "cow_meat", "dog_meat"]
    




//     if(foods.includes(number)){
//         document.getElementById("riceVar").style.display = "flex";
        
//     }else{
//         document.getElementById("riceVar").style.display = "none";
//     }


//   })
  
