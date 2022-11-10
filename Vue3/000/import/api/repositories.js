var log=console.log;

export function add(x,y){ log(x+y);  return x+y }
export function minus(x,y){ log(x-y);  return x-y }
function mutiply(x,y){ log(x*y);  return x*y }
function divide(x,y){ log(x/y);  return x/y }

export default{
    mutiply, divide,
}

