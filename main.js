const form = document.getElementById("planner-form");

const originCountries = document.getElementById("origin-countries");
const destinationCountries = document.getElementById("destinastion-countries");
const trips = document.getElementById("trips");

const tripTemplate = document.getElementById("trip-template");
const DB = [];

function Trip(origin, destination, startDate, endDate) {
    this.origin = origin;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
}

function getChosenCountry(countries) {
    return countries.options[countries.selectedIndex].value;
}


function createTripElement(template, origin, destination, startDate, endDate) {
    const tripElement = document.importNode(template.content.firstElementChild, true);

    tripElement.querySelector("h2 .origin").textContent = origin;
    tripElement.querySelector("h2 .start-date").textContent = startDate;
    tripElement.querySelector("h2 .destination").textContent = destination;
    tripElement.querySelector("h2 .end-date").textContent = endDate;

    tripElement.querySelector(".add-plan button").addEventListener("click", event => {
        const input = tripElement.querySelector("input").value.trim();
       
        if(input) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.textContent = input;

            const edit = document.createElement("button");
            edit.textContent = "Edit";
            edit.type = "button";
            edit.style="background-color:aqua"
            edit.addEventListener("click", function edit(event){
                const span = event.target.previousSibling;
                const oldPlan = span.textContent;
                const newPlan = prompt("Edit", oldPlan);
                if(newPlan !== null) {
                    if(newPlan !== "") {
                        if(newPlan === oldPlan) {
                            return;
                        } else {
                            span.textContent = newPlan;
                        }
                    }
                }
            });

      
            const del = document.createElement("button");
            del.type = "button";
            del.textContent = "Delete";
            del.style="background-color:turquoise"

            del.addEventListener("click", function del(event) {
                event.target.parentElement.remove();
            });

            li.append(span, edit, del);

            tripElement.querySelector("ul").append(li);
        } 
       
    });

    return tripElement;
}

function planTrip(event) {
    event.preventDefault();

    const origin = getChosenCountry(originCountries);
    const destination = getChosenCountry(destinationCountries);
    const start = form.querySelector("#startDate").value;
    const end = form.querySelector("#endDate").value;

    if(!origin || !destination || !start || !end) {
        alert("Please enter the missing information");
        return;
    }

    const trip = new Trip(origin, destination, start, end);
    const tripElement = createTripElement(tripTemplate, trip.origin, trip.destination, trip.startDate, trip.endDate);

    trips.append(tripElement);

    console.log(trip);
    DB.push(trip);
}

form.addEventListener("submit", planTrip);