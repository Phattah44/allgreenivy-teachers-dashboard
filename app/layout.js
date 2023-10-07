import './globals.css';

export const metadata = {
  title: 'Allgreenivy',
  description: 'You number one agro e-learning platform',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div></div>
        <main className='app'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
