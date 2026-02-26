import { studentsData, type Student } from '../../data/studentsData';

const studentsList = document.getElementById('studentsList') as HTMLDivElement;
const searchBar = document.getElementById('SearchBar') as HTMLInputElement;

function renderStudents(data: Student[]) {
  studentsList.innerHTML = '';

  if (data.length === 0) {
    studentsList.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search fs-1 text-muted mb-3 d-block"></i>
        <p class="fs-4 text-muted">Vaja, no hem trobat cap alumne que coincideixi amb la teva cerca.</p>
      </div>
    `;
    return;
  }

  data.forEach(student => {

    const card = `
      <div class="col-12 col-md-6 col-lg-4 gap-3">
        <div class="card student-card h-100 border border-muted shadow-sm p-4 rounded-4 bg-white">
          <div class="d-flex flex-column h-100 text-start">
            
            <img src="${student.img}" class="rounded-circle mb-3 border border-light shadow-sm" width="300" height="300" style="object-fit: cover;" alt="${student.name}">
            
            <h1 class="fw-semibold text-dark mb-1">${student.name}</h1>
            <p class="text-muted mb-1 fs-3">${student.role}</p>
            <p class="text-muted small mb-3">${student.promotion}</p>
            
            <p class="text-secondary small mb-3 line-clamp">${student.description}</p>
            
            <div class="d-flex flex-wrap gap-2 mb-4">
              ${student.tags.map(tag => `<span class="badge badge-tech fw-normal text-muted fs-4">${tag}</span>`).join('')}
            </div>

            <div class="mt-auto">
              <button class="btn btn-message text-white px-4 py-2 fs-4">Message</button>
            </div>

          </div>
        </div>
      </div>
    `;
    studentsList.innerHTML += card;
  });

}

searchBar.addEventListener('input', (e: Event) => {

  const target = e.target as HTMLInputElement;
  const searchTerm = target.value.toLowerCase().trim();

  const filteredStudents = studentsData.filter(student => {

    const matchesName = student.name.toLowerCase().includes(searchTerm);

    const matchesTags = student.tags.some(tag =>
      tag.toLowerCase().includes(searchTerm)
    );

    return matchesName || matchesTags;

  });

  renderStudents(filteredStudents);

});

renderStudents(studentsData);