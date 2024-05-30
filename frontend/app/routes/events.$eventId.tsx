import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getEvent } from '../data.server';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.eventId, 'Missing eventId param');
  const event = await getEvent(params.eventId);
  if (!event) {
    throw new Response('Not Found', { status: 404 });
  }
  return json({ event });
};

const Event = (): JSX.Element => {
  const { event } = useLoaderData<typeof loader>();
  return (
    <div className='space-y-4'>
      <div>
        <strong className='font-bold'>Event name : </strong>
        <span>{event.name}</span>
      </div>
      <div>
        <strong className='font-bold'>Description : </strong>
        <span>{event.description}</span>
      </div>
      <div>
        <strong className='font-bold'>Time : </strong>
        <span>
          {event.start_time} - {event.end_time}
        </span>
      </div>
    </div>
  );
};

export default Event;
