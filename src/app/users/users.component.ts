import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public page: number = 1
  public pages: Array<number> = new Array(1)
  public users: Users[]

  constructor(
    private usersService: UsersService,
    private spinnerService: SpinnerService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.spinnerService.showSpinner()
    this.usersService.getUsers(this.page)
      .subscribe(
        r => {
          this.users = r['data']
          this.pages = new Array(r['total_pages'])
        }
      ).add(() => this.spinnerService.hideSpinner())
  }

  getUser(id: number): Observable<any> {
    this.spinnerService.showSpinner()
    return this.usersService.getUserById(id)
  }

  deleteUser(id: number) {
    this.spinnerService.showSpinner()
    this.usersService.deleteUserById(id)
      .subscribe(
        r => {
          alert("Usuario eliminado")
        }
      ).add(() => this.spinnerService.hideSpinner())
  }

  updateUser(user: Users) {
    this.spinnerService.showSpinner()
    this.usersService.updateUser(user.name, user.job, user.id)
      .subscribe(
        r => {
          alert("Usuario actualizado")
        }
      ).add(() => this.spinnerService.hideSpinner())
  }

  createUser(user:Users){
    this.spinnerService.showSpinner()
    this.usersService.createUser(user.name, user.job)
      .subscribe(
        r => {
          alert("Usuario creado")
        }
      ).add(() => this.spinnerService.hideSpinner())
  }

  changePage(i: number) {
    this.page = i + 1
    this.getUsers()
  }

  previousPage() {
    if (this.page > 1) {
      this.page--
      this.getUsers()
    }
  }

  nextPage() {
    if (this.page < this.pages.length) {
      this.page++
      this.getUsers()
    }
  }

  updateFormModal(id: number) {
    this.getUser(id).subscribe(
      r => {
        let usuario: Users
        usuario = r['data']
        const modalRef = this.modalService.open(UserModalComponent)
        modalRef.componentInstance.user = usuario
        modalRef.result.then((result) => {
          this.updateUser(result)
        }).catch((error) => {
        })
      }
    ).add(() => this.spinnerService.hideSpinner())
  }

  addOpenModal() {
    const modalRef = this.modalService.open(UserModalComponent)
    let newUser = {} as Users
    modalRef.componentInstance.user = newUser
    modalRef.result.then((result) => {
      this.createUser(result)
    }).catch((error) => {
    })
  }

}
