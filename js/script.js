window.addEventListener("load", function () {
  const users = [
    {
      name: "Lisa",
      gender: "F",
      age: 11,
      hobby: "Pets",
      avatar: "avatar1.png",
    },
    {
      name: "Betty",
      gender: "F",
      age: 16,
      hobby: "Pets",
      avatar: "avatar2.png",
    },
    {
      name: "Pappy",
      gender: "M",
      age: 14,
      hobby: "music",
      avatar: "avatar3.png",
    },
    {
      name: "Christopher",
      gender: "M",
      age: 15,
      hobby: "Sports",
      avatar: "avatar4.png",
    },
    {
      name: "Akousa",
      gender: "F",
      age: 17,
      hobby: "Reading",
      avatar: "avatar5.png",
    },
    {
      name: "Paul",
      gender: "M",
      age: 19,
      hobby: "Shopping",
      avatar: "avatar6.png",
    },
    {
      name: "Charlie",
      gender: "M",
      age: 22,
      hobby: "Pets",
      avatar: "avatar7.png",
    },
    {
      name: "Kojo",
      gender: "M",
      age: 23,
      hobby: "Sports",
      avatar: "avatar3.png",
    },
    {
      name: "Ama",
      gender: "F",
      age: 25,
      hobby: "Pets",
      avatar: "avatar6.png",
    },
  ];

  var results = document.getElementById("results");

  function search() {
    //get hobby
    var hobbyField = document.getElementById("hobby");
    var hobby = hobbyField.value;

    //get gender
    var genderField = document.getElementById("gender");
    var s = genderField.selectedIndex;
    var gender = genderField.options[s].value;

    var resultsHtml = "";
    var usersLength = users.length;

    const minAgeF = document.getElementById("minAge");
    const maxAgeF = document.getElementById("maxAge");
    let maxAge = maxAgeF.value;
    let minAge = minAgeF.value;

    for (var i = 0; i < usersLength; i++) {
      const output =
        '<div class="card">\
            <img src="img/' +
        users[i].avatar +
        '" class="img"/>\
            <div class="person-info">\
            <div>' +
        users[i].name +
        "</div>\
            <div>" +
        users[i].hobby +
        "</div>\
            <div>" +
        users[i].age +
        '</div>\
            </div>\
             <button class="like">Add as friend</button></div>';
      //check gender
      if (gender == "A" || gender == users[i].gender) {
        //check hobby
        if (hobby == "" || hobby == users[i].hobby) {
          // resultsHtml += output
          if (!minAge || !maxAge) {
            resultsHtml += output;
          } else if (users[i].age >= minAge && users[i].age <= maxAge) {
            resultsHtml += output;
          }
          // resultsHtml += output
        }
      }
    }

    results.innerHTML = resultsHtml;
  }

  var searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", search);
});
