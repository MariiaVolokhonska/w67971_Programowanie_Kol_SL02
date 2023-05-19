const btns=document.querySelectorAll("button");
for(var i=0;i<btns.length;i++){
    const btn=btns[i];
    btn.addEventListener("click",() =>{
        btn.classList.add("color");
        for(var j=0;j<btns.length;j++){
            const btn1=btns[j];
            btn1.classList.remove("color");
        }
        btn.classList.add("color");
    });

};

const bt1=document.getElementById("bt1");
const bt2=document.getElementById("bt2");
const bt3=document.getElementById("bt3");


const myTimeout = setTimeout(myColor, 1000); 





function myColor(){
    bt3.classList.remove("color3");
    bt1.classList.add("color1");
    const myTimeout2 = setTimeout(myColor2, 3000);
}
function myColor2(){
    bt1.classList.remove("color1");
    bt2.classList.add("color2");
    const myTimeout3 = setTimeout(myColor3, 5000); 
}
function myColor3(){
    bt2.classList.remove("color2");
    bt3.classList.add("color3");
    const myTimeout = setTimeout(myColor, 1000); 
    
}
function validateName(){
    const n=document.forms["form"]["imie"];
    const n_v=n.value;
    const k=n_v.length;
    if(k<3){
        alert("Login must have minimum 6 symbols");
    }
};

function validateEmail(){
    const e=document.forms["form"]["email"];
    var e1=e.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e1)) {
        alert("Proszę podać poprawny adres e-mail.");
 }
};
function validatePass(){
    const pass=document.forms["form"]["pas"];
    var pass_val=pass.value;
    const passRegex=/^[a-zA-Z0-9!@#$%^&*]{8,32}$/;
    if(!passRegex.test(pass_val)){
        alert("Proszę podać silniejsze hasło");
    } 
    return pass_val;
};

function drugieHaslo(){
    const p=validatePass();
    const pass2=document.forms["form"]["pas2"];
    const pass2_v=pass2.value;
    
    if(p!=pass2_v){
        alert("Hasło nie jest prawidłowe!");
    }
};
function bigFunc(){
    if(validateEmail()||validatePass()){
        return true;
    }
};
var checkbox = document.getElementById("check");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    ;
  } else {
    console.log("Checkbox is not checked..");
  }
});
let curDate=new Date();
const curYear=curDate.getFullYear();
const curYearInt= parseInt(curYear);

function validateDate(){
    const data=document.forms["forms"]["bday"];
    let data_v=data.value;
    const dateList=split(" ");
    console.log(dateList);
    let dataRegex=/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    if(!dataRegex.test(data_v)){
        alert("Nie poprawno wprowadzono dane dotyczące daty urodzenia");
    }

}

