import { TEvent } from './types';

export const getAllEvents = async (): Promise<TEvent[]> => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/events');
    const events = await res.json();
    return events.data as TEvent[];
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of error
  }
};
