import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

    //current user: which is logged in

    public getCurrentUser(): Observable<any>
    {
      return this.http.get<any>(`${baseUrl}/home/current-user`,);
    }

     //generate token

  public generateToken(loginData:any){

    return this.http.post(`${baseUrl}/auth/login`,loginData);

  }

  public loginUser(token: any){

    localStorage.setItem('token',token);
    return true;
  
   }

      //isLogin: user is logged in or not
  
      public isLoggedIn()
      {
       let tokenstr = localStorage.getItem('token')
       if(tokenstr== undefined || tokenstr=='' || tokenstr==null)
       {
         return false;
       }else{
         return true;
       }
     
      }

      //Logout: remove token from the local storage 
  
   public logout()
   {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
   }

     //get token
  
     public getToken()
     {
       return localStorage.getItem('token');
     }

     //set user Detail
  
  
   public setUser(user: any)
   {
       localStorage.setItem('user',JSON.stringify(user));
   }


     //getUser method
  
     public getUser()
     {
        let userStr = localStorage.getItem('user');
        if(userStr != null){
          return JSON.parse(userStr);
        }else{
          this.logout();
          return null;
        }
     }


     //getUser role

     public getUserRole(){
      let user  = this.getUser();
      return user.authorities[0].authority;
     }


  




}
