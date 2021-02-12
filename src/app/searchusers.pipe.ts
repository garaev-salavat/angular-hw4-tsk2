import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchusers',
})
export class SearchusersPipe implements PipeTransform {
  transform(users, value): unknown {
    return users.filter(user => {
      return user.name.includes(value);
    });
  }
}
