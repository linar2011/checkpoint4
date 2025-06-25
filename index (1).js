//String Manipulation Functions:
function reverse(str){
 return str.split("").reverse().join("")   
}
function count_char(str,c){
    var result=0
    for(var i=0;i<str.length;i++){
        if(str[i]==c){
            result++
        }
    }
    return result
}
function capitalize(str){
    var arr=str.split(" ")
    for(i in arr){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(" ")
}

// Array functions:

function maxmin(arr){
    var max= arr[0]
    var min=arr[0]
    for(value of arr){
        if(value>max){
            max=value
        }
        if(value<min){
            min =value
        }
    }
    return "the maximum is: "+max + " and the minimum is: "+min
}
function sumarray(arr){
var result=0
for(value of arr){
    result+= value
}
return result
}
function evennumber(arr){
    for(var i=0; i<arr.length;i++){
        if(arr[i]%2 !== 0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}

//Mathematical functions

function Prime(n){
    var count=0
    var i=2
    while(i<n && count==0 ){
        if(n%i ==0){
            count++
        }
        i++
    }
   
    return count==0 ? true : false

}

//fib(n)=fib(n-1)+fib(n-2)
//fib(0)=1
//fib(1)=1

function fib(n){
    var result=[1,1]
    for(var i=2;i<=n;i++){
        result.push(result[i-1]+result[i-2])
        console.log(result)
    }
    return result[n]
}

