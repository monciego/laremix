import { json, type MetaFunction } from '@remix-run/node';
import EventCard from '../components/event-card';
import { useLoaderData } from '@remix-run/react';
import { getAllEvents } from '../data.server';

export const meta: MetaFunction = () => {
  return [
    { title: 'Laremix' },
    { name: 'description', content: 'Welcome to laremix!' },
  ];
};

export const loader = async () => {
  const events = await getAllEvents();
  return json({ events });
};

export default function Index() {
  const { events } = useLoaderData<typeof loader>();
  console.log(events);
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
