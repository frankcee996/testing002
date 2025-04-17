

document.addEventListener("DOMContentLoaded", function () {
  const starContainers = document.querySelectorAll('.game-stars');
  let storedRatings = JSON.parse(localStorage.getItem('starRatings'));

  if (!storedRatings || storedRatings.length !== starContainers.length) {
    storedRatings = Array.from({ length: starContainers.length }, () =>
      Math.floor(Math.random() * 5) + 1
    );
    localStorage.setItem('starRatings', JSON.stringify(storedRatings));
  }

  starContainers.forEach((container, index) => {
    const rating = storedRatings[index];
    const filled = '★'.repeat(rating);
    const empty = '☆'.repeat(5 - rating);
    container.innerHTML = filled + empty;
  });
});



// Function to Open Sidebar
function openMenu() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

// Function to Close Sidebar
function closeMenu() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}


const searchIcon = document.getElementById('search-toggle');


searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('show');
  if (!searchInput.classList.contains('show')) {
    searchInput.value = '';
    removeHighlights();
  } else {
    searchInput.focus();
  }
});
const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.game-card, .app-container');

  cards.forEach(card => {
    const title = card.querySelector('h3, .app-name');
    if (!title) return;

    const text = title.textContent.toLowerCase();

    // Reset previous highlight
    title.innerHTML = title.textContent;

    if (query && text.includes(query)) {
      const regex = new RegExp(`(${query})`, 'gi');
      const highlighted = title.textContent.replace(regex, '<span class="highlight">$1</span>');
      title.innerHTML = highlighted;
      card.style.display = '';
    } else if (query) {
      card.style.display = 'none';
    } else {
      card.style.display = ''; // Show all if search is empty
    }
  });
});
const folder = document.getElementById('folderPreview');
const overlay = document.getElementById('expandedOverlay');

folder.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});