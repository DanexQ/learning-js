import View from './View.js';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1 and there are other pages
    if (currPage === 1 && numPages > 1) return this._generateButtonMarkup(2);
    // last page
    if (currPage === numPages && currPage > 1)
      return this._generateButtonMarkup(numPages - 1, false);
    // other page
    if (currPage > 1 && currPage < numPages)
      return [
        this._generateButtonMarkup(currPage + 1),
        this._generateButtonMarkup(currPage - 1, false),
      ].join('');
    // page 1 and there are NO other pages
    return ``;
  }

  _generateButtonMarkup(page, next = true) {
    return `
    <button data-goto="${page}" class="btn--inline pagination__btn--${
      next ? 'next' : 'prev'
    }">
        ${
          next
            ? `<span>Page ${page}</span>
            <svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>`
            : `<svg class="search__icon">
            <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${page}</span>`
        }
    </button>`;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const nextPage = +btn.dataset.goto;
      handler(nextPage);
    });
  }
}

export default new paginationView();
