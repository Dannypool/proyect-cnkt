import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

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
    private spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.spinnerService.showSpinner()
    this.usersService.getUsers(this.page)
      .subscribe(
        r => {
          this.users = r['data']
          this.pages = new Array(r['total_pages'])
        },
        r => {},
        () => {
          this.spinnerService.hideSpinner()
        }
      )
  }

  getUser(id: number){
    this.spinnerService.showSpinner()
    this.usersService.getUserById(id)
      .subscribe(
        r => {
          
        },
        r => {},
        () => {
          this.spinnerService.hideSpinner()
        }
      )
  }

  deleteUser(id: number){
    this.spinnerService.showSpinner()
    this.usersService.deleteUserById(id)
      .subscribe(
        r => {
          
        },
        r => {},
        () => {
          this.spinnerService.hideSpinner()
        }
      )
  }

  changePage(i: number){
    this.page = i + 1
    this.getUsers()
  }

  previousPage(){
    if (this.page > 1) {
      this.page--
      this.getUsers()
    }
  }

  nextPage(){
    if (this.page < this.pages.length) {
      this.page++
      this.getUsers()
    }
  }

}
