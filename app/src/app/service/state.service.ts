import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public tab = 'profile'; // search
  public lookupInput = '';

  constructor() { }

}
