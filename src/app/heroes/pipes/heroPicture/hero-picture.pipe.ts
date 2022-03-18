import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../../interfaces/heroes.interfaces';

@Pipe({
  name: 'heroPicture',
  pure: false,
})
export class HeroPicturePipe implements PipeTransform {
  transform(hero: IHero = {}): string {
    const assetsPath: string = 'assets';
    const heroesAssets: string = '/heroes';
    const heroesAssetsPath: string = assetsPath.concat(heroesAssets);
    const pictureFormat: string = 'jpg';

    let relativeSourcePath: string = '';

    if (hero.alt_img) {
      relativeSourcePath = hero.alt_img;
    } else if (hero.id) {
      relativeSourcePath = `${heroesAssetsPath}/${hero.id}.${pictureFormat}`;
    } else {
      relativeSourcePath = `${assetsPath}/no-image.png`;
    }

    return ''.concat(relativeSourcePath.slice(0));
  }
}
