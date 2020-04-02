var result=document.getElementById("result").innerHTML;
x=Number(result);
var exp=document.getElementById("expense").innerHTML;
var exp_temp=Number(exp);
var inc=document.getElementById("income").innerHTML;
var inc_temp=Number(inc);
var d=new Date();
document.getElementsByClassName("budget__title--month")[0].innerHTML=d;

var jsonobj={};
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
    console.log(document.getElementById("expenses_list").children[0].children[0].innerHTML);
    
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

function save(){
    var exp_child=document.getElementById("expenses_list").children;
    var inc_child=document.getElementById("expenses_list").children;

    for (var i=0;i< exp_child.length;i++){
    var getid=document.getElementById("expenses_list").children[i].children[0].innerHTML;
    var getval=document.getElementById("expenses_list").children[i].children[1].innerText;
    jsonobj[getid]=getval;
}
for (var i=0;i<inc_child.length;i++){
    var getid=document.getElementById("income_list").children[i].children[0].innerHTML;
    var getval=document.getElementById("income_list").children[i].children[1].innerText;
    jsonobj[getid]=getval;
}
}

function clicki(){
    x=Number(document.getElementById("result").innerHTML);
    var val=document.getElementById("val").value;
    var choice= document.getElementById("option");
    var e=choice.options[choice.selectedIndex].text;
    if(e=="-"){
    var y=x-Number(val);
    expenses();
    exp_list();
    document.getElementById("result").innerHTML=y;
}
    else if(e=="+"){
        var y=x+Number(val);
        income();
        inc_list();
        document.getElementById("result").innerHTML=y;
    }
    else{
    alert("select valid option");
    }

    document.getElementById("result").innerHTML=y;
}

