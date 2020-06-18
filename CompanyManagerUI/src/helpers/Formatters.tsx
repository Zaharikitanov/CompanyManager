import moment from "moment";
// import numeral from 'numeral';

// export const formatCurrency = (amount: number) => {
//     return `£${numeral(amount).format('0,0[.]00')}`;
// }

// export const formatPercentage = (percentage: number) => {
//     return `${numeral(percentage).format('0,0[.]0')}%`;
// }

export const formatDate = (date: string | Date, formatString: string = 'DD/MM/YYYY'): string => {
    return moment(new Date(date)).format(formatString);
}