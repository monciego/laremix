type EventCardProps = {
  datetime: string;
  date: string;
  href: string;
  title: string;
  description: string;
};

const EventCard = ({
  datetime,
  date,
  href,
  title,
  description,
}: EventCardProps): JSX.Element => {
  return (
    <article className='flex max-w-xl rounded bg-slate-900 text-white px-4 py-6 flex-col items-start justify-between'>
      <div className='flex items-center gap-x-4 text-xs'>
        <time dateTime={datetime} className='text-gray-300'>
          {date}
        </time>
        -
        <time dateTime={datetime} className='text-gray-300'>
          {date}
        </time>
      </div>
      <div className='group relative'>
        <h3 className='my-3 text-lg font-semibold leading-6 '>
          <a href={href}>
            <span className='absolute inset-0' />
            {title}
          </a>
        </h3>
        <p className=' line-clamp-3 text-sm leading-6 text-gray-200'>
          {description}
        </p>
      </div>
    </article>
  );
};

export default EventCard;
