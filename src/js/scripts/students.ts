import { studentsData, type Student } from '../../data/studentsData';

const studentsList = document.getElementById('studentsList') as HTMLDivElement;

function renderStudents(data: Student[]) {
  
  studentsList.innerHTML = '';

  data.forEach(student => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 col-xxl-4 col-sm-12">
        <div class="card h-100 border-0 shadow-sm p-3 rounded-4 bg-light">
          <div class="d-flex align-items-center mb-3">
            <img src="${student.img}" class="rounded-circle me-3" width="140" height="140" style="object-fit: cover;">
            <div>
              <h1 class="mb-0 fw-bold">${student.name}</h1>
              <p class="text-brand small mb-0">${student.role}</p>
              <p class="text-brand small mb-0">${student.promotion}</p>
            </div>
          </div>
          <p class="text-muted small">${student.description}</p>
          <div class="d-flex flex-wrap gap-2 mt-auto">
            ${student.tags.map(tag => `<span class="badge bg-secondary text-white border">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    studentsList.innerHTML += card;
  });
}

renderStudents(studentsData);