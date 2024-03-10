const API = "./users.json";
const postWrapper = document.querySelector(".api__wrapper")
// const button = document.querySelector("")
const usersById = document.querySelector(".users-more-btn")



async function featchData(api) {
    let data = await fetch(api)
    data
        .json()
        .then(res => createCard(res.users))
        .catch(err => console.log(err))
}

featchData(API)


function createCard(arr) {

    arr.forEach(element => {



        let card = document.createElement("div")
        card.className = "col-3";
        card.innerHTML = `
            <div id = "${element.email}" class="card" style="width: 18rem;">
                <img src="${element.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${element.firstName} ${element.lastName}</h5>
                    <p class="card-text">${element.birthDate}</p>
                    <a  href="./malumot.thml" id="${element.id}" class=" users-more-btn btn btn-primary">Ko'proq ko'rish</a>
                </div>
            </div>
        `
        postWrapper.appendChild(card)


    })

}


postWrapper.addEventListener("click", (e) => {
    let idx = e.target.id
    if (idx) {
        localStorage.setItem("id", idx)
    }
    console.log(idx);
})


