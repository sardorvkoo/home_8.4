let emailEl = document.getElementById('email')
let passEl = document.getElementById('pass')
let btnEl = document.getElementById('submit')

async function getToken(user) {
    let res = await fetch('https://reqres.in/api/login',{
        method: 'post',
        headers: {'Content-type':'application/json'},
        body:JSON.stringify(user)
    })
    res = await res.json()
    if(res.token && res.token !== null){
        localStorage.setItem('token', res.token)
        location.replace('../index.html')
    }else{
        alert('malumot kiriting')
    }
}

btnEl.addEventListener('click', (e) => {
    e.preventDefault()
    const user = {
       email: emailEl.value, 
       password: passEl.value
    }
    getToken(user)
})