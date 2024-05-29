import { Link } from '@remix-run/react';

type EventCardProps = {
  id: number;
  name: string;
  description: string;
  start_time: string;
  end_time: string;
};

const EventCard = ({
  id,
  name,
  description,
  start_time,
  end_time,
}: EventCardProps): JSX.Element => {
  return (
    <article className='flex max-w-xl rounded bg-slate-900 text-white px-4 py-6 flex-col items-start justify-between'>
      <Link to={`events/${id}`}>
        <div className='flex items-center gap-x-4 text-xs'>
          <time dateTime={start_time} className='text-gray-300'>
            {start_time}
          </time>
          -
          <time dateTime={end_time} className='text-gray-300'>
            {end_time}
          </time>
        </div>
        <div className='group relative'>
          <h3 className='my-3 text-lg font-semibold leading-6 '>{name}</h3>
          <p className=' line-clamp-3 text-sm leading-6 text-gray-200'>
            {description}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default EventCard;
