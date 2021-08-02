export class DateUtilities {
    static days: Array<String> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    static shortDays: Array<String> = DateUtilities.days.map((dayName) => dayName.substring(0, 3));
}