// const formId = document.getElementById('formId')

// const url = 'http://localhost:3009/api/post';

// formId.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const usernameField = document.getElementById('username').value
//     const password = document.getElementById('password').value
//     const loginbutton = document.getElementById('loginbutton')

//     console.log(`the name is ${usernameField} and password is ${password}`)
// })

function submitForm(e){
    e.preventDefault()
    const formId = document.getElementById('formId')
    const url = 'http://localhost:3009/api/post';
    var formData = new FormData(myform);
    fetch(url,{
        method:'POST',
        body: formData,
    }).then((response)=>{
        if(!response.ok){
            throw new Error("network returns error");
        }
        return response.json()
    }).then((resp)=>{
        let respdiv = document.createElement('pre')
        respdiv.innerHTML = JSON.stringify(resp, null, 2);
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);

    }).catch((error) => {
        // Handle error
        console.log("error ", error);
      });
}