import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Laremix' },
    { name: 'description', content: 'Welcome to laremix!' },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1 className='text-center my-6 font-bold text-3xl'>Event Management</h1>
    </div>
  );
}
