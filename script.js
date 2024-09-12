// Plant data (you can expand this)
const plantInfo = {
    "Tulsi": {
        "scientificName": "Ocimum sanctum",
        "medicinalUses": "Tulsi, also known as Holy Basil, is revered for its adaptogenic and immune-boosting properties. It helps in reducing stress, enhancing respiratory health, and balancing the body's doshas."
    },
    "Turmeric": {
        "scientificName": "Curcuma longa",
        "medicinalUses": "Turmeric, known for its active compound curcumin, has potent anti-inflammatory and antioxidant properties. It is used to support digestive health, improve skin conditions, and enhance overall immunity."
    },
    "Aloe Vera": {
        "scientificName": "Aloe barbadensis miller",
        "medicinalUses": "Aloe Vera is renowned for its soothing and healing properties. It is used to improve skin health, aid digestion, and support wound healing."
    },
    "Dandelion": {
        "scientificName": "Taraxacum officinale",
        "medicinalUses": "Dandelion is valued for its detoxifying properties. It supports liver health, aids digestion, and acts as a diuretic to promote kidney function."
    },
    "Lavender": {
        "scientificName": "Lavandula angustifolia",
        "medicinalUses": "Lavender is used for its calming and stress-relieving effects. It supports mental well-being, improves sleep quality, and can help alleviate headaches."
    },
    "Mint": {
        "scientificName": "Mentha spicata",
        "medicinalUses": "Mint is beneficial for its digestive and cooling properties. It helps relieve indigestion, soothe nausea, and freshen breath."
    },
    "Chamomile": {
        "scientificName": "Matricaria chamomilla",
        "medicinalUses": "Chamomile is known for its calming effects, making it useful for stress relief, promoting sleep, and soothing digestive issues."
    },
    "Barberry": {
        "scientificName": "Berberis vulgaris",
        "medicinalUses": "Barberry is used for its digestive support and antimicrobial properties. It helps in managing digestive disorders and improving liver function."
    },
    "Thyme": {
        "scientificName": "Thymus vulgaris",
        "medicinalUses": "Thyme has antimicrobial and expectorant properties. It supports respiratory health, boosts immunity, and has antiseptic qualities."
    },
    "Lemongrass": {
        "scientificName": "Cymbopogon citratus",
        "medicinalUses": "Lemongrass is used for its digestive benefits and calming effects. It helps in relieving stress, improving digestion, and detoxifying the body."
    },
    "Cinnamon": {
        "scientificName": "Cinnamomum verum",
        "medicinalUses": "Cinnamon is known for its warming and anti-inflammatory properties. It aids in regulating blood sugar levels, supports digestive health, and has antioxidant effects."
    },
    "Echinacea": {
        "scientificName": "Echinacea purpurea",
        "medicinalUses": "Echinacea is used to boost immune function and reduce the duration of colds and infections. It also supports respiratory health."
    },
    "Ajwain": {
        "scientificName": "Trachyspermum ammi",
        "medicinalUses": "Ajwain, also known as carom seeds, is used for its digestive benefits. It helps in alleviating bloating, gas, and indigestion."
    },
    "Ashwagandha": {
        "scientificName": "Withania somnifera",
        "medicinalUses": "Ashwagandha is an adaptogen that helps reduce stress, improve energy levels, and enhance overall vitality. It supports mental health and immune function."
    },
    "Amla": {
        "scientificName": "Phyllanthus emblica",
        "medicinalUses": "Amla, or Indian gooseberry, is rich in vitamin C and antioxidants. It supports immune health, improves digestion, and promotes healthy skin and hair."
    },
    "Saffron": {
        "scientificName": "Crocus sativus",
        "medicinalUses": "Saffron is known for its mood-enhancing and anti-inflammatory properties. It supports mental well-being, skin health, and can improve digestion."
    },
    "Valerian": {
        "scientificName": "Valeriana officinalis",
        "medicinalUses": "Valerian is used for its calming effects and support for sleep. It helps reduce anxiety and improve overall relaxation."
    },
    "Fennel": {
        "scientificName": "Foeniculum vulgare",
        "medicinalUses": "Fennel aids in digestion, reduces bloating, and can help with constipation. It also has antioxidant properties."
    },
    "Lemon Balm": {
        "scientificName": "Melissa officinalis",
        "medicinalUses": "Lemon Balm is used for its calming effects on the nervous system. It supports relaxation, improves mood, and helps with digestive discomfort."
    },
    "Eucalyptus Tree": {
        "scientificName": "Eucalyptus globulus",
        "medicinalUses": "Eucalyptus is known for its respiratory benefits. It helps relieve cough, congestion, and has antibacterial properties."
    }
};



