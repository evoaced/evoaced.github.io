<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>math things</title>
    <script src=""
</head>
<body>
    <input type="number" id="num1">
    <input type="number" id="num2">

    <button onclick="domath();">run math stuff</button>
    <button onclick="reset();">reset</button>
    <p id="output"></p>

    <script>
        function reset() {
            document.getElementById("output").innerHTML = "";
        }

        function domath() {
            var num1 =document.getElementById("num1").value;
            num1= Number(num1);
            var num2 = document.getElementById("num2").value;
            num2 = Number(num2);

            var add = num1 + num2;
            var sub = num1 - num2;
            var mul = num1 * num2;
            var div = num1 / num2;
            var mod = num1 % num2;
            var pow = num1 ** num2; //exponent
            var sqn1 = Math.sqrt(num1);
            var sqn2 = Math.sqrt(num2);

            var p = document.getElementById("output");
            var out = "";
            out = out +"add: " + add + "<br/>";
            out = out +"subtract: " + sub + "<br/>";
            out = out +"multiply: " + mul + "<br/>";
            out = out +"divide: " + div + "<br/>";
            out = out +"modulus: " + mod + "<br/>";
            out = out +"poe: " + pow + "<br/>";
            out = out +"sqrt(num1): " + sqn1 + "<br/>";
            out = out +"sqrt(num1): " + sqn1 + "<br/>";
            p.innerHTML = out;
            
        }
     </script>
</body>
</html>