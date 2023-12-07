// salary ni 2 sayaas ih, 
// niigmiin daatgaliin shimtgel toldog bh, var-a 
// passporttoi eswel identitycardtai bh,  var-b,x
// bas person bh eswel itgemjleheer bh,  var-y,z
// dept ni 1 sayas baga bwal zeel garna.

function loan(num1, a, b, x, y, z, num2){
    if(num1 > 2000000 && a == "true" && (b == "true" || x == "true") && (y == "true" || z == "true") && num2 < 1000000){
        console.log("You are eligible");
    }else {
        console.log("You are not eligible");
    }
}
loan(2000001, "true", "true", "false", "true", "false", 900000);
