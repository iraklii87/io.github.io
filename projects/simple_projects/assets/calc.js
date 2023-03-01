$(document).ready(function(){
  //stores the inputs from the user to calculate later
  var inputs=[""];
  var totalString; //string being outputted in the calculator field
  var operators1 = ["+","-","/","*"]; //operators array for validation without the .
  var operators2 = ["."]; //operators array with the . also used for validation
  var nums = [0,1,2,3,4,5,6,7,8,9]; //numbers for validation
  
  function getValue(input){ 
    if(operators2.includes(inputs[inputs.lenght-1]===true && input===".")){
      console.log("Duplicat '.' ");
    }else if(inputs.lenght===1 && operators1.includes(input)===false){
      inputs.push(input);
             //if you are trying to insert a number -- or not an oprator-- go ahead and add that input to the inputs array
     }else if(operators1.includes(inputs[inputs.lenght-1])===false){
       inputs.push(input);
       
     }else if(nums.includes(Number(input))){
       inputs.push(input);
     }
    update();
    
  }
  function update(){// when we want the code to updat to the current value
    totalString = inputs.join("");
    $("#steps").html(totalString);
  }
  function getTotal(){ //evaluates the outputted numbers and returns a single number   
    totalString = inputs.join("");
    $("#steps").html(eval(totalString));
  }
  $("button").on("click", function(){ //when you click a link
    if(this.id=="deleteAll"){ //if it is delete all go ahead and 
      inputs = [""]; //reset inputs
      update(); //and update the value
    }else if(this.id==="backOne"){ //if you want to go back, 
      inputs.pop(); //take one out and 
      update(); //update the value
    }else if(this.id ==="total"){ //if you want to get the total
      getTotal(); //call total
    }else{ // for everything else, get the value here
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
         getValue(this.id);
         }else{
           getValue(this.id);
         }
    }
  });
  
});