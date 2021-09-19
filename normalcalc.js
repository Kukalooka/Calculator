function clickable(box){
    let current = "";
    let nums = [];
    let operations = [];
    let clear = true;
    let result = 0;
    let point = false;
    let buttons = document.querySelectorAll(box);

    for(let i = 1; i <= 9; i++){
        buttons[i].addEventListener("click", function(){
            current += i;

            if(clear){
                buttons[0].innerHTML = current;
                clear = false;
            }
            else{
                buttons[0].innerHTML = current;
            }
        });
    }

    buttons[10].addEventListener("click", function(){
        current += 0;
        
        if(clear){
            buttons[0].innerHTML = current;
            clear = false;
        }
        else{
            buttons[0].innerHTML = current;
        }
    });
        

    buttons[11].addEventListener("click", function(){
        if(point){

        }else{
            if(clear){
                current += "0.";
                buttons[0].innerHTML = current;
                clear = false;
                point = true;
            }
            else{
                current += ",";
                point = true;
                buttons[0].innerHTML = current;
            }
        }
    });

    buttons[12].addEventListener("click", function(){
        nums.push(Number(current));
        operations.push("add");
        current = "";
    });

    buttons[13].addEventListener("click", function(){
        nums.push(Number(current));
        operations.push("substract");
        current = "";
    });

    buttons[14].addEventListener("click", function(){
        nums.push(Number(current));
        operations.push("multiply");
        current = "";
    });

    buttons[15].addEventListener("click", function(){
        nums.push(Number(current));
        operations.push("divide");
        current = "";
    });

    buttons[16].addEventListener("click", function(){
        nums.push(Number(current));
        result = nums[0];
        for(let i = 0; i < operations.length; i++){
            result = calc(operations[i], result, nums[i+1]);
        }
        console.log(operations + " " + nums + " " + result);
        buttons[0].innerHTML = result;
        current = "";
    });
}

function calc(mode, a, b)
{
    switch(mode){
        case "add":
            return a+b;
        case "substract":
            return a-b
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
    }
}

export {clickable, calc}