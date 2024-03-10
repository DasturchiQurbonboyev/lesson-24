const idx = localStorage.getItem("id")
const API = "./users.json";
const usersAbout = document.querySelector(".wrapper__about")




const getAllUsers = (array, list) => {
    const singleUsers = array.filter(item => item.id == idx)
    console.log(singleUsers[0].firstName);

    usersAbout.innerHTML = `
            <div class="col-4">
                <img src="${singleUsers[0].image}" alt="">
            </div>
            <div class="col-8 bg-body-secondary p-5  ">
                <div class="row">
                    <div class="col-4 ">
                        <label for="">First Name :</label>
                        <h2>${singleUsers[0].firstName}</h2>
                    </div>
                    <div class="col-4 ">
                        <label for="">Date of birth :</label>
                        <p>${singleUsers[0].birthDate}</p>
                    </div>
                    <div class="col-4">
                        <label for="">Phone Number : </label>
                        <p>${singleUsers[0].phone}</p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-4 ">
                        <label for="">Last Name :</label>
                        <h2>${singleUsers[0].lastName}</h2>
                    </div>
                    <div class="col-4 ">
                        <label for="">Address :</label>
                        <p>${singleUsers[0].company.address.address}</p>
                    </div>
                    <div class="col-4">
                        <label for="">Gmail : </label>
                        <p>${singleUsers[0].email}</p>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-4 ">
                        <label for="">Maiden Name :</label>
                        <h2>${singleUsers[0].maidenName}</h2>
                    </div>
                    <div class="col-4 ">
                        <label for="">Gender :</label>
                        <p>${singleUsers[0].gender}</p>
                    </div>
                    <div class="col-4">
                        <label for="">Parol : </label>
                        <p>${singleUsers[0].password}</p>
                    </div>
                </div>
            </div>
        `
    usersAbout.appendChild(card)
}


const featchData = async () => {
    const data = await fetch(API)
    const result = await data.json()



    getAllUsers(result.users,)
}

featchData()