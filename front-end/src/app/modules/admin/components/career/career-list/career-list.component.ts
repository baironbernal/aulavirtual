import { Component, OnInit } from '@angular/core';
import { CareerService } from 'src/app/services/career.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {

  public careers = null;

  constructor(
    private Career : CareerService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.Career.index().subscribe(
      data => this.setCareers(data) ,
      error => console.log(error)
    );
  }

  setCareers(data) {
    return this.careers = data.careers;
  }
  delete(career) {
    const index = this.careers.indexOf(career);
    this.careers.splice(index, 1);
    this.Career.delete(career).subscribe(
      data => this.toastr.success("Registro borrado."),
      error => console.log(error)
    );
  }

}