// Plant use data for each category
const plantUses = {
    "Immunity": {
        "Tulsi": "Boosts immunity, has anti-inflammatory properties, and helps combat stress.",
        "Echinacea": "Enhances immune function and helps reduce the duration of colds and infections.",
        "Ashwagandha": "Strengthens the immune system, helps the body adapt to stress, and improves overall well-being.",
        "Amla": "Rich in vitamin C, boosts immune function, and has antioxidant properties."
    },
    "Skin Care": {
        "Aloe Vera": "Moisturizes skin, reduces acne, soothes sunburn, and helps with wound healing.",
        "Turmeric": "Has anti-inflammatory and antioxidant properties that help in reducing acne and improving skin complexion.",
        "Lavender": "Known for its soothing properties, helps reduce acne, and improves skin complexion.",
        "Mint": "Refreshes the skin, helps with acne, and can reduce irritation and redness."
    },
    "Hair Care": {
        "Aloe Vera": "Promotes hair growth, conditions the scalp, and reduces dandruff.",
        "Mint": "Stimulates blood circulation to the scalp, promotes hair growth, and reduces dandruff.",
        "Chamomile": "Adds shine to hair, helps soothe scalp irritation, and can lighten hair color naturally."
    },
    "Gut Health": {
        "Mint": "Helps relieve symptoms of irritable bowel syndrome (IBS), reduces bloating, and aids digestion.",
        "Fennel": "Promotes digestion, reduces bloating and gas, and can help with constipation.",
        "Chamomile": "Soothes the digestive tract, helps relieve indigestion, and can reduce stomach cramps.",
        "Turmeric": "Supports digestion, reduces inflammation in the gut, and may help with conditions like irritable bowel syndrome (IBS)."
    }
};
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    // Parallax bush image (faster movement)
    const parallaxBush = document.querySelector('.parallax-bush');
    if (parallaxBush) {
        parallaxBush.style.transform = `translateY(${-scrollPosition * 0.1}px)`; // Faster movement
    }

    // Parallax new image (faster movement)
    const parallaxImage = document.querySelector('.parallax-image');
    if (parallaxImage) {
        parallaxImage.style.transform = `translateY(${-scrollPosition * 0.2}px)`; // Faster movement
    }
});



window.addEventListener('mousemove', function (e) {
    // Reduce the number of elements in the array for fewer sparkles
    [1, .7, .5, .3, .2].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.zIndex = 6;
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.opacity = "0.5";
        elem.style.height = size;
        elem.style.background = 'hsla(' +
            Math.round(Math.random() * 160) + ', ' +
            '60%, ' +
            '90%, ' +
            i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);

        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 1000));
    });

    // Falling trail with reduced sparkles
    [1, .7, .5, .3].forEach(function (i) {
        var j = (1 - i) * 50;
        var elem = document.createElement('div');
        var size = Math.ceil(Math.random() * 10 * i) + 'px';
        elem.style.position = 'fixed';
        elem.style.zIndex = 6;
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.opacity = "0.5";
        elem.style.height = size;
        elem.style.animation = "fallingsparkles 1s";
        elem.style.background = 'hsla(' +
            Math.round(Math.random() * 160) + ', ' +
            '60%, ' +
            '90%, ' +
            i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);

        window.setTimeout(function () {
            document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 1000));
    });
}, false);


document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-audio');
    const audioBtn = document.getElementById('audio-btn');

    // Add event listener to the button
    audioBtn.addEventListener('click', function() {
        if (audio.muted) {
            // Unmute the audio
            audio.muted = false;
            audio.play(); // Ensure the audio starts playing
            audioBtn.textContent = '🔈'; // Change to muted icon
        } else {
            // Mute the audio
            audio.muted = true;
            audioBtn.textContent = '🔇'; // Change to sound on icon
        }
    });
});





