
import { Component, OnInit } from '@angular/core';
import {Candidat} from "../../core/model/candidat";
import {CandidatService} from "../../services/candidat-service";

@Component({
  selector: 'app-add-candidat',
  templateUrl: './add-candidat.component.html',
  styleUrls: ['./add-candidat.component.css']
})
export class AddCandidatComponent implements OnInit {

  listCandidat: Candidat[];

  cr:Candidat=new Candidat;

  constructor(private serviceCandidat: CandidatService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    return this.serviceCandidat.getCandidacy().subscribe(
      (data: Candidat[]) => this.listCandidat = data);
  }

  SearchMultiple(key: string): void {
    // tslint:disable-next-line:triple-equals
    if (key == '') {
      this.get();
    } else if (key != null) {
      this.serviceCandidat.SerachMultiple(key).subscribe(
        (data: Candidat[]) => {
          this.listCandidat = data;
        }
      );
    }


  }

  deleteCandidacy(idCandidacy: number) {

  }

  dataId(idCandidacy: number) {

  }


}
