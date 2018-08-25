function check (form){
    if (form.name.value !="" && form.pss.value!="" && form.pass.value !="" && form.us.value !="" ){
    window.location.href= ('index.html')
}
    else {
        alert("fill in all fields");
    }
}
