import { eventsData, type Evento } from '../../data/eventsData';

const eventsList = document.getElementById('eventsList') as HTMLDivElement;
const searchBar = document.getElementById('SearchBar') as HTMLInputElement;

function renderEvents(data: Evento[]) {
  eventsList.innerHTML = '';

  if (data.length === 0) {
    eventsList.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search fs-1 text-muted mb-3 d-block"></i>
        <p class="fs-4 text-muted">Vaja, no hem trobat cap esdeveniment que coincideixi amb la teva cerca.</p>
      </div>
    `;
    return;
  }

  data.forEach(event => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card event-card h-100 border border-muted shadow-sm rounded-4 overflow-hidden">
          
          <div class="position-relative">
            <img src="${event.img}" class="card-img-top event-img" alt="${event.name}">
            <span class="badge position-absolute top-0 end-0 m-3 badge-format">${event.format}</span>
          </div>

          <div class="card-body p-4 d-flex flex-column">
            <p class="text-brand fw-bold mb-1 small text-uppercase">${event.date}</p>
            
            <h4 class="fw-bold text-dark mb-2 fs-2">${event.name}</h4>
            
            <p class="text-muted small mb-3 flex-grow-1 fs-2">
              ${event.description}
            </p>

            <div class="d-flex align-items-center text-muted small mb-4">
              <i class="bi bi-geo-alt-fill me-2 text-brand"></i>
              ${event.location}
            </div>

            <button class="btn btn-brand w-100 py-2 fw-semibold fs-4">
              Inscriure'm ara
            </button>
          </div>
        </div>
      </div>
    `;
    eventsList.innerHTML += card;
  });
}

searchBar.addEventListener('input', (e: Event) => {
    const target = e.target as HTMLInputElement;
    const searchTerm = target.value.toLowerCase().trim();

    const filteredEvents = eventsData.filter(event => {

      const matchesName = event.name.toLowerCase().includes(searchTerm);

      const matchesLocation = event.location.toLowerCase().includes(searchTerm);

      return matchesName || matchesLocation;
    });

    renderEvents(filteredEvents);
});

renderEvents(eventsData);