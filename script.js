function calc(n) {
    if (n == "="){
        document.forms.t1.value = eval('document.forms.t1.value');
    } else {
        document.forms.t1.value = document.forms.t1.value+n;
    }
}