// Show popup with plant info
document.querySelectorAll('.plant').forEach(plant => {
    plant.addEventListener('click', function() {
        document.querySelectorAll('.plant').forEach(p => p.classList.remove('highlight'));

        const plantName = this.getAttribute('data-plant');
        document.getElementById('plant-name').textContent = plantName;

        const plantData = plantInfo[plantName];
        if (plantData) {
            const plantDetails = `
                <strong>Scientific Name:</strong> ${plantData.scientificName}<br><br>
                <strong>Medicinal Uses:</strong> ${plantData.medicinalUses}<br>
            `;
            document.getElementById('plant-info').innerHTML = plantDetails;
        } else {
            document.getElementById('plant-info').textContent = "No information available.";
        }

        const likeBtn = document.getElementById("like-btn");
        if (likedPlants.includes(plantName)) {
            likeBtn.classList.add('liked');
        } else {
            likeBtn.classList.remove('liked');
        }

        document.querySelector('.popup-overlay').style.display = 'block';
        document.getElementById('plant-popup').style.display = 'block';
    });
});

// Close the popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.getElementById('plant-popup').style.display = 'none';
});

// Close the popup when clicking outside of it
document.querySelector('.popup-overlay').addEventListener('click', function() {
    document.querySelector('.popup-overlay').style.display = 'none';
    document.getElementById('plant-popup').style.display = 'none';
});

// Initialize liked plants from localStorage
let likedPlants = JSON.parse(localStorage.getItem('likedPlants')) || [];

// Function to update the 'Favorites' dropdown
function updateFavoritesDropdown() {
    const favoritesDropdown = document.getElementById('favorites-list');
    favoritesDropdown.innerHTML = ""; // Clear the existing content

    if (likedPlants.length === 0) {
        favoritesDropdown.innerHTML = "<p>No favorites yet</p>";
    } else {
        likedPlants.forEach(plant => {
            const plantItem = document.createElement("div");
            plantItem.innerHTML = `
                <span>${plant}</span><br>
                <button class="remove-btn" onclick="removeFromFavorites('${plant}')">Remove</button>
            `;
            favoritesDropdown.appendChild(plantItem);
        });
    }
}

// Function to toggle the 'like' state and save it in localStorage
function toggleLike(plantName) {
    const likeBtn = document.getElementById("like-btn");

    if (likedPlants.includes(plantName)) {
        likedPlants = likedPlants.filter(plant => plant !== plantName);
        likeBtn.classList.remove('liked');
    } else {
        likedPlants.push(plantName);
        likeBtn.classList.add('liked');
    }

    localStorage.setItem('likedPlants', JSON.stringify(likedPlants));
    updateFavoritesDropdown();
}

// Bind the click event for the like button in the popup
document.getElementById('like-btn').addEventListener('click', function() {
    const plantName = document.getElementById('plant-name').innerText;
    toggleLike(plantName);
});

// Function to handle removing items from Favorites
function removeFromFavorites(plantName) {
    likedPlants = likedPlants.filter(plant => plant !== plantName);
    localStorage.setItem('likedPlants', JSON.stringify(likedPlants));
    updateFavoritesDropdown();
}

// Show or hide the favorites dropdown when clicking on "Favourites"
document.getElementById('favourites-link').addEventListener('click', function(event) {
    event.preventDefault();
    const dropdown = document.querySelector('.favorites-dropdown-content');
    dropdown.classList.toggle('show');
});

// Initialize favorites dropdown on page load
window.onload = function() {
    updateFavoritesDropdown();
};

// Search function
function searchPlants() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase().trim(); // Trim whitespace
    const plants = document.querySelectorAll('.plant');

    if (!searchTerm) {
        alert("Search bar is empty. Please enter a plant name.");
        return;
    }

    let found = false;
    plants.forEach(plant => {
        const plantName = plant.dataset.plant.toLowerCase();

        if (plantName.includes(searchTerm)) {
            plant.classList.add('highlight');
            // Scroll into view with smooth behavior
            plant.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
        } else {
            plant.classList.remove('highlight');
        }
    });

    if (!found) {
        alert("No plants found.");
    }
}

