import { Injectable } from '@angular/core'

declare let showdown:any
@Injectable()

export class ShowdownService{

    converter(text):string {
        let converter = new showdown.Converter()
        return converter.makeHtml(text);

    };

}