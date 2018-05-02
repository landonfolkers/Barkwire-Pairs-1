const getDogs = () => {
    return fetch("http://localhost:3000/api/dogs")
        .then(res => res.json())
        .then(data => addDogsToPage(data.dogs))
        .catch(err => console.error(err))
};

getDogs();

const addDogsToPage = dogs => {
    dogs.forEach(dog => {
        document.querySelector(".dogs").innerHTML += `
            <li>
                <h3 class="name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
                <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
                <p class="bio">${dog.bio}</p>
            </li>
        `;
    })
}