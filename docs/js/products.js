// This adds some nice ellipsis to the description:
// document.querySelectorAll(".projcard-description").forEach(function(box) {
// 	$clamp(box, {clamp: 6});
// });
let products = document.querySelectorAll(".products")
for(let i = 0; i < products.length; i++){
	products[i].addEventListener("mouseover", function(p){
		products[i].getElementsByClassName("my-3")[0].style.color = "rgba(0, 0, 0, 0.5)"
		products[i].getElementsByClassName("my-3")[0].classList.toggle("underlinet")
		// products[i].getElementsByTagName("img")[0].style.width = "75%"
		products[i].getElementsByTagName("img")[0].style.opacity = "0.8"
	})
	products[i].addEventListener("mouseout", function(p){
		products[i].getElementsByClassName("my-3")[0].style.color = "#333"
		products[i].getElementsByClassName("my-3")[0].classList.toggle("underlinet")
		// products[i].getElementsByTagName("img")[0].style.width = "70%"
		products[i].getElementsByTagName("img")[0].style.opacity = "1"
	})
}

//filling form with required product
function getParameterByName(name, url){
	name = name.replace(/[\[\]]/g, "\\$&")
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	    results = regex.exec(url);
	if(!results) return null;
	if(!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function prefillForm(){
	let prod = getParameterByName('product', window.location.href)
	document.getElementById("producti").value = prod;
}

let makhaneProducts = document.querySelectorAll(".makhana-slider .products");
let seedsProducts = document.querySelectorAll(".seeds-slider .products");
let dryfruitsProducts = document.querySelectorAll(".dryfruits-slider .products");

let popup11 = document.getElementById("popup11")
let closePopup11 = document.getElementById("closePopup11")
makhaneProducts[0].addEventListener("click", function(){
	popup11.showModal();
})
closePopup11.addEventListener("click", function(){
	popup11.close();
})

let popup12 = document.getElementById("popup12")
let closePopup12 = document.getElementById("closePopup12")
makhaneProducts[1].addEventListener("click", function(){
	popup12.showModal();
})
closePopup12.addEventListener("click", function(){
	popup12.close();
})

let popup13 = document.getElementById("popup13")
let closePopup13 = document.getElementById("closePopup13")
makhaneProducts[2].addEventListener("click", function(){
	popup13.showModal();
})
closePopup13.addEventListener("click", function(){
	popup13.close();
})

let popup14 = document.getElementById("popup14")
let closePopup14 = document.getElementById("closePopup14")
makhaneProducts[3].addEventListener("click", function(){
	popup14.showModal();
})
closePopup14.addEventListener("click", function(){
	popup14.close();
})

let popup15 = document.getElementById("popup15")
let closePopup15 = document.getElementById("closePopup15")
makhaneProducts[4].addEventListener("click", function(){
	popup15.showModal();
})
closePopup15.addEventListener("click", function(){
	popup15.close();
})

let popup21 = document.getElementById("popup21")
let closePopup21 = document.getElementById("closePopup21")
dryfruitsProducts[0].addEventListener("click", function(){
	popup21.showModal();
})
closePopup21.addEventListener("click", function(){
	popup21.close();
})

let popup22 = document.getElementById("popup22")
let closePopup22 = document.getElementById("closePopup22")
dryfruitsProducts[1].addEventListener("click", function(){
	popup22.showModal();
})
closePopup22.addEventListener("click", function(){
	popup22.close();
})

let popup23 = document.getElementById("popup23")
let closePopup23 = document.getElementById("closePopup23")
dryfruitsProducts[2].addEventListener("click", function(){
	popup23.showModal();
})
closePopup23.addEventListener("click", function(){
	popup23.close();
})

let popup24 = document.getElementById("popup24")
let closePopup24 = document.getElementById("closePopup24")
dryfruitsProducts[3].addEventListener("click", function(){
	popup24.showModal();
})
closePopup24.addEventListener("click", function(){
	popup24.close();
})

let popup25 = document.getElementById("popup25")
let closePopup25 = document.getElementById("closePopup25")
dryfruitsProducts[4].addEventListener("click", function(){
	popup25.showModal();
})
closePopup25.addEventListener("click", function(){
	popup25.close();
})

let popup31 = document.getElementById("popup31")
let closePopup31 = document.getElementById("closePopup31")
seedsProducts[0].addEventListener("click", function(){
	popup31.showModal();
})
closePopup31.addEventListener("click", function(){
	popup31.close();
})

let popup32 = document.getElementById("popup32")
let closePopup32 = document.getElementById("closePopup32")
seedsProducts[1].addEventListener("click", function(){
	popup32.showModal();
})
closePopup32.addEventListener("click", function(){
	popup32.close();
})

let popup33 = document.getElementById("popup33")
let closePopup33 = document.getElementById("closePopup33")
seedsProducts[2].addEventListener("click", function(){
	popup33.showModal();
})
closePopup33.addEventListener("click", function(){
	popup33.close();
})

let popup34 = document.getElementById("popup34")
let closePopup34 = document.getElementById("closePopup34")
seedsProducts[3].addEventListener("click", function(){
	popup34.showModal();
})
closePopup34.addEventListener("click", function(){
	popup34.close();
})

let popup35 = document.getElementById("popup35")
let closePopup35 = document.getElementById("closePopup35")
seedsProducts[4].addEventListener("click", function(){
	popup35.showModal();
})
closePopup35.addEventListener("click", function(){
	popup35.close();
})

let popup36 = document.getElementById("popup36")
let closePopup36 = document.getElementById("closePopup36")
seedsProducts[5].addEventListener("click", function(){
	popup36.showModal();
})
closePopup36.addEventListener("click", function(){
	popup36.close();
})

let popup37 = document.getElementById("popup37")
let closePopup37 = document.getElementById("closePopup37")
seedsProducts[6].addEventListener("click", function(){
	popup37.showModal();
})
closePopup37.addEventListener("click", function(){
	popup37.close();
})