import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    console.log(params.eventId);
    const res = await fetch(
      `http://127.0.0.1:8000/api/events/${params.eventId}`
    );
    const event = await res.json();
    return event.data;
  } catch (error) {
    console.error(error);
  }
};

const Event = (): JSX.Element => {
  const event = useLoaderData<typeof loader>();
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
