import { Component, OnInit } from '@angular/core';
import { HttpService } from 'services/http.service';
import { HTTPURLCONSTANTS } from 'constants/httpurlconstants';

@Component({
  selector: 'Interview',
  templateUrl: 'addEditCourse.component.html']
})
export class InterviewComponent implements OnInit {
  usersList: any = [];

  constructor(private httpService: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUsers();
  }
  
  /**
   * Function to get the list of users
   */
  getUsers() {
    const url = HTTPURLCONSTANTS.USERS_LIST;
    this.httpService.get(url)
    .subscribe(
      (response: any) => {
        this.usersList = response.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserById(id) {
    const url = HTTPURLCONSTANTS.USER + '/' + id;
    this.httpService.get(url)
    .subscribe(
      (response: any) => {
        this.usersList = response.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  /**
   * Not Sure of what the edit function is for...
   * edit function is trying to do more than one thing
   * But instead i would write a function to edit/update user details
   * 
  */
  updateUserDetails(user) {
    if(!_.isObject(user)) {
      return;
    }
    const url = HTTPURLCONSTANTS.USER;
    this.httpService.post(url) //PUT is a better option here, as we are updating
    .subscribe(
      (response: any) => {
        //updated successfully
        this.getUsers();
      },
      (error) => {
        //failed to update
        console.error(error);
      }
    );
  }

  removeUser(userId) {
    const url = HTTPURLCONSTANTS.USER;
    this.httpService.post(url) //DELETE is a better option here, as we are Deleting a record
    .subscribe(
      (response: any) => {
        //deleted successfully
        //lets get the users again
        this.getUsers();
      },
      (error) => {
        //failed to update
        console.error(error);
      }
    );
  }
  

}