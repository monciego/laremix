import type { LinksFunction } from '@remix-run/node';
import stylesheet from './tailwind.css?url';
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16'>
          <div className='flex items-center justify-between mx-auto '>
            <div>
              <h3 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                <Link to={`/`}>Larevent</Link>
              </h3>
              <p className='mt-2 text-lg leading-8 text-gray-600'>
                Transforming events, connecting people
              </p>
            </div>
            <div>
              <Link
                to='/events/create'
                className='bg-indigo-700 px-4 py-2 rounded text-white ring ring-indigo-500'
              >
                Create event
              </Link>
            </div>
          </div>
          <div className='border-t border-slate-400 my-6 py-6'>{children}</div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
