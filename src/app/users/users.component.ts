import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SpinnerService } from '../shared/services/spinner.service';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { Users } from '../shared/models/users';
import { UsersService } from '../shared/services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public page = 1;
  public pages: Array<number> = new Array(1);
  public users: Users[];
  public successMessage: string;

  constructor(
    private usersService: UsersService,
    private spinnerService: SpinnerService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.spinnerService.showSpinner();
    this.usersService.getUsers(this.page)
      .subscribe(
        r => {
          this.users = r['data'];
          this.pages = new Array(r['total_pages']);
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  getUser(id: number): Observable<any> {
    this.spinnerService.showSpinner();
    return this.usersService.getUserById(id);
  }

  deleteUser(id: number) {
    this.spinnerService.showSpinner();
    this.usersService.deleteUserById(id)
      .subscribe(
        r => {
          this.successMessage = 'Usuario eliminado';
          // alert('Usuario eliminado');
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  updateUser(user: Users) {
    this.spinnerService.showSpinner();
    this.usersService.updateUser(user.name, user.job, user.id)
      .subscribe(
        r => {
          this.successMessage = 'Usuario actualizado';
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  createUser(user: Users) {
    this.spinnerService.showSpinner();
    this.usersService.createUser(user.name, user.job)
      .subscribe(
        r => {
          this.successMessage = 'Usuario creado';
        }
      ).add(() => this.spinnerService.hideSpinner());
  }

  changePage(i: number) {
    this.page = i + 1;
    this.getUsers();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.getUsers();
    }
  }

  nextPage() {
    if (this.page < this.pages.length) {
      this.page++;
      this.getUsers();
    }
  }

  updateFormModal(id: number) {
    this.getUser(id).subscribe(
      r => {
        let usuario: Users;
        usuario = r['data'];
        const modalRef = this.modalService.open(UserModalComponent);
        modalRef.componentInstance.user = usuario;
        modalRef.result.then((result) => {
          this.updateUser(result);
        }).catch((error) => {
        });
      }
    ).add(() => this.spinnerService.hideSpinner());
  }

  addOpenModal() {
    const modalRef = this.modalService.open(UserModalComponent);
    const newUser = {} as Users;
    modalRef.componentInstance.user = newUser;
    modalRef.result.then((result) => {
      this.createUser(result);
    }).catch((error) => {
    });
  }

}
