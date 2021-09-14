
let f_name=document.getElementById("fname");
let errnode1=document.getElementById("error1");


let l_name=document.getElementById("lname");
let errnode2=document.getElementById("error2");


let mailnode=document.getElementById("mailid");
let errnode3=document.getElementById("error3");



let sub=document.getElementById("subject");
let errnode4=document.getElementById("error4");


function validate1(){
    errnode1.innerHTML="";
    let fr_name=f_name.value;
    if(f_name.value=="")
    {
        errnode1.innerHTML="This field is required";
        f_name.style.border="1px solid red";
        f_name.style.color="red";
        return false;

    }
  
    else{
        f_name.style.border="2px solid #00FF00";
        return true;
    }
}


function validate2(){
    errnode2.innerHTML="";
    let la_name=l_name.value;
    if(l_name.value=="")
    {
        errnode2.innerHTML="This field is required";
        l_name.style.border="1px solid red";
        l_name.style.color="red";
        return false;

    }
  
    else{
        l_name.style.border="2px solid #00FF00";
        return true;
    }
}

function validate3(){
    errnode3.innerHTML="";
    let mailnode1=mailnode.value;
    let ss=email.substring(email.indexOf("@")+1);
    if(mailnode1=="")
    {
        errnode3.innerHTML="This field is required";
        mailnode.style.border="1px solid red";
        errnode3.style.color="red";
        return false;

    }
    else if(!mailnode1.includes("@")||ss==""){
        errnode3.innerHTML="Please enter valid email";
        mailnode.style.border="1px solid red";
        errnode3.style.color="red";
        return false;

    }
    else{
        mailnode.style.border="2px solid #00FF00";
        return true;
    }


}

function validate4(){
    errnode4.innerHTML="";
    let sub1=sub.value;
    if(sub.value=="")
    {
        errnode4.innerHTML="This field is required";
        sub.style.border="1px solid red";
        errnode4.style.color="red";
        return false;

    }
    else if(sub1.length<5){
        errnode4.innerHTML="should contain atleast 5 letter";
        sub.style.border="1px solid red";
        errnode4.style.color="red";
        return false;

    }
    else if(sub1.length>50){
        errnode4.innerHTML="should contain maximun 50 letter";
        sub.style.border="1px solid red";
        errnode4.style.color="red";
        return false;

    }
    else{
        sub.style.border="2px solid #00FF00";
        return true;
    }
}

function validate()
{
    let state1=validate1();
    let state2=validate2();
    let state3=validate3();
    let state4=validate4();
    

    return (state1 && state2 && state3 && state4 );

}