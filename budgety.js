var result=document.getElementById("result").innerHTML;
x=Number(result);
var exp=document.getElementById("expense").innerHTML;
var exp_temp=Number(exp);
var inc=document.getElementById("income").innerHTML;
var inc_temp=Number(inc);
var d=new Date();
document.getElementsByClassName("budget__title--month")[0].innerHTML=d;
function inc_list(){  
    var val=document.getElementById("val").value;
    var description=document.getElementById("desc").value; 
    var add_li=document.createElement("li");
    add_li.className+="item";
    var text_div=document.createElement("div");
    var val_div=document.createElement("div");
    var right_div=document.createElement("div");
    right_div.className+="right";
    val_div.className+="item__value";
    text_div.className+="item__description";
    var text=document.createTextNode(description);
    text_div.appendChild(text);
    var val=document.createTextNode(val);
    val_div.appendChild(val);
    right_div.appendChild(val_div);
    add_li.appendChild(text_div);
    add_li.appendChild(right_div);
    document.getElementById("income_list").appendChild(add_li);

}

function exp_list(){  
    var val=document.getElementById("val").value; 
    var description=document.getElementById("desc").value;
    var add_li=document.createElement("li");
    add_li.className+="item";
    var text_div=document.createElement("div");
    var val_div=document.createElement("div");
    var right_div=document.createElement("div");
    right_div.className+="right";
    val_div.className+="item__value";
    text_div.className+="item__description";
    var text=document.createTextNode(description);
    text_div.appendChild(text);
    var val=document.createTextNode(val);
    val_div.appendChild(val);
    right_div.appendChild(val_div);
    add_li.appendChild(text_div);
    add_li.appendChild(right_div);
    document.getElementById("expenses_list").appendChild(add_li);

}

function expenses(){
    var val=document.getElementById("val").value;
    exp_temp=exp_temp+Number(val);
    document.getElementById("expense").innerHTML=exp_temp;

}

function income(){
   var val=document.getElementById("val").value;
   inc_temp=inc_temp+Number(val);
   document.getElementById("income").innerHTML=inc_temp;

}



function clicki(){
    x=Number(document.getElementById("result").innerHTML);
    var val=document.getElementById("val").value;
    var description=document.getElementById("desc").value;
    if(val!=Number || description===""){
        alert("please fill the values");
    }
    else{
    var choice= document.getElementById("option");
    var e=choice.options[choice.selectedIndex].text;
    if(e=="-"){
    var y=x-Number(val);
    expenses();
    exp_list();
}
    else if(e=="+"){
        var y=x+Number(val);
        income();
        inc_list();
    }
    else{
    alert("select valid option");
}

    document.getElementById("result").innerHTML=y;}
}

