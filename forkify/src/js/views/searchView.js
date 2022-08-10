class SearchView {
  #parentElement = document.querySelector('.search');

  getQuery() {
    return this.#parentElement.querySelector('.search__field').value;
  }

  #clearSearchInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this.#clearSearchInput();
    });
  }
}

export default new SearchView();
