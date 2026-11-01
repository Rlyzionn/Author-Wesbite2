import {notFound} from 'next/navigation';
import {AboutPage,ArtistsPage,TrademarkPage,CharityPage,ContactPage,BlogPage} from '../../components/original-pages';
import {findBook} from '../../lib/catalog';
import BookPage from '../../components/book-page';
import ChapterPage from '../../components/chapter-page';
import {books} from '../../lib/catalog';
import {bookDetails} from '../../lib/book-details';
const titles:Record<string,string>={'about-me':'About Hal','artist-corner':'Artist Corner','trademark':'Meet Ace','josie-mazzo-charities':'Josie Mazzo Children’s Charities','contact-me':'Contact Hal','blog':'Short Sleeves Insights'};
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:(titles[slug]||findBook(slug)?.title||'Hal Manogue')+' | Short Sleeves'}}
export default async function OriginalPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;switch(slug){case 'about-me':return <AboutPage/>;case 'artist-corner':return <ArtistsPage/>;case 'trademark':return <TrademarkPage/>;case 'josie-mazzo-charities':return <CharityPage/>;case 'contact-me':return <ContactPage/>;case 'blog':return <BlogPage/>;default:const book=findBook(slug);if(book)return <BookPage book={book}/>;const chapterBook=books.find(b=>decodeURIComponent(bookDetails[b.img].chapter||'')===decodeURIComponent(slug))||(slug==='short-sleeves-2007-read'?books.find(b=>b.img==='friends'):undefined);if(chapterBook)return <ChapterPage book={chapterBook}/>;notFound()}}
