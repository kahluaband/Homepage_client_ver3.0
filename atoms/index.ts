import { atom } from 'recoil';

export const selectedYear = atom<string>({
  key: 'selectedYear',
  default: 'All',
});

export const sessionType = atom<string>({
  key: 'sessionType',
  default: 'All',
});

export const ticketType = atom<string>({
  key: 'ticketType',
  default: 'All',
});

export const totalTicket = atom<number>({
  key: 'totalTicket',
  default: 0,
});

export const totalApplicant = atom<number>({
  key: 'totalApplicant',
  default: 0,
});
