/*function convertTemp() {
    let fah = document.getElementById('fahrenheit').value
    let cel = document.getElementById('celsius').value

    let fahcel = (cel * 1.8) + 32;
    let celfah = (fah - 32) * 0.5556;

    document.getElementById('fahrenheit') = fahcel.toFixed(1); 

    
};*/

let cel = document.getElementById('celsius');
let fah = document.getElementById('fahrenheit');

cel.oninput = function () {
    let f = (parseFloat(cel.value) * 9) / 5 + 32;
    fah.value = parseFloat(f.toFixed(2)); 
}

fah.oninput = function() {
    let c = ((parseFloat(fah.value) - 32) * 5) / 9;
    cel.value = parseFloat(c.toFixed(2));
}