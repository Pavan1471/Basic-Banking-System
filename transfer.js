// const name = document.getElementById("name").value;
// const mobile = document.getElementById("mobile").value;
// const email = document.getElementById("email").value;
// const amount = document.getElementById("amount").value;

function withdraw(){

        document.getElementById("pop").style.display="block";
    
var date = new Date();
   
document.querySelector(".transcation-body").innerHTML +=`

    <div class="transcation">

    <div>
            <div class="transcation-left-inner">
                Money sent to ${document.getElementById("name").value}
            </div>
            <div>
            ${date.getDay()}/${date.getMonth()}/${date.getFullYear()} 
            </div>
        </div>
        <div class="transcation-right">
            <div class="transcation-right-inner">
            ${amount = document.getElementById("amount").value} $
            </div>
            <div style="color: green;">
                Paid successfully
            </div>
        </div>
    
    </div>
    <br>
    
    
    
    
    
    
    `;
    document.getElementById("name").value="";
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";
    document.getElementById("amount").value="";
}