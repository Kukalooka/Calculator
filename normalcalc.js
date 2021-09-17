function calc(mode, a, b)
{
    switch(mode){
        case "add":
            return a+b;
        case "substract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
    }
}

export {calc}