import {Component, Input, OnInit, Output} from '@angular/core';
import {Candidat} from '../../core/model/candidat';
import {CandidatService} from '../../services/candidat-service';




@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {


  listCandidat: Candidat[];
 // toggle = true;


  constructor(private serviceCandidat: CandidatService /*, private snackbar: MatSnackBar*/)
  {
   this.get();
  }
ngOnInit(): void {}

  // tslint:disable-next-line:typedef
    get()
  {
    return  this.serviceCandidat.getCandidacy().subscribe(
      (data: Candidat[]) => this.listCandidat = data);
  }

  SearchMultiple(key: string): void
  {
    // tslint:disable-next-line:triple-equals
    if (key == '') {
      this.get();
    }
    else if (key != null)
    {
      this.serviceCandidat.SerachMultiple(key).subscribe(
        (data: Candidat[]) => {
          this.listCandidat = data;
        }
      );
    }



  }


}
