(() => {
  const initFilters = () => {
    const filterButtons = document.querySelectorAll('#tool-filters [data-filter]:not([data-filter="all"])');
    const clearButton = document.querySelector('#tool-filters [data-filter="all"]');
    const cards = document.querySelectorAll('#tool-grid > .col');
    const selectedFilters = new Set();

    const updateFilters = () => {
      filterButtons.forEach((button) => {
        const filter = button.getAttribute('data-filter');
        const isSelected = selectedFilters.has(filter);

        button.classList.toggle('active', isSelected);
        button.classList.toggle('btn-secondary', isSelected);
        button.classList.toggle('btn-outline-secondary', !isSelected);
        button.setAttribute('aria-pressed', isSelected.toString());
      });

      cards.forEach((card) => {
        const categories = card.getAttribute('data-category').split(' ');
        card.hidden = !Array.from(selectedFilters).every((filter) => categories.includes(filter));
      });

      clearButton.disabled = selectedFilters.size === 0;
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        if (selectedFilters.has(filter)) {
          selectedFilters.delete(filter);
        } else {
          selectedFilters.add(filter);
        }

        updateFilters();
      });
    });

    clearButton.addEventListener('click', () => {
      selectedFilters.clear();
      updateFilters();
    });

    updateFilters();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters);
  } else {
    initFilters();
  }
})();
