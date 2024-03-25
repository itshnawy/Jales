function hnotify() {
    let nav = document.getElementById("navbar");
    let headern = document.createElement("div");
    headern.id = "headernoti";
    fetch('../assets/Json/hnotify.json') // Fetch the JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response
    })
    .then(data => {
        // Check if the fetched data is an array
        if (!Array.isArray(data)) {
            // If not an array, handle it appropriately
            if (typeof data === 'object') {
                // If it's a single object, wrap it in an array
                data = [data];
            } else {
                // Otherwise, throw an error
                throw new Error('Fetched data is not in a recognized format');
            }
        }
        // Iterate over each object in the JSON array
        data.forEach(item => {
            const ndata = item.notification;
            let vis = item.visibility;
            let row = document.createElement("div");
            row.id = "hrow";
            row.innerHTML = ndata;
            headern.appendChild(row);
                    
        if (vis == true) {
            nav.appendChild(headern);  
        }
        });

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
