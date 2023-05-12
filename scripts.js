function AddToCart(ele) {
	if (ele.innerHTML = "Add To Cart") {
		document.getElementById("cartnum").innerHTML = parseInt(document.getElementById("cartnum").innerHTML) + 1;
	}
	ele.innerHTML = "Added"
}