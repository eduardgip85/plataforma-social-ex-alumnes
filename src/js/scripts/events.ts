import { eventsData, type Event } from '../../data/eventsData';

const eventsList = document.getElementById('eventsList') as HTMLDivElement;

function renderEvents(data: Event[]) {
  
  eventsList.innerHTML = '';

  data.forEach(event => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 col-xxl-3 col-sm-12">
        <div class="card h-100 border-dark shadow-sm p-3 rounded-4 bg-light">
          <div class="d-flex align-items-center mb-3">
            <img src="${event.img}" class="rounded-circle me-3" width="140" height="140" style="object-fit: cover;">
            <div>
              <h1 class="mb-0 fw-bold">${event.name}</h1>
              <p class="text-brand small mb-0">${event.date}</p>
              <p class="text-muted small">${event.location}</p>
              <p class="text-brand small mb-0">${event.format}</p>
            </div>
          </div>
          <div class="bg-white rounded-4 p-1">
            <p class="text-muted small">${event.description}</p>
          </div>
        </div>
      </div>
    `;
    eventsList.innerHTML += card;
  });
}

renderEvents(eventsData);