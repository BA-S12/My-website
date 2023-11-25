document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.filter div');
    const cards = document.querySelectorAll('.cards .card');

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filterId = button.id;
            filterCards(filterId);
            updateActiveState(filterButtons, button);
        });
    });

    // Add event listener to dropdown items
    const dropdownItems = document.querySelectorAll('.dropdown__items li');
    dropdownItems.forEach((item) => {
        item.addEventListener('click', () => {
            const filterId = item.id;
            filterCards(filterId);
            updateActiveState(filterButtons, document.getElementById(filterId));

            // Hide filter menu after selection
            const dropdownCheckbox = document.getElementById('dropdown');
            dropdownCheckbox.checked = false;
        });
    });

    function filterCards(filterId) {
        cards.forEach((card) => {
            const cardContainerId = card.closest('.backEnd-cards, .frontEnd-cards, .data-cards').id;

            if (filterId === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = cardContainerId === filterId ? 'block' : 'none';
            }
        });
    }

    function updateActiveState(buttons, activeButton) {
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
});
