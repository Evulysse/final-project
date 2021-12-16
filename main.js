const travelForm = document.querySelector("#travelForm");
const destination = document.querySelector("#destination");
const travelDate = document.querySelector("#travelDate");


travelForm.addEventListener('submit',function (event) {
 event.preventDefault();
})

// Create new plans when clicking on the "ADD" button
function addNewPlans() {
	
	if (addItem.value != "ADD NEW PLANS") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("myInput").value;

		addItem.value = "ADD NEW PLANS";
		addItem.style="background-color:aqua"

		document.getElementById("myInput").value = "";
		return false;
    }
}