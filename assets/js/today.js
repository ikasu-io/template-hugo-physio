// Marks today's row in the opening hours, in the practice's time zone.
// The hours are readable without it.
(() => {
  const name = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Berlin', weekday: 'short' }).format(new Date());
  const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(name) + 1;
  const label = document.documentElement.lang.startsWith('de') ? 'heute' : 'today';
  for (const row of document.querySelectorAll(`.hours tr[data-day="${day}"]`)) {
    row.classList.add('is-today');
    row.querySelector('th')?.insertAdjacentHTML('beforeend', ` <span class="today">${label}</span>`);
  }
})();
