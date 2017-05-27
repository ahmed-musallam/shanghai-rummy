export class StringUtil
{
  
  private static getInitials(str:string){
    var initials = str.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }
}