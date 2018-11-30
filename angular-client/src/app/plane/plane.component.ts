import { Component, OnInit ,Input} from '@angular/core';
import { Flight } from '../models/flight';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
  @Input() flight:Flight;
  constructor() { }

  ngOnInit() {
  }

}
