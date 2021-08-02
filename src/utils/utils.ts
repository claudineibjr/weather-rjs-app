export class DateUtilities {
    static readonly days: Array<String> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    static readonly shortDays: Array<String> = DateUtilities.days.map((dayName) => dayName.substring(0, 3));
}