export class DateUtilities {
    static readonly days: Array<String> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    static readonly shortDays: Array<String> = DateUtilities.days.map((dayName) => dayName.substring(0, 3));

    static getDateAccordingToCurrentWeekDayName = (dayName: string): Date => {
        dayName = dayName.replace('/', '');

        const dayNameIndex = DateUtilities.days.indexOf(dayName);
        if (dayNameIndex === -1) {
            const dateAccordingToRelativeDay = DateUtilities.getDateAccordingToRelativeDay(dayName);
            if (dateAccordingToRelativeDay !== null) {
                throw new Error(`Date invalid - ${dayName}`);
            }
            return dateAccordingToRelativeDay!;
        }

        const date = new Date(Date.now());
        const dayNameNowIndex = date.getDay();

        let differenceDays = dayNameIndex - dayNameNowIndex;
        if (differenceDays < 0) {
            differenceDays = differenceDays + 7;
        }
        date.setDate(date.getDate() + differenceDays);

        return date;
    }

    private static getDateAccordingToRelativeDay = (relativeDayName: string): Date | null => {
        const date = new Date(Date.now());

        switch (relativeDayName.toLowerCase()) {
            case 'today':
                return date;

            case 'yesterday':
                date.setDate(date.getDate() - 1);
                return date;

            case 'tomorrow':
                date.setDate(date.getDate() + 1);
                return date;
        }

        return null;
    }

    static dateIsAfterToday = (comparativeDate: Date): boolean => {
        const now = DateUtilities.resetHourMinuteSecondMillisecond(new Date(Date.now()));
        comparativeDate = DateUtilities.resetHourMinuteSecondMillisecond(comparativeDate);
        
        if (now.getFullYear() === comparativeDate.getFullYear()) {
            if (now.getMonth() === comparativeDate.getMonth()) {
                return comparativeDate.getDate() > now.getDate();
            } else {
                return comparativeDate.getMonth() > now.getMonth();
            }
        } else {
            return comparativeDate.getFullYear() > now.getFullYear();
        }
    }

    private static resetHourMinuteSecondMillisecond = (date: Date): Date => {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        
        return date;
    }
}