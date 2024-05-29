import type { MetaFunction } from '@remix-run/node';
import EventCard from '../components/event-card';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Laremix' },
    { name: 'description', content: 'Welcome to laremix!' },
  ];
};

export const loader = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/events');
    const events = await res.json();
    console.log(events);
    return events.data;
  } catch (error) {
    console.error(error);
  }
};

export default function Index() {
  const events = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
