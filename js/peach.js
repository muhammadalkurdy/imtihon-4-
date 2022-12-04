const elcontainer = document.querySelector('.cart_collection');
const elTodo = document.querySelector('.todo')
const elul = document.querySelector(".cart_collection")

async function getElResponse() {
    let data = await fetch("https://www.googleapis.com/books/v1/volumes?q=${search}+terms")
    try {
      let response = await data.json();
      
      console.log(response);
      for (let obj in response.items) {
        
        for (let i = 0; i <= 10; i++) {
          const ElLi = document.createElement("li");
          ElLi.classList.add('cart_li')
          ElLi.innerHTML = `
      <li class="">
               <div class="book__img-wrapper">
                <img
          class="cart_image"
          src="${response.items[i].volumeInfo.imageLinks.smallThumbnail}"
          alt="one book"
        />
      </div>
      <div class="book__item-content">
        <h3 class="cart_text_one">${response.items[i].volumeInfo.title}</h3>
        <span class="cart_text_two">${response.items[i].volumeInfo.authors}</span>
        <p class="cart_text-there">${response.items[i].volumeInfo.publishedDate}</p>
      </div>
      <div class="cart_item_btn">
        <button class="cart_item_btn-1">Bookmark</button>
        <button class="cart_item_btn-2">More Info</button>
      </div>
      <button href="${response.items[i].volumeInfo.previewLink}" class="cart_item_btn-3">Read</button>
      </li>
        `;
          elcontainer.append(ElLi);

          if (i == 0) {
            elul.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.className === "cart_item_btn-1") {
                  const bookDiv = document.createElement("div")
                  bookDiv.classList.add("book_div")
                  bookDiv.innerHTML = `
                    <div class="todo_text">
                        <h2 class="todo_text_one">Python</h2>
                        <p class="todo_text_one">D.Dery</p>
                    </div>
                    <div class="todo_icon">
                        <img class="todo_cart_icon-one" src="./img/delete 1.svg" alt="icon">
                        <img class="todo_cart_icon-two" src="./img/book-open 1.svg" alt="icon">
                    </div>
          `
                  elTodo.append(bookDiv)
                }

              }
              )
            }
          }
        }
      } catch (error) {}
    }
    getElResponse()