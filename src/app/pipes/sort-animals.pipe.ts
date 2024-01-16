import {Pipe, PipeTransform} from '@angular/core';
import Animal from "../model/animal";

@Pipe({
  name: 'sortAnimals'
})
export class SortAnimalsPipe implements PipeTransform {

  transform(array: Animal[] | null): Animal[] {

    if (!array) {
      return [];
    }


    // @ts-ignore
    return [...array].sort((a, b) =>
        a.id-b.id

      )
  }

}
