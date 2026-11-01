import type {Metadata} from 'next';
import './globals.css';
import './studio.css';
import './complete-site.css';
export const metadata:Metadata={title:'Hal Manogue | A little shift in perspective',description:'Poetry, possibility, and a different point of view. Explore Hal Manogue’s books and find a story for your curiosity.'};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
