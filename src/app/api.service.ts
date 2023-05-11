import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  noapiurl="http://localhost:3200";
  constructor(private http: HttpClient) { }


   postdata(data:any){
    const header={headers:new HttpHeaders({'content-type':'application/json'})};
    return this.http.post(this.noapiurl+'/api/student/create',data,header)
   }

   getdata(){
    return this.http.get(this.noapiurl+'/api/student/retrieve');
   }
   deletedata(id:any){
    const header={headers:new HttpHeaders({'content-type':'application/json'}),
     body:{_id:id}
  };
    return this.http.delete(this.noapiurl+'/api/student/delete',header);
  }

Updatedata(data:any,id:any){
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.put<any>(this.noapiurl+'/api/student/update',data,header)
}
}
