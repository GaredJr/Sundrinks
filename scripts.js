function AddToCart(ele) {
	if (ele.innerText == "Add to cart") {
		document.getElementById("cartnum").innerHTML = parseInt(document.getElementById("cartnum").innerHTML) + 1;
		ele.innerHTML = "Added"
	} else {
		document.getElementById("cartnum").innerHTML = parseInt(document.getElementById("cartnum").innerHTML) - 1;
		ele.innerHTML = "Add to cart"
	}
	
}