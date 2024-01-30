let homeItem = document.getElementById('homeItem');
let categoryItem = document.getElementById('categoryItem');
let areaItem = document.getElementById('areaItem');
let IngredItem = document.getElementById('IngredItem');
let categoryMeal = document.getElementById('categoryMeal');
let areaMeal = document.getElementById('areaMeal');
let mealDetails = document.getElementById('mealDetails');
let inputLayer = document.getElementById('inputLayer');
let searchLayer = document.getElementById('searchLayer');
let itemBasedOnIngred = document.getElementById('itemBasedOnIngred');
let sideBtn = document.getElementById('sideBtn');
let letterInput = document.getElementById('letterInput');
let searchByNameResults = document.getElementById('searchByNameResults');
let searchPage = document.getElementById('searchPage');
let contact = document.getElementById('contact');


run();


async function defaultView() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    response = await response.json()
    return response.meals;
}


async function getCategory() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    return response.categories;
}

async function getCategoryMeals(category) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    response = await response.json()
    runCatgeoryMeal(response.meals);
}

async function getAreaMeals(area) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    runAreaMeal(response.meals);
}

async function getArea() {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response = await response.json()
    return response.meals;
}

async function getMealDetails(id) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    response = await response.json()
    runMealDetails(response.meals);
}

async function getMealIngred(ingred) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingred}`)
    response = await response.json()
    runMealIngred(response.meals);
}


async function getIngred() {

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    return response.meals;

}

async function getSearchByLetter(letter) {

    if (letter != '') {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        response = await response.json()
        runSearchByLetter(response.meals);
    }
    else {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
        response = await response.json()
        runSearchByLetter(response.meals);
    }


}


async function getSearchByName(term) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    response = await response.json()
    runSearchByName(response.meals);

}


async function runCat() {
    homeItem.classList.add('d-none')
    let y = await getCategory();
    categoryItem.classList.replace('d-none', 'd-flex')
    areaItem.classList.add('d-none')
    mealDetails.classList.remove('d-flex')
    mealDetails.classList.add('d-none')
    IngredItem.classList.add('d-none')
    searchPage.classList.add('d-none')
    contact.classList.add('d-none')
    displayCategory(y);
}

async function runArea() {
    homeItem.classList.add('d-none')
    categoryItem.classList.add('d-none')
    areaItem.classList.replace('d-none', 'd-flex')
    mealDetails.classList.remove('d-flex')
    mealDetails.classList.add('d-none')
    IngredItem.classList.add('d-none')
    searchPage.classList.add('d-none')
    contact.classList.add('d-none')
    let y = await getArea();
    displayArea(y);
}

async function runCatgeoryMeal(y) {
    homeItem.classList.add('d-none')
    categoryItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    IngredItem.classList.add('d-none')
    categoryMeal.classList.replace('d-none', 'd-flex')
    displayCategoryMeals(y);
}

async function runAreaMeal(y) {
    homeItem.classList.add('d-none')
    categoryItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    categoryMeal.classList.add('d-none')
    areaMeal.classList.replace('d-none', 'd-flex')
    displayAreaMeals(y);
}

async function runMealDetails(y) {
    homeItem.classList.add('d-none')
    categoryItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    categoryMeal.classList.add('d-none')
    areaMeal.classList.add('d-none')
    mealDetails.classList.replace('d-none', 'd-flex')
    displayMealDetails(y)
}

async function runMealIngred(y) {
    categoryItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    categoryMeal.classList.add('d-none')
    areaMeal.classList.add('d-none')
    mealDetails.classList.add('d-none')
    IngredItem.classList.add('d-none')
    homeItem.classList.replace('d-none', 'd-flex')
    displayData(y)
}

async function runIngred() {
    homeItem.classList.add('d-none')
    categoryItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    categoryMeal.classList.add('d-none')
    mealDetails.classList.remove('d-flex')
    mealDetails.classList.add('d-none')
    IngredItem.classList.replace('d-none', 'd-flex')
    searchPage.classList.add('d-none')
    contact.classList.add('d-none')
    let y = await getIngred();
    displayIngred(y);
}

async function runSearchByName(y) {
    areaItem.classList.add('d-none')
    mealDetails.classList.replace('d-flex', 'd-none')
    IngredItem.classList.replace('d-flex', 'd-none')
    displaySearchByName(y);
}

async function runSearchByLetter(y) {
    areaItem.classList.add('d-none')
    mealDetails.classList.replace('d-flex', 'd-none')
    IngredItem.classList.replace('d-flex', 'd-none')
    displaySearchByLetter(y);
}


function displayData(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getMealDetails('${arr[i].idMeal}')">
            <div class="position-relative item overflow-hidden">
                <figure>
                    <img src="${arr[i].strMealThumb}" alt="">
                </figure>
                <div class="layer">
                    <h5 class="position-absolute top-50 ps-2">${arr[i].strMeal}</h5>
                </div>
            </div>
        </div>
        `
    }

    homeItem.innerHTML = cartoona;
}

function displaySearchByName(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getMealDetails('${arr[i].idMeal}')">
            <div class="position-relative item">
                <figure>
                    <img src="${arr[i].strMealThumb}" alt="">
                </figure>
                <div class="layer">
                    <h5 class="position-absolute top-50 ps-2">${arr[i].strMeal}</h5>
                </div>
            </div>
        </div>
        `
    }

    searchByNameResults.innerHTML = cartoona;
}

function displaySearchByLetter(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getMealDetails('${arr[i].idMeal}')">
            <div class="position-relative item">
                <figure>
                    <img src="${arr[i].strMealThumb}" alt="">
                </figure>
                <div class="layer">
                    <h5 class="position-absolute top-50 ps-2">${arr[i].strMeal}</h5>
                </div>
            </div>
        </div>
        `
    }

    searchByNameResults.innerHTML = cartoona;
}

function displayCategory(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        let strCategoryDescription = arr[i].strCategoryDescription.substring(0, 150);
        cartoona += `
        <div class="col-md-3" onclick="getCategoryMeals('${arr[i].strCategory}');">
                        <div class="position-relative item">
                            <figure>
                                <img src="${arr[i].strCategoryThumb}" alt="">
                            </figure>
                            <div class="layer text-center">
                                <h5 class="pt-2">${arr[i].strCategory}</h5>
                                <p class="p-2">${strCategoryDescription}</p>
                            </div>
                        </div>
                    </div>
        `
    }

    categoryItem.innerHTML = cartoona;
}

function displayCategoryMeals(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getMealDetails('${arr[i].idMeal}')">
            <div class="position-relative item">
                <figure>
                    <img src="${arr[i].strMealThumb}" alt="">
                </figure>
                <div class="layer">
                    <h5 class="position-absolute top-50 p-2">${arr[i].strMeal}</h5>
                </div>
            </div>
        </div>
        `
    }

    categoryMeal.innerHTML = cartoona;
}

function displayAreaMeals(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getMealDetails('${arr[i].idMeal}')">
            <div class="position-relative item">
                <figure>
                    <img src="${arr[i].strMealThumb}" alt="">
                </figure>
                <div class="layer">
                    <h5 class="position-absolute top-50 p-2">${arr[i].strMeal}</h5>
                </div>
            </div>
        </div>
        `
    }

    areaMeal.innerHTML = cartoona;
}

function displayArea(arr) {
    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {
        cartoona += `
        <div class="col-md-3" onclick="getAreaMeals('${arr[i].strArea}')">
                        <div class="position-relative item text-white text-center">
                            <figure>
                                <i class="fa-solid fa-house-laptop fa-4x"></i>
                            </figure>
                                <h5 class="pt-1 pb-2">${arr[i].strArea}</h5>
                        </div>
                    </div>
        `
    }

    areaItem.innerHTML = cartoona;
}

function displayIngred(arr) {

    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {

        // var strDescription = arr[i].strDescription.slice(0, 150);
        // <p class="p-2">${strDescription}</p>

        cartoona += `<div class="col-md-3" onclick="getMealIngred('${arr[i].strIngredient}')">
        <div class="position-relative item text-center text-white pb-4"> 
            <figure>
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            </figure>
            <div class="ingred-text">
                <h5 class="pt-2">${arr[i].strIngredient}</h5>
            </div>
        </div>
    </div>

        `
    }

    IngredItem.innerHTML = cartoona;
}

function displayMealDetails(arr) {


    let cartoona = "";

    for (let i = 0; i < arr.length; i++) {

        const meal = arr[i];
        cartoona += `
        <div class="col-md-4">
        <figure>
            <img src="${meal.strMealThumb}" alt="" class="w-100">
            </figure>
            <figcaption>
                <h3>${meal.strMeal}</h3>
            </figcaption>
          </div>
        <div class="col-md-8">
        <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
                 <h3>Area : ${meal.strArea}</h3>
                <h3>Category : ${meal.strCategory}</h3>
          <div class="recipes">
            <h3 class="pb-2">Recipes :</h3>
            <div class="recipes-btns">
              `;
        for (let j = 1; j <= 20; j++) {
            const measure = meal[`strMeasure${j}`];
            const ingredient = meal[`strIngredient${j}`];

            if (measure && ingredient) {
                cartoona += `
            <button class="btn btn-info mb-3 me-1">
              ${measure} ${ingredient}
            </button>
          `;
            }
        }
        cartoona += `
            </div>
          </div>
          <div class="detailsBottom mb-5">
            <h3 class="pb-3">Tags :</h3>
            <div class="d-flex">`
        if (`${meal.strTags}`) {

            let tags = meal.strTags?.split(",")
            if (!tags) tags = []

            let tagsStr = ''
            for (let i = 0; i < tags.length; i++) {
                tagsStr += `
                <button class="btn mb-4 me-1 tag-btn">
                ${tags[i]}
            </button>`
            }
            cartoona += `
            ${tagsStr}`
        }
        cartoona += `
            </div>
            <button class="btn btn-success"><a href="${arr[i].strSource}">Source</a></button>
            <button class="btn btn-danger"><a href="${arr[i].strYoutube}">Youtube</a></button>
            </div>
                
            </div>
          </div>
      `;
    }

    mealDetails.innerHTML = cartoona;
}

