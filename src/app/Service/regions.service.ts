import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RegionsService {
  public regions: string[] = [
    "Кировская область",
    "Московская область",
    "Ленинградская область",
    "Воронежская область"
  ];

  getRegions() {
    return this.regions;
  }

  addRegions(region: string) {
    this.regions.push(region);
  }
}
