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
            differenceDays = differenceDays * -1;
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
}