function showSearchLayer() {
    categoryItem.classList.add('d-none')
    homeItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    IngredItem.classList.add('d-none')
    searchPage.classList.remove('d-none')
    contact.classList.add('d-none')
    searchLayer.innerHTML = `
    <div class="col-md-6">
    <input type="text" class="form-control bg-transparent w-100" onkeyup="getSearchByName(this.value)" placeholder="Search By Name">
</div>
<div class="col-md-6">
    <input type="text" class="form-control bg-transparent w-100" onkeyup="getSearchByLetter(this.value)" maxlength="1" placeholder="Search By First Letter">
</div>`
}

function showContactLayer() {
    categoryItem.classList.add('d-none')
    homeItem.classList.add('d-none')
    areaItem.classList.add('d-none')
    IngredItem.classList.add('d-none')
    searchPage.classList.add('d-none')
    mealDetails.classList.add('d-none')
    areaMeal.classList.add('d-none')
    contact.classList.remove('d-none')

    contact.innerHTML = `
    <div class="col-md-6">
                            <input type="text" class="form-control w-100" placeholder="Enter Your Name" id="nameInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="nameAlert">Special characters and numbers not allowed</h6>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control w-100" placeholder="Enter Your Email" id="emailInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="emailAlert">Email not valid *exemple@yyy.zzz</h6>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control w-100" placeholder="Enter Your Phone" id="phoneInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="phoneAlert">Enter valid Phone Number</h6>
                        </div>
                        <div class="col-md-6">
                            <input type="number" class="form-control w-100" placeholder="Enter Your Age" id="ageInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="ageAlert">Enter valid age</h6>
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control w-100" placeholder="Enter Your Password" id="passwordInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="passwordAlert">Enter valid password *Minimum eight characters,
                                at least one letter and one number:*</h6>
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control w-100" placeholder="Repassword" id="repasswordInput" onkeyup="validation()">
                            <h6 class="p-3 rounded-2 mt-2 text-center d-none" id="repasswordAlert">Enter valid repassword</h6>
                        </div>
                        <button class="btn btn-outline-danger text-center" disabled id="submitBtn">Submit</button>
    `




    document.getElementById("nameInput").addEventListener("focus", () => {
        nameChagned = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailChagned = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneChagned = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageChagned = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordChagned = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordChagned = true
    })
}

let nameChagned = false;
let emailChagned = false;
let phoneChagned = false;
let ageChagned = false;
let passwordChagned = false;
let repasswordChagned = false;


function validation() {
    if (nameChagned) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailChagned) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneChagned) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageChagned) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordChagned) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordChagned) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

// test function dy b3ml beha test 3la el regex w lw sa7 btrg3 true w lw ghalat btrga3 false

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}


function openSide() {
    $("#sideNav").animate({
        left: 0
    }, 500)
    $(".menu").removeClass("fa-align-justify");
    $(".menu").addClass("fa-x");

    for (let i = 0; i < 5; i++) {
        $(".list").eq(i).animate({
            top: 35
        }, 500)
    }

}

function closeSide() {
    $("#sideNav").animate({
        left: -255
    }, 500)
    $(".menu").removeClass("fa-x");
    $(".menu").addClass("fa-align-justify");

    for (let i = 0; i < 5; i++) {
        $(".list").eq(i).animate({
            top: 300
        }, 500)
    }

}

// closeSide()
$("#sideNav").click(() => {
    if ($("#sideNav").css("left") == "0px") {
        closeSide()
    } else {
        openSide()
    }
})


async function run() {
    let y = await defaultView();
    displayData(y);
}

$(function () {
    $('.loader').fadeOut(500, function () {
        $('.screenloading').slideUp(500)
        $('body').css('overflow', 'auto')
    });
});