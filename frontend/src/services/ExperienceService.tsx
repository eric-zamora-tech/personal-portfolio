const firstExperienceDate: Date = new Date(2023, 0, 1);

export function getFirstExperienceDate(): Date {
    return firstExperienceDate;
}

export function getTotalYearsExperience(startDate?: Date): number {
    const currentDate: Date = new Date();
    const start: Date = startDate == null ? firstExperienceDate : startDate;

    let yearsDifference: number = currentDate.getFullYear() - start.getFullYear();
    const monthDifference: number = currentDate.getMonth() - start.getMonth();
    const dayDifference: number = currentDate.getDate() - start.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        yearsDifference--;
    }

    return yearsDifference;
}

export function getTotalDaysExperience(startDate?: Date): number {
    const currentDate: Date = new Date();
    const start: Date = startDate == null ? firstExperienceDate : startDate;

    currentDate.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;

    return Math.round((currentDate.getTime() - start.getTime()) / millisecondsPerDay);
}