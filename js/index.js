const welcomeAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=`;
const categoryAPI = `//www.themealdb.com/api/json/v1/1/categories.php`;
const areaAPI = `//www.themealdb.com/api/json/v1/1/list.php?a=list`;
const ingredientsAPI = `//www.themealdb.com/api/json/v1/1/list.php?i=list`;
// ********Searcing*********
let nameSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
let letterSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?f=a`;

$(".spinner").show();

$(function () {
  $(".spinner").hide();
  function navAnimate(start, step, type) {
    let btm;
    if (type === "show") {
      btm = "0px";
    } else if (type === "hide") {
      btm = "-300px";
    }
    $(".nav-links li.item1").animate({ bottom: btm, opacity: "1" }, start);
    $(".nav-links li.item2").animate(
      { bottom: btm, opacity: "1" },
      start + step
    );
    $(".nav-links li.item3").animate(
      { bottom: btm, opacity: "1" },
      start + 2 * step
    );
    $(".nav-links li.item4").animate(
      { bottom: btm, opacity: "1" },
      start + 3 * step
    );
    $(".nav-links li.item5").animate(
      { bottom: btm, opacity: "1" },
      start + 4 * step
    );
  }
  $(".open-btn").click(function () {
    $("aside").animate({ left: "0" });
    $(this).addClass("d-none");
    $(".close-btn").removeClass("d-none");
    navAnimate(1200, 100, "show");
  });
  $(".close-btn").click(function () {
    $(".open-btn").removeClass("d-none");
    $(this).addClass("d-none");
    navAnimate(1200, 100, "hide");
    $("aside").animate({ left: "-208.330px" });
  });

  (function () {
    getWelcomeAPI();
    $("section.welcome").show().siblings().hide();
  })();
  $("li").click(function () {
    let secName = $(this).text().toLowerCase().split(" ").join("");
    $(`section.${secName}`).show().siblings().hide();
  });
  async function getMealAPI(id) {
    $(".spinner").show();
    let Meal = await fetch(
      `//www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let res = await Meal.json();

    console.log(id);
    displayMealDetails(res.meals);
    $(".spinner").hide();
  }
  function displayMealDetails(data) {
    let box = ``;
    console.log(data[0]);
    let {
      strMealThumb,
      strMeal,
      strInstructions,
      strArea,
      strCategory,
      strTags,
      strSource,
      strMeasure1,
      strMeasure2,
      strMeasure3,
      strMeasure4,
      strMeasure5,
      strMeasure6,
      strMeasure7,
      strMeasure8,
      strMeasure9,
      strMeasure10,
      strMeasure11,
      strMeasure12,
      strMeasure13,
      strMeasure14,
      strMeasure15,
      strMeasure16,
      strMeasure17,
      strMeasure18,
      strMeasure19,
      strMeasure20,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strIngredient15,
      strIngredient16,
      strIngredient17,
      strIngredient18,
      strIngredient19,
      strIngredient20,
    } = data[0];
    let strTagsBox = strTags?.split(",").map((tag) => `<li>${tag}</li>`);
    box += `
  <div class="col-lg-4 col-12">
  <div class="meal">
    <div class="meal-image"> <img class="w-100" src=${strMealThumb} alt=""></div>
    <div class="meal-name"> 
      <p>${strMeal}</p>
    </div>
  </div>
</div>
<div class="col-lg-8 col-12"> 
  <div class="meal-details"> 
    <h2>Instructions</h2>
    <p>${strInstructions}</p>
    <p><span>Area : ${strArea}</span></p>
    <p><span>Category : ${strCategory}</span></p>
    <h3>Recipes :</h3>
    <ul> 
      ${
        strMeasure1 &&
        strIngredient1 &&
        `<li>${strMeasure1} ${strIngredient1}</li>`
      } <li>${strMeasure1} ${strIngredient1}</li>
      ${
        strMeasure2 &&
        strIngredient2 &&
        `<li>${strMeasure2} ${strIngredient2}</li>`
      }
      ${
        strMeasure3 &&
        strIngredient3 &&
        `<li>${strMeasure3} ${strIngredient3}</li>`
      }
      ${
        strMeasure4 &&
        strIngredient4 &&
        `<li>${strMeasure4} ${strIngredient4}</li>`
      }
      ${
        strMeasure5 &&
        strIngredient5 &&
        `<li>${strMeasure5} ${strIngredient5}</li>`
      }
      ${
        strMeasure6 &&
        strIngredient6 &&
        `<li>${strMeasure6} ${strIngredient6}</li>`
      }
      ${
        strMeasure7 &&
        strIngredient7 &&
        `<li>${strMeasure7} ${strIngredient7}</li>`
      }
      ${
        strMeasure8 &&
        strIngredient8 &&
        `<li>${strMeasure8} ${strIngredient8}</li>`
      }
      ${
        strMeasure9 &&
        strIngredient9 &&
        `<li>${strMeasure9} ${strIngredient9}</li>`
      }
      ${
        strMeasure10 &&
        strIngredient10 &&
        `<li>${strMeasure10} ${strIngredient10}</li>`
      }
      ${
        strMeasure11 &&
        strIngredient11 &&
        `<li>${strMeasure11} ${strIngredient11}</li>`
      }
      ${
        strMeasure12 &&
        strIngredient12 &&
        `<li>${strMeasure12} ${strIngredient12}</li>`
      }
      ${
        strMeasure13 &&
        strIngredient13 &&
        `<li>${strMeasure13} ${strIngredient13}</li>`
      }
      ${
        strMeasure14 &&
        strIngredient14 &&
        `<li>${strMeasure14} ${strIngredient14}</li>`
      }
      ${
        strMeasure15 &&
        strIngredient15 &&
        `<li>${strMeasure15} ${strIngredient15}</li>`
      }
      ${
        strMeasure16 &&
        strIngredient16 &&
        `<li>${strMeasure16} ${strIngredient16}</li>`
      }
      ${
        strMeasure17 &&
        strIngredient17 &&
        `<li>${strMeasure17} ${strIngredient17}</li>`
      }
      ${
        strMeasure18 &&
        strIngredient18 &&
        `<li>${strMeasure18} ${strIngredient18}</li>`
      }
      ${
        strMeasure19 &&
        strIngredient19 &&
        `<li>${strMeasure19} ${strIngredient19}</li>`
      }
      ${
        strMeasure20 &&
        strIngredient20 &&
        `<li>${strMeasure20} ${strIngredient20}</li>`
      }
      

    </ul>
    
    <h3>Tags :</h3>
    ${
      strTags
        ? `
      <ul> 
      ${strTagsBox}
      </ul>
      `
        : ``
    }
    <a class="btn btn-success text-white me-2" href=${strSource} target="_blank">Source</a><a class="btn youtube text-white" href=${
      data[0].strYoutube
    } target="_blank">Youtube</a>
  </div>
</div>
  `;
    $("#details").html(box);
  }
  async function getWelcomeAPI() {
    $(".spinner").show();
    let wel = await fetch(welcomeAPI);
    let res = await wel.json();
    displayWelcome(res.meals);
    $(".spinner").hide();
  }
  function displayWelcome(data) {
    let box = ``;
    let meal = data.map((meal, index) => {
      // console.log(meal);
      box += `
    <div class="col-lg-3 col-md-6 col-12">
    <div class="category" id=${meal.idMeal}><img src=${meal.strMealThumb} alt="">
      <p>${meal.strMeal}</p>
    </div>
  </div>
    `;
      $("#welcome").html(box);
      // console.log(meal.idMeal);
    });
    $(".category").click(function () {
      getMealAPI(this.id);
      // console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  function getSearchAPI() {
    $("#sName").keyup(async function (e) {
      $(".spinner").show();
      nameSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`;
      try {
        let ser = await fetch(nameSearchAPI);
        let res = await ser.json();
        console.log(ser);
        displaySearch(res.meals);
        $(".spinner").hide();
      } catch (error) {
        console.log(error);
      }
    });
    $("#sLetter").keyup(async function (e) {
      letterSearchAPI = `//www.themealdb.com/api/json/v1/1/search.php?f=${e.target.value}`;
      try {
        let ser = await fetch(letterSearchAPI);
        let res = await ser.json();
        console.log(ser);
        displaySearch(res.meals);
      } catch (error) {
        console.log(error);
      }
    });
  }
  function displaySearch(data) {
    let box = ``;
    let ser = data.map((ser, index) => {
      box += `
    <div class="col-lg-3 col-md-6 col-12">
    <div class="item" id=${ser.idMeal}>
    <img src=${ser.strMealThumb} alt="">
      <p>${ser.strMeal}</p>
    </div>
  </div>
    `;
      $("#search").html(box);
    });
    $(".item").click(function () {
      getMealAPI(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  getSearchAPI();

  async function getCategoriesAPI() {
    $(".spinner").show();
    let cat = await fetch(categoryAPI);
    let res = await cat.json();
    displayCategories(res.categories);
    $(".spinner").hide();
  }

  function displayCategories(data) {
    let box = ``;
    let cat = data.map((cat, index) => {
      box += `
    <div class="col-lg-3 col-md-6 col-12">
    <div class="categories" id=${cat.strCategory}><img src=${
        cat.strCategoryThumb
      } alt="">
      <div class="description">
        <p>${cat.strCategory}</p>
        <p>${cat.strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </div>
  </div>
    `;
      $("#categories").html(box);
    });
    $("div.categories").click(function () {
      getCategoryListAPI(this.id);
      $("section.categorylist").show().siblings().hide();
    });
  }
  getCategoriesAPI();
  async function getCategoryListAPI(id) {
    $(".spinner").show();
    let cat = await fetch(
      `//www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
    );
    let res = await cat.json();
    displayCategoryList(res.meals);
    $(".spinner").hide();
  }
  function displayCategoryList(data) {
    let box = ``;
    console.log(data);
    let cat = data.map((cat, index) => {
      box += `
    <div class="col-lg-3 col-md-6 col-12">
    <div class="categorylist" id=${cat.idMeal}><img src=${cat.strMealThumb} alt="">
      <p>${cat.strMeal}</p>
    </div>
  </div>
  `;
      $("#categorylist").html(box);
    });

    $("div.categorylist").click(function () {
      getMealAPI(this.id);
      console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  async function getAreaAPI() {
    $(".spinner").show();
    let area = await fetch(areaAPI);
    let res = await area.json();
    let filteredMeal = res.meals.filter((meal,index)=> index < 20)
    displayArea(filteredMeal);
    $(".spinner").hide();
  }
  function displayArea(data) {
    let box = ``;
    let area = data.map((area, index) => {
      box += `
      <div class="col-lg-3 col-md-6 col-12">
      <div class="area" id=${area.strArea}><i class="fa-solid fa-city fa-3x"></i>
        <p>${area.strArea}</p>
      </div>
    </div>
      `;
      $("#area").html(box);
    });
    $("div.area").click(function () {
      getAreaListAPI(this.id);
      $("section.arealist").show().siblings().hide();
    });
  }
  async function getAreaListAPI(id) {
    $(".spinner").show();
    let cat = await fetch(
      `//www.themealdb.com/api/json/v1/1/filter.php?a=${id}`
    );
    let res = await cat.json();
    displayAreaList(res.meals);
    $(".spinner").hide();
  }
  function displayAreaList(data) {
    let box = ``;
    let area = data.map((area, index) => {
      box += `
      <div class="col-lg-3 col-md-6 col-12">
      <div class="arealist" id=${area.idMeal}><img src=${area.strMealThumb} alt="">
        <p>${area.strMeal}</p>
      </div>
    </div>
    `;
      $("#arealist").html(box);
    });

    $("div.arealist").click(function () {
      getMealAPI(this.id);
      console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  getAreaAPI();
  async function getIngredientsAPI() {
    $(".spinner").show();
    let area = await fetch(ingredientsAPI);
    let res = await area.json();
    let filteredMeals = res.meals.filter(
      (meal,index) => meal.strDescription !== null && meal.strDescription !== "" && index < 20
    );
    displayIngredients(filteredMeals);
    $(".spinner").hide();
  }
  function displayIngredients(data) {
    let box = ``;
    let ingredients = data.map((ingredient, index) => {
      box += `
      <div class="col-lg-3 col-md-6 col-12">
      <div class="ingredient" id=${
        ingredient.strIngredient
      }><i class="fa-solid fa-bowl-food fa-3x"></i>
        <p>${ingredient.strIngredient}</p>
        <p>${ingredient.strDescription?.split(" ").slice(0, 20).join(" ")}</p>
      </div>
    </div>
      `;
      $("#ingredients").html(box);
    });
    $(".ingredient").click(function () {
      getIngredientsListAPI(this.id);
      $("section.ingredientslist").show().siblings().hide();
    });
  }
  getIngredientsAPI();
  async function getIngredientsListAPI(id) {
    $(".spinner").show();
    let cat = await fetch(
      `//www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
    );
    let res = await cat.json();
    displayIngredientsList(res.meals);
    $(".spinner").hide();
  }
  function displayIngredientsList(data) {
    let box = ``;
    let area = data.map((area, index) => {
      box += `
      <div class="col-lg-3 col-md-6 col-12">
      <div class="ingredientslist" id=${area.idMeal}><img src=${area.strMealThumb} alt="">
        <p>${area.strMeal}</p>
      </div>
    </div>
    `;
      $("#ingredientslist").html(box);
    });

    $("div.ingredientslist").click(function () {
      getMealAPI(this.id);
      console.log(this.id);
      $("section.details").show().siblings().hide();
    });
  }
  let NameRX = /^[a-zA-Z ]+$/;
  let EmailRX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let PhoneRX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let AgeRX = /^[1-9][0-9]?$|^100$/;
  let PasswordRX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  let NameValidate;
  let EmailValidate;
  let PhoneValidate;
  let AgeValidate;
  let PasswordValidate;
  let RePasswordValidate;
  $("#userName").keyup(function (e) {
    NameValidate = NameRX.test(e.target.value);
    if (NameValidate) {
      $("#userNameAlert").hide();
    } else {
      $("#userNameAlert")
        .text("Name is not valid ")
        .css({ color: "red" })
        .show();
    }
    // return NameValidate;
  });
  $("#userMail").keyup(function (e) {
    EmailValidate = EmailRX.test(e.target.value);
    if (EmailValidate) {
      $("#userMailAlert").hide();
    } else {
      $("#userMailAlert")
        .text("Email is not valid")
        .css({ color: "red" })
        .show();
    }
  });
  $("#userPhone").keyup(function (e) {
    PhoneValidate = PhoneRX.test(e.target.value);
    if (PhoneValidate) {
      $("#userPhoneAlert").hide();
    } else {
      $("#userPhoneAlert")
        .text("phone is not valid")
        .css({ color: "red" })
        .show();
    }
  });
  $("#userAge").keyup(function (e) {
    AgeValidate = AgeRX.test(e.target.value);
    if (AgeValidate) {
      $("#userAgeAlert").hide();
    } else {
      $("#userAgeAlert").text("Age is not valid").css({ color: "red" }).show();
    }
  });
  $("#userPassword").keyup(function (e) {
    PasswordValidate = PasswordRX.test(e.target.value);
    if (e.target.value.length < 8) {
      $("#userPasswordAlertMin")
        .text("At Least 8 Characters")
        .css({ color: "red" })
        .show();
    } else {
      $("#userPasswordAlertMin")
        .text("At Least 8 Characters")
        .css({ color: "green" })
        .show();
    }
    if (!/[A-Z]/g.test(e.target.value)) {
      $("#userPasswordAlertUpper")
        .text("At Least one uppercase letter")
        .css({ color: "red" })
        .show();
    } else {
      $("#userPasswordAlertUpper")
        .text("At Least one uppercase letter")
        .css({ color: "green" })
        .show();
    }
    if (!/[0-9]/g.test(e.target.value)) {
      $("#userPasswordAlertNumbers")
        .text("At Least one numeric character")
        .css({ color: "red" })
        .show();
    } else {
      $("#userPasswordAlertNumbers")
        .text("At Least one numeric character")
        .css({ color: "green" })
        .show();
    }
    if (!/[a-z]/g.test(e.target.value)) {
      $("#userPasswordAlertLower")
        .text("At Least one lowercase letter")
        .css({ color: "red" })
        .show();
    } else {
      $("#userPasswordAlertLower")
        .text("At Least one lowercase letter")
        .css({ color: "green" })
        .show();
    }
    if (!/[@#$!%*?&]/g.test(e.target.value)) {
      $("#userPasswordAlertSpecial")
        .text("At Least one special character")
        .css({ color: "red" })
        .show();
    } else {
      $("#userPasswordAlertSpecial")
        .text("At Least one special character")
        .css({ color: "green" })
        .show();
    }
    // $("#userPasswordAlertMin").text("password is not valid").css({'color' : 'red'}).show()
  });
  $("#userRePassword").keyup(function (e) {
    RePasswordValidate = e.target.value == $("#userPassword").val();
    if (RePasswordValidate) {
      $("#userRePasswordAlert")
        .text("password matched")
        .css({ color: "green" })
        .show();
    } else {
      $("#userRePasswordAlert")
        .text("password is not match")
        .css({ color: "red" })
        .show();
    }
  });
  function isValidate() {
    return (
      NameRX.test($("#userName").val()) &&
      EmailRX.test($("#userMail").val()) &&
      PhoneRX.test($("#userPhone").val()) &&
      AgeRX.test($("#userAge").val()) &&
      PasswordRX.test($("#userPassword").val()) &&
      RePasswordValidate
    );
  }
  $(".contact-form").change(function () {
    console.log("Changed");
    if (isValidate()) {
      $("#btn-submit").removeClass("disabled");
    } else {
      $("#btn-submit").addClass("disabled");
    }
  });
  $("#btn-submit").click(function (e) {
    e.preventDefault();
  });
});
