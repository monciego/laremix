import type { MetaFunction } from '@remix-run/node';
import EventCard from '../components/event-card';

export const meta: MetaFunction = () => {
  return [
    { title: 'Laremix' },
    { name: 'description', content: 'Welcome to laremix!' },
  ];
};

const events = [
  {
    id: 1,
    title: 'Event 1',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2024-03-16',
  },
];

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Larevent
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Transforming events, connecting people
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
}
