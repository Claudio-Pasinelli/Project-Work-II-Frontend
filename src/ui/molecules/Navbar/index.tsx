import { Link, useLocation, useParams } from 'react-router-dom';
import { cn } from '../../../utils/helpers/tailwindMerge';
import { ROUTES } from '../../../utils';
import { useEffect, useState } from 'react';
import AvatarNavBar from '../AvatarNavBar';

const Navbar = () => {
  const location = useLocation();
  const params = useParams();

  const [pageName, setPageName] = useState('');

  useEffect(() => {
    if (location.pathname === ROUTES.home || location.pathname === '') {
      setPageName('HOME');
    } else if (location.pathname === ROUTES.contacts) {
      setPageName('CONTATTACI');
    } else if (location.pathname === ROUTES.profile) {
      setPageName('PROFILO');
    } else if (location.pathname === ROUTES.myRecipes) {
      setPageName('LE MIE RICETTE');
    } else if (location.pathname.startsWith(ROUTES.myRecipesForm)) {
      if (params.id) {
        setPageName('MODIFICA UNA RICETTA');
      } else {
        setPageName('NUOVA RICETTA');
      }
    } else if (location.pathname === ROUTES.settings) {
      setPageName('IMPOSTAZIONI');
    } else {
      setPageName('');
    }
  }, [location.pathname, params.id]);

  return (
    <nav className="sticky top-0 z-50 w-full h-20 min-h-28 flex justify-between items-center bg-yellow-100 py-2 px-4 shadow-xl">
      <h1 className="text-white font-bold">{pageName}</h1>
      <section className="flex items-center">
        <div className="border-l-2 border-black-50 flex flex-col items-start mr-8 pl-8">
          <section className="w-full flex justify-end">
            {location.pathname !== '/' && (
              <Link
                to="/"
                className={cn(
                  'text-white',
                  location.pathname === '/'
                    ? 'bg-black-50 p-2 rounded-2xl'
                    : 'bg-none p-0 rounded-none',
                )}>
                Home
              </Link>
            )}
            {location.pathname !== '/contacts' && (
              <Link
                to="/contacts"
                className={cn(
                  'text-white ml-4',
                  location.pathname === '/contact-us'
                    ? 'bg-black-50 p-2 rounded-2xl'
                    : 'bg-none p-0 rounded-none',
                )}>
                Contattaci
              </Link>
            )}
            {location.pathname !== '/my-recipes' && (
              <Link
                to="/my-recipes"
                className={cn(
                  'text-white ml-4',
                  location.pathname === '/my-recipes'
                    ? 'bg-black-50 p-2 rounded-2xl'
                    : 'bg-none p-0 rounded-none',
                )}>
                Le mie ricette
              </Link>
            )}
          </section>
        </div>
        <AvatarNavBar />
      </section>
    </nav>
  );
};

export default Navbar;