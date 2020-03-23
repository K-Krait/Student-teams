export class Regions {
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
