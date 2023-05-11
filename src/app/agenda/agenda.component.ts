import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import frLocale from '@fullcalendar/core/locales/fr';
import multiMonthPlugin from '@fullcalendar/multimonth';
import { Subscription } from 'rxjs';
import { IEvent } from '../IEvent';
import { EventService } from '../serviceE/event.service';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent {

  calendarOptions: CalendarOptions = {
    height: 750,
    plugins: [multiMonthPlugin],
    initialView: 'multiMonthYear',
    locale: frLocale,
    events: [], // Initialisation avec un tableau vide
  };

  events: IEvent[] = [];
  events$ = this.eventService.events$;
  newEvent: any = {};

  eventSubscribtion: Subscription = new Subscription;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
  }

  addEvent() {
    const newEvent: IEvent = {
      title: 'New event',
      start: new Date().toISOString(),
      end: new Date().toISOString(),
    };
    this.eventService.addEvent(newEvent);
  }

  ngOnDestroy(): void {
    if (this.eventSubscribtion) {
      this.eventSubscribtion.unsubscribe();
    }
  }

}