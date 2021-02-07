import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  public userDataSubject = new Subject();
  public readonly userData$ = this.userDataSubject.asObservable();
  constructor() { }

  public updateItem(key: string, value: unknown): void {
    this.userDataSubject.next(value);
    this.setItem(key, JSON.stringify(value));
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
    
  public getItem(key: string): any { 
    return localStorage.getItem(key);
  }
  
  public removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  
  public clear(): void {
    localStorage.clear(); 
  }
}
