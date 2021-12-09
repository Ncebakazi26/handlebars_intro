
document.addEventListener('DOMContentLoaded', function(){
    
    //... your code is here

    // get a reference to tableBody where users is to be displayed
    var elemName=document.querySelector("#form");
    var userDataElem = document.querySelector(".userData");
    //var userName =document.querySelector(".name")
    var userData = { users: [
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]};

      alert()
      
    // compile the template
    var templateSource = document.querySelector(".userTemplate").innerHTML;
    var userTemplate = Handlebars.compile(templateSource);
    var userDataHTML = userTemplate(userData);
    userDataElem.innerHTML = userDataHTML;
    elemName.innerHTML = userDataHTML;
    
});
//document.addEventListener('DOMContentLoaded', function(){
    // get a reference to the template script tag
   // 

    // compile the template
   /// 
//});