const input = document.querySelector(".task-input");
const items = document.querySelector(".items");
const clear = document.querySelector(".clear");
const weekday = document.querySelector(".weekday");
const currentDate = document.querySelector(".date");
const hour = document.querySelector("h1");
const day = new Date().toLocaleString("en-us", {weekday: "long"});
const date = new Date().toLocaleDateString("default");
const dayHour = new Date().getHours();

// display current date and weekday
weekday.innerHTML = weekday.textContent + day;
currentDate.innerHTML = date;

if( dayHour > 12 && dayHour < 18 ) {
    hour.innerHTML = "Good afternoon,";
} else if (dayHour < 12 && dayHour > 6) {
    hour.innerHTML = "Good morning,";
} else{
    hour.innerHTML = "Good evening,";
}


input.addEventListener("change", () => {
    // create task wrapper
    const itemWrapper = document.createElement("div");
    itemWrapper.className = "item-wrapper";
    items.appendChild(itemWrapper);

    // create done checkbox
    const done = document.createElement("input");
    done.type = "checkbox";
    done.className = "done";
    itemWrapper.appendChild(done);

    // create task
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.setAttribute("readonly", true);
    inputText.value = input.value;
    input.value = "";
    itemWrapper.appendChild(inputText);

    // create edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    itemWrapper.appendChild(editBtn);

    // create delete button
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove";
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    itemWrapper.appendChild(removeBtn);

    // add line-through on completed task on click
    done.addEventListener("click", () => {
        inputText.classList.toggle("checked");
    })

    // remove task on click
    removeBtn.addEventListener("click", () => {
        itemWrapper.remove();
    })

    // edit task on click
    editBtn.addEventListener("click", () => {
        inputText.removeAttribute("readonly");
        inputText.focus();
        inputText.addEventListener("blur", () => {
            inputText.setAttribute("readonly", "true")
        })
    })
})

//clear all items in todo list
clear.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const btnYes = document.querySelector(".modal__btn-yes");
    const btnNo = document.querySelector(".modal__btn-no");

    modal.style.display = "block"
    btnYes.addEventListener("click", () => {
        items.innerHTML = ""
        modal.style.display = "none"
    })
    btnNo.addEventListener("click", () => {
        modal.style.display = "none"
    })
})
