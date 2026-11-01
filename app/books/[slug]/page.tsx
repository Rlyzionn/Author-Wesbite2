import {notFound} from 'next/navigation';
import {findBook} from '../../../lib/catalog';
import BookPage from '../../../components/book-page';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return {title:(findBook(slug)?.title||'Books')+' | Hal Manogue'}}
export default async function BookRoute({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const book=findBook(slug);if(!book)notFound();return <BookPage book={book}/>}
