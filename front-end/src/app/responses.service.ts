import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ResponsesService {

  constructor(private toastr : ToastrService) { }

  handleResponse(data) {
      if(data.errors) {
        for (let i of data.errors) {
          this.toastr.error(i, 'Error', {
            timeOut: 3000
          });
      }    
    }
      else if(data.message) { 
        this.toastr.success(data.message, 'Felicitaciones', {
          timeOut: 3000
        });
        
      }
      else {
        this.toastr.success('Item creado!', 'Felicitaciones', {
          timeOut: 3000
        });
      }
  }
}
