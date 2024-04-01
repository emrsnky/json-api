async function mainData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let usersData = await response.json();
  console.log(usersData);
  usersData.forEach((user) => {
    createUserCard(user);
  });
}
mainData();

const userContainer = document.getElementById("user-container");
function createUserCard(user) {
  userContainer.innerHTML += `
  <div class="col-lg-10 col-md-12 col-xs-12 justify-content-center text-center user-cards pt-2 ">
  <div class="card-body row ">
     <i class="fa-regular fa-user fa-7x icons my-2"></i>
     <h5 class="card-title mb-5 text-white mt-2">${user.name}</h5>
     <div class="my-2 row ">
      <div class="col-lg-3 mx-auto  mx-4 mb-sm-4"><i class="fa-regular fa-building fa-3x icons"></i> 
      <div class="location text-white">
      <p class="mt-4"> Company Name:<br> ${user.company.name}.</p> <br> 
       
      </div>
      </div>
      <div class="col-lg-3 mx-auto  mx-4 mb-sm-4"><i class="fa-solid fa-location-dot fa-3x icons"></i>
      <div class="address text-white mt-4">
       Street: ${user.address.street} <br>
       Suite: ${user.address.suite} <br> 
       City: ${user.address.city} <br>
       Zipcode: ${user.address.zipcode} <br>
      </div>
      </div>
      <div class="col-lg-3 mx-auto  mx-4 mb-sm-4"><i class="fa-regular fa-envelope fa-3x icons"></i> 
      <div class="contact  text-white mt-4">
      E-mail:  ${user.email} <br>
      Phone:  ${user.phone} <br>
      Website:  ${user.website} <br>
    </div>
      </div>
      <div class="col-lg-3 mx-auto  mx-4 mb-sm-4"> <a href="/posts.html?userId=${user.id}" class="text-decoration-none">
      <i class="fa-regular fa-comment fa-3x text-white "></i>
      <p class="text-white mt-4">Click To See User's Posts</p></a>
      </div>
    </div>
  </div>
  
</div>
<div class="col-lg-10 col-md-12 col-xs-12" style="height: 30px; background-color: #315a72"></div>
  `;
}
