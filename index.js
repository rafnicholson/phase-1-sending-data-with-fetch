// Add your code here


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        }),
    })
    .then(res => res.json())
    .then(data => {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.textContent = data.id;
        body.appendChild(div);
    })
    .catch(error => {
        const body = document.querySelector('body');
        const div = document.createElement('div');
        div.textContent = error.message;
        body.appendChild(div);
    });
}