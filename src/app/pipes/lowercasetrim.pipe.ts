import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe ({
    name: 'lowercaseTrim'
})

export class LowercaseTrimPipe implements PipeTransform {
    transform(value: string): string {
        let trimmed = value.toLowerCase();
        trimmed = trimmed.replace(/\s/g, "");
        return trimmed
    }
}