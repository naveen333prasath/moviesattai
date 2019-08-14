import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local-userDetails';
@Injectable({
  providedIn: 'root'
})
export class UserDetService {

  constructor( @Inject(LOCAL_STORAGE) private storage: StorageService ) { }

  addUserDet(userDet) {
    const currentUserDetails = this.storage.get(STORAGE_KEY) || [];

    currentUserDetails.push(userDet);

    this.storage.set(STORAGE_KEY, currentUserDetails);

    console.log(this.storage.get(STORAGE_KEY) || 'Local Storage is Empty');
  }

  getUserDet() {
    return this.storage.get(STORAGE_KEY);
  }

}
