submitBtn = document.querySelector('#btnFood')
itemInput = document.querySelector('#inputFood')
list = document.querySelector('#list')

submitBtn.addEventListener('click', addItem);

let arr = []

function addItem (evt) {
    evt.preventDefault();
    let newItem = itemInput.value;
    arr.push(newItem)


    arr.forEach(item => {
        let li = document.createElement('li')
        li.className ="item"
        li.innerHTML = `<p>${item}</p>`;
        list.appendChild(li);

    itemInput.value = "";
    arr.length= ""
    })

    console.log(arr);
}