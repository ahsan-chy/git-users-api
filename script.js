console.log("Search Git Hub Users")
let form = document.getElementById("myForm")


form.addEventListener('submit', function(event){
    event.preventDefault();

    let search = document.getElementById("search").value
    // console.log("Search Successfully", search)
    // let userName = search.split(' ').join('')
    let userName = search.replaceAll(' ', '-')
    // alert(userName)

    document.getElementById("result").innerHTML = ""

    fetch('https://api.github.com/users/'+userName)
	.then(response => response.json())
	.then((data) => {

    document.getElementById("result").innerHTML = `
    <div class="card my-5 text-center" style="width: 18rem;">
        <img src="${data.avatar_url}" class="card-img-top" alt="user-img">
        <div class="card-body">
        <h5 class="card-title">"${data.name}"</h5>
        <p class="card-text">"${data.bio}"</p>
        <a href="${data.html_url}" class="btn btn-success">Full Profile</a>
        </div>
    </div>
    `
    })


})
