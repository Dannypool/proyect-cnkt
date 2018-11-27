import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../services/resources.service';
import { SpinnerService } from '../services/spinner.service';
import { Resources } from '../models/resource';
import { ResourceModalComponent } from '../resource-modal/resource-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public page: number = 1
  public pages: Array<number> = new Array(1)
  public resources: Resources[]

  constructor(
    private resorcesService: ResourcesService,
    private spinnerService: SpinnerService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.getResources()
  }

  getResources(){
    this.spinnerService.showSpinner()
    this.resorcesService.getResources(this.page)
    .subscribe(
      r => {
        this.resources = r['data']
        this.pages = new Array(r['total_pages'])
      }
    ).add(() => this.spinnerService.hideSpinner())
  }

  deleteResource(id: number){
    this.spinnerService.showSpinner()
    this.resorcesService.deleteResourceById(id)
      .subscribe(
        r => {
          alert("Usuario eliminado")
        }
      ).add(() => this.spinnerService.hideSpinner())
  }

  changePage(i: number) {
    this.page = i + 1
    this.getResources()
  }

  previousPage() {
    if (this.page > 1) {
      this.page--
      this.getResources()
    }
  }

  nextPage() {
    if (this.page < this.pages.length) {
      this.page++
      this.getResources()
    }
  }

  addOpenModal() {
    const modalRef = this.modalService.open(ResourceModalComponent)
    let newResource = {} as Resources
    modalRef.componentInstance.resource = newResource
    modalRef.result.then((result) => {
      //this.createUser(result)
    }).catch((error) => {
    })
  }

}
