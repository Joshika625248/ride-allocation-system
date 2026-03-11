let rideQueue = []

function addRide(){

    let rideId = document.getElementById("rideId").value
    let passenger = document.getElementById("passenger").value

    if(rideId === "" || passenger === ""){
        alert("Enter ride details")
        return
    }

    rideQueue.push({rideId, passenger})
    document.getElementById("rideId").value = ""
    document.getElementById("passenger").value = ""

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
        li.innerHTML = "<strong>Ride:</strong> " + ride.rideId +
                       " | <strong>Passenger:</strong> " + ride.passenger

        list.appendChild(li)
    })
}