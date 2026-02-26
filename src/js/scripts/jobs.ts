import { jobsData, type Job } from '../../data/jobsData';

const jobsList = document.getElementById('jobsList') as HTMLDivElement;

function renderJobs(data: Job[]) {
  jobsList.innerHTML = '';

  data.forEach(job => {
    const card = `
      <div class="col-12 col-lg-4"> 
        <div class="card job-card h-150 border-0 shadow-sm rounded-4 overflow-hidden">
          <div class="card-body p-4">
            <div class="row align-items-center">
              
              <div class="col-12 col-sm-7 mb-3 mb-sm-0">
                <div class="d-flex flex-column">
                  <h4 class="fw-bold text-dark mb-1">${job.name}</h4>
                  <p class="text-brand fw-medium mb-2">${job.company}</p>
                  
                  <div class="job-meta small text-muted mb-3">
                    <span class="me-3"><i class="bi bi-briefcase me-1"></i>${job.typeContract}</span>
                    <span><i class="bi bi-cash-stack me-1"></i>${job.minSalary}€ - ${job.maxSalary}€</span>
                  </div>
                  
                  <button class="btn btn-outline-brand btn-sm rounded-3 w-fit-content px-4 fs-4">
                    Veure detalls
                  </button>
                </div>
              </div>

              <div class="col-12 col-sm-5 border-start-sm">
                <p class="small fw-bold text-uppercase text-muted mb-2 ls-1">Tecnologies</p>
                <div class="d-flex flex-wrap gap-2">
                  ${job.requiredTecnologies.map(tec => `
                    <span class="badge badge-job-tech fs-4">${tec}</span>
                  `).join('')}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;
    jobsList.innerHTML += card;
  });
}

renderJobs(jobsData);