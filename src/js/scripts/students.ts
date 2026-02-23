import { studentsData, type Student } from '../../data/studentsData';

const studentsList = document.getElementById('studentsList') as HTMLDivElement;

function renderStudents(data: Student[]) {
  studentsList.innerHTML = '';

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

renderStudents(studentsData);