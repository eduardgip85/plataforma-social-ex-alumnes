import { jobsData, type Job } from '../../data/jobsData';

const jobsList = document.getElementById('jobsList') as HTMLDivElement;

function renderJobs(data: Job[]) {
  
  jobsList.innerHTML = '';

  data.forEach(job => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 col-xxl-3 col-sm-12">
        <div class="card h-100 border-0 shadow-sm p-3 rounded-4 bg-light">
          <div class="d-flex align-items-center mb-3">
            <div>
              <h1 class="mb-0 fw-bold">${job.name}</h1>
              <p class="text-brand small mb-0">${job.company}</p>
              <p class="text-muted small">${job.typeContract}</p>
              <p class="text-brand small mb-0">Salario entre ${job.minSalary}€ - ${job.maxSalary}€</p>
            </div>
          </div>
          <div class="d-flex flex-wrap gap-2 mt-auto">
            ${job.requiredTecnologies.map(tec => `<span class="badge bg-secondary text-white border">${tec}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
    jobsList.innerHTML += card;
  });
}

renderJobs(jobsData);