let rideQueue = []

function addRide(){

    let rideId = document.getElementById("rideId").value
    let passenger = document.getElementById("passenger").value

    if(rideId === "" || passenger === ""){
        alert("Enter ride details")
        return
    }

    rideQueue.push({rideId, passenger})

    updateQueue()
}

function assignRide(){

    if(rideQueue.length === 0){
        alert("No rides waiting")
        return
    }

    let ride = rideQueue.shift()

    alert("Driver assigned to ride: " + ride.rideId)

    updateQueue()
}

function updateQueue(){

    let list = document.getElementById("queue")
    list.innerHTML = ""

    rideQueue.forEach(ride => {

        let li = document.createElement("li")
        li.textContent = ride.rideId + " - " + ride.passenger

        list.appendChild(li)
    })
}