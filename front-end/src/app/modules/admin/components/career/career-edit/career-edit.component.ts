import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { CareerService } from 'src/app/services/career.service';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-career-edit',
  templateUrl: './career-edit.component.html',
  styleUrls: ['./career-edit.component.css']
})
export class CareerEditComponent implements OnInit {

  private id:any;
  public career =  null;
  public error = null;

  constructor(
    private toastr: ToastrService,
    private _Activatedroute:ActivatedRoute,
    private Career : CareerService,
    private router:Router
    ) { }

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    this.indexEdit();
  }
  
  indexEdit() {
    this.Career.edit(this.id).subscribe(
      data => this.setCareer(data) ,
      error => this.handleError(error)
    ); 
  }

  setCareer(data) {
    return this.career = data.career;    
  }

  handleError(error) {
    this.error = error.error.error
  }

  update() { 
    console.log(this.career);
    this.Career.update(this.career).subscribe(
      data => {
        this.toastr.success("Registro actualizado."),
        this.router.navigateByUrl('admin-panel/career');
      },
      error => this.handleError(error)
    ); 
  }



}
