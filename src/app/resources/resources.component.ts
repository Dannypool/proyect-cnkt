import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ResourceModalComponent } from '../resource-modal/resource-modal.component';
import { Resources } from '../shared/models/resource';
import { ResourcesService } from '../shared/services/resources.service';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public page = 1;
  public pages: Array<number> = new Array(1);
  public resources: Resources[];
  public successMessage: string;

  constructor(
    private resorcesService: ResourcesService,
    private spinnerService: SpinnerService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getResources();
  }

  getResources() {
    this.spinnerService.showSpinner();
    this.resorcesService.getResources(this.page)
    .subscribe(
      r => {
        this.resources = r['data'];
        this.pages = new Array(r['total_pages']);
      }
    ).add(() => this.spinnerService.hideSpinner());
  }

  getResource(id: number): Observable<any> {
    this.spinnerService.showSpinner();
    return this.resorcesService.getResourceById(id);
  }


  deleteResource(id: number) {
    this.spinnerService.showSpinner();
    this.resorcesService.deleteResourceById(id)
      .subscribe(
        r => {
          this.successMessage = 'Recurso eliminado';
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  updateResource(resource: Resources) {
    this.spinnerService.showSpinner();
    this.resorcesService.updateResource(resource.id, resource.name, resource.color, resource.year, resource.pantone_value)
      .subscribe(
        r => {
          this.successMessage = 'Recurso actualizado';
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  createResource(resource: Resources) {
    this.spinnerService.showSpinner();
    this.resorcesService.createResource(resource.name, resource.color, resource.year, resource.pantone_value)
      .subscribe(
        r => {
          this.successMessage = 'Recurso creado';
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  changePage(i: number) {
    this.page = i + 1;
    this.getResources();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getResources();
    }
  }

  nextPage() {
    if (this.page < this.pages.length) {
      this.page++;
      this.getResources();
    }
  }

  updateFormModal(id: number) {
    this.getResource(id).subscribe(
      r => {
        let resource: Resources;
        resource = r['data'];
        const modalRef = this.modalService.open(ResourceModalComponent);
        modalRef.componentInstance.resource = resource;
        modalRef.result.then((result) => {
          this.updateResource(result);
        }).catch((error) => {
        });
      }
    ).add(() => this.spinnerService.hideSpinner());
  }

  addOpenModal() {
    const modalRef = this.modalService.open(ResourceModalComponent);
    const newResource = {} as Resources;
    modalRef.componentInstance.resource = newResource;
    modalRef.result.then((result) => {
      this.createResource(result);
    }).catch((error) => {
    });
  }
}
