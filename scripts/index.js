let comment = document.getElementById("comment");
function postComment(event) {
  event.preventDefault();
  if (comment.value == "") {
    alert("comment cannot be empty");
  } else {
    post()
  }
}

function post() {
  let comment_list = document.getElementById("comment-list"); //selector comment list
  var li = document.createElement("li");
  li.setAttribute("class", "d-flex align-items-center fw-lighter mt-2");

  var imgavatar = document.createElement("img");
  imgavatar.setAttribute("src", "http://i.stack.imgur.com/Dj7eP.jpg");
  imgavatar.setAttribute("class", "avatar");
  li.appendChild(imgavatar); //menambahkan image ke li baru

  li.appendChild(document.createTextNode(comment.value)); //menambahkan text ke li
  comment_list.appendChild(li); // li nya ditambahkan ke comment list
  comment.value = "";
}
