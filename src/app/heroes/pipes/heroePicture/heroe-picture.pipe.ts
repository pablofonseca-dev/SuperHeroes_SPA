import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interfaces';

@Pipe({
  name: 'heroePicture',
})
export class HeroePicturePipe implements PipeTransform {
  transform(heroe: IHeroe): string {
    const assetsPath: string = 'assets';
    const heroesAssets: string = '/heroes';
    const heroesAssetsPath: string = assetsPath.concat(heroesAssets);
    const pictureFormat: string = 'jpg';

    let relativeSourcePath: string = '';

    if (heroe.alt_img) {
      relativeSourcePath = heroe.alt_img;
    } else if (heroe.id) {
      relativeSourcePath = `${heroesAssetsPath}/${heroe.id}.${pictureFormat}`;
    } else {
      relativeSourcePath = `${assetsPath}/no-image.png`;
    }

    return "".concat(relativeSourcePath.slice(0));
  }
}
