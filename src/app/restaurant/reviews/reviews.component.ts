import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddReviewComponent } from './add-review/add-review.component';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'shop-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Review[]>;

  @Input() id: string;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  // Task 7
  ngOnInit() {
    // this.reviews =
  }

  openAddReview() {
    this.dialog.open(AddReviewComponent, {
      width: '450px',
      data: {id: this.id}
    });
  }

}
