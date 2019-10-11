import{Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'capital'
})
export class CapitalPipe implements PipeTransform {
    transform(value: string, args?:any) {
        if(!value)
            return null;
        //return value[0].toUpperCase() + value.slice(1);
        //return (!!value) ? value.charAt(0).toUpperCase() + 
     //value.substr(1).toLowerCase() : '';

     value = value.toLowerCase();
    return value.substring(0,1).toUpperCase()+value.substring(1);
    }
}