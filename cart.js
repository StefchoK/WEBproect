const alphaKey = "alpha"

function addToCart(photoPath, name) {
    let keys = localStorage.getItem(alphaKey);
    if(keys != null) {
        if(keys.split(",").includes(name));
        else {
            keys = keys.concat(",", name);
        }
    }
    else keys = name;
    localStorage[alphaKey] = keys;
    localStorage[name] = photoPath;
    alert("This product has been added to the cart");
}

function populateCart() {
    let keys = localStorage.getItem(alphaKey);
    if(keys == null) return;
    const keyArray = keys.split(",");
    for(let key in keyArray) {
        var value = localStorage.getItem(keyArray[key]);

        const div = document.createElement("div");
        div.setAttribute("align", "center");
        const img = document.createElement("img");
        img.src = value;
        img.className = "button";
        img.onclick = () => {removeElement(keyArray[key])};
        const h3 = document.createElement("h3");
        h3.innerHTML = keyArray[key]; 
        div.appendChild(img);
        div.appendChild(h3);
        const cart_items = document.getElementById("cart_items");
        cart_items.appendChild(div);
    }
}

function removeElement(name) {
    let keys = localStorage.getItem(alphaKey);
    keyArray = keys.split(",");
    let index = keyArray.indexOf(name);
    keyArray.splice(index, 1);
    let confirm = window.confirm("Do you want to remove this element from the cart?");
    if(confirm == 1) {
    if(keyArray.length === 0) {
        localStorage.removeItem(alphaKey);
    }
    else {
        keys = keyArray.join(",");
        localStorage[alphaKey] = keys;
    }
    location.reload();
    }
    else return;
}

function clearCart() {
    localStorage.removeItem(alphaKey);
    location.reload();
}
