import { Pipe, PipeTransform } from '@angular/core';
import Animal from "../model/animal";

@Pipe({
  name: 'sortAnimalsDesc'
})
export class SortAnimalsDescPipe implements PipeTransform {

  transform(array: Animal[] | null): Animal[] {

    if (!array) {
      return [];
    }


    // @ts-ignore
    return [...array].sort((a, b) =>
      b.id-a.id

    )
  }

}
