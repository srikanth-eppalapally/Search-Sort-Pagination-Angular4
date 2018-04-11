import { Pipe, PipeTransform } from '@angular/core';
@Pipe( {
name: 'sortBy'
} )
export class SortByPipe implements PipeTransform {
transform( array: Array<any>, fieldName: string, sortDirection: boolean ): Array<string> {
    array.sort( ( a: any, b: any ) => {
        if (a[fieldName] === undefined && b[fieldName] === undefined) {
            return 0;
        }
        if (a[fieldName] === undefined && b[fieldName] !== undefined) {
            return sortDirection ? 1 : -1;
        }
        if (a[fieldName] !== undefined && b[fieldName] === undefined) {
            return sortDirection ? -1 : 1;
        }
        if (a[fieldName] === b[fieldName]) {
            return 0;
        }
        return sortDirection ? (a[fieldName].toString().toLowerCase() >
         b[fieldName].toString().toLowerCase() ? -1 : 1) :
         (b[ fieldName ].toString().toLowerCase() > a[ fieldName ].toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}
