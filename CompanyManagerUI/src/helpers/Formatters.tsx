import moment from "moment";

export const formatDate = (date: string | Date, formatString: string = 'DD/MM/YYYY'): string => {
    return moment(new Date(date)).format(formatString);
}