
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
  idC : number;
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

  dataId(i:number)
  {
    console.log(i);
    this.idC = i;
  }



  deleteCandidacy(i :number)
  {
   /* this.serviceCandidat.delete(i)
      .subscribe(response => {

        this.listCandidat = this.listCandidat.filter(item => item.idCandidacy !== i);
      });

    */

  }


  UpdateCandidacy(cr: Candidat, idC: number) {
   /* this.serviceCandidat.updateCandidat(cr,idC).subscribe(
      data=>{
        this.get();
      });

    */

  }
}
