var count = 0;
function foo(){
    document.getElementsByClassName('para')[0].innerHTML += 'and adding ';
    count++;
    document.getElementById('btn').innerHTML = 'Clicked '+count+' time(s).';
}