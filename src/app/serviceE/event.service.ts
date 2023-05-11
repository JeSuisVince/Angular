import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IEvent } from '../IEvent';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: IEvent[] = [
    {
      title: 'Semaine de l agriculture',
      start: '2023-04-01',
      end: '2023-04-01'
    },
    {
      title: 'Journée mondiale de l environnement',
      start: '2023-06-05',
      end: '2023-06-05'
    },
    {
      title: 'Fête de la nature',
      start: '2023-06-17',
      end: '2023-06-21'
    },
  ];

  public events$: BehaviorSubject<IEvent[]>;

  constructor() {
    this.events$ = new BehaviorSubject<IEvent[]>(this.events);
  }

  addEvent(event: IEvent): void {
    this.events = [...this.events, event];
    this.events$.next(this.events);
    console.log(this.events)
  }

}
