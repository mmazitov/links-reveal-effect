document.addEventListener('DOMContentLoaded', function () {
	initFetchProfiles();
});

function initFetchProfiles() {
	fetch('../data/profiles.json') // Убедитесь, что путь к файлу корректный
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			}
			return response.json();
		})
		.then(profiles => {
			initProfiles(profiles);
		})
		.catch(error => console.error('Error loading profiles:', error));
}

function initProfiles(profiles) { // Добавлено profiles как аргумент
	const profileCardsContainer = document.querySelector('.profile-cards');

	profiles.forEach(profile => {
		const card = document.createElement('div');
		card.classList.add('profile-card');

		const img = document.createElement('img');
		img.src = profile.avatar;
		img.alt = profile.name;

		const name = document.createElement('h2');
		name.textContent = profile.name;

		const bio = document.createElement('p');
		bio.textContent = profile.bio;

		card.appendChild(img);
		card.appendChild(name);
		card.appendChild(bio);

		profileCardsContainer.appendChild(card);
	});
}