// Trigger search when clicking the search button
document.getElementById('search-btn').addEventListener('click', searchPlants);

// Trigger search when pressing 'Enter' key in search bar
document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchPlants();
    }
});

// Function to smoothly scroll to an element
function scrollToElement(element) {
    element.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling
        block: 'center',     // Center the element in the viewport
    });
}

// Function to display a smooth starting message
function showStartingMessage(tourType) {
    const messageBox = document.createElement('div');
    messageBox.id = 'start-message';
    messageBox.textContent = `Starting ${tourType} Tour...`;
    messageBox.style.position = 'fixed';
    messageBox.style.top = '20%';
    messageBox.style.left = '50%';
    messageBox.style.transform = 'translateX(-50%)';
    messageBox.style.padding = '15px 30px';
    messageBox.style.backgroundColor = '#4caf50';
    messageBox.style.color = '#fff';
    messageBox.style.fontSize = '20px';
    messageBox.style.borderRadius = '8px';
    messageBox.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.3)';
    messageBox.style.opacity = 0;
    messageBox.style.transition = 'opacity 0.5s ease';

    document.body.appendChild(messageBox);

    // Fade in the message
    setTimeout(() => {
        messageBox.style.opacity = 1;
    }, 100);  // Delay for smooth fade-in

    // Fade out the message after 2 seconds
    setTimeout(() => {
        messageBox.style.opacity = 0;
        setTimeout(() => {
            messageBox.remove();
        }, 500);  // Delay for fade-out before removing
    }, 2000);  // Show the message for 2 seconds
}

// Function to simulate a plant tour
function startTour(tourType) {
    // Show starting tour message
    showStartingMessage(tourType);

    const plants = document.querySelectorAll('.plant');
    let plantArray = Object.keys(plantUses[tourType]);

    let i = 0;

    function highlightNextPlant() {
        if (i > 0) {
            // Remove highlight from previous plant
            const prevPlantElement = document.querySelector(`.plant[data-plant="${plantArray[i-1]}"]`);
            prevPlantElement.classList.remove('highlight');
            const prevInfo = document.getElementById('tour-info');
            if (prevInfo) prevInfo.remove();
        }
        
        if (i < plantArray.length) {
            // Highlight the next plant
            const plantElement = document.querySelector(`.plant[data-plant="${plantArray[i]}"]`);
            plantElement.classList.add('highlight');
            
            // Scroll to the plant
            scrollToElement(plantElement);
            
            // Get absolute position of the plant relative to the page
            const plantRect = plantElement.getBoundingClientRect();
            const plantTop = window.scrollY + plantRect.top;
            const plantLeft = window.scrollX + plantRect.left;

            // Add the message next to the highlighted plant
            const plantMessage = document.createElement('div');
            plantMessage.id = "tour-info";
            plantMessage.textContent = plantUses[tourType][plantArray[i]];
            plantMessage.style.position = "absolute";
            plantMessage.style.left = `${plantLeft + plantElement.offsetWidth + 10}px`;  // 10px right of the plant
            plantMessage.style.top = `${plantTop}px`;  // Align to top of the plant
            plantMessage.style.backgroundColor = "#fff";
            plantMessage.style.padding = "10px";
            plantMessage.style.borderRadius = "5px";
            plantMessage.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
            document.body.appendChild(plantMessage);

            // Move to next plant
            i++;
            setTimeout(highlightNextPlant, 3000); // 3 seconds per plant
        }
    }

    setTimeout(highlightNextPlant, 2500); // Wait 2.5 seconds before starting after showing the message
}





// Event listeners for each tour
document.getElementById('tour-immunity').addEventListener('click', () => startTour('Immunity'));
document.getElementById('tour-skincare').addEventListener('click', () => startTour('Skin Care'));
document.getElementById('tour-haircare').addEventListener('click', () => startTour('Hair Care'));
document.getElementById('tour-guthealth').addEventListener('click', () => startTour('Gut Health'));
