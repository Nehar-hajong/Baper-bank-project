const buttonSubmit = document.getElementById('btn-submit').addEventListener('click', function(){
    const parsonalEmail = document.getElementById('parsonal-email');
    const useEmail = parsonalEmail.value;

    const partionalpassword= document.getElementById('parsonal-password');
    const password = partionalpassword.value;
    console.log(useEmail, password)
})