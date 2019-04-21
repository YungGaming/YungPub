import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public tabStates = [
    'search',
    'profile',
    'bookmarks',
  ];

  public tab = 'profile';
  public lookupInput = '';

  constructor() { }

}
