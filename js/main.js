const url = ('https://jsonplaceholder.typicode.com/users');


const user = document.querySelector('.usertable');
fetch (url) 
.then ((Response) => Response.json())
.then ((data) => {
    const users=data.map((user)=>`
    <div id="main_user" class="main_user">
    <img id="users__img" class="users__img" src="./images/portert.avif" alt="user">
    <div id="users__date" class="users__date">
        <h3 class="data__h3">${user.email}</h3>
        <p class="data__p">Updated 1 day ago</p>
    </div>
    <div id="users__date" class="users__date users__2">
        <h3 class="data__h3">${user.name}</h3>
        <p class="data__p">on 24.05.2019</p>
    </div>
    <div id="users__date" class="users__date users__3">
        <h3 class="data__h3">May 26, 2019</h3>
        <p class="data__p">6:30 PM</p>
    </div>
    <button id="userbtn" class="btn">like</button>
    </div>
    `)
    user.innerHTML = users.join("");
});
