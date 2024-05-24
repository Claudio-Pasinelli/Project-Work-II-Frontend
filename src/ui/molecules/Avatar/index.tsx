import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES, User } from '../../../utils';

interface Props {
  userData: User | null;
  isMe?: boolean;
}

const Avatar = ({ userData, isMe = false }: Props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [meName, setMeName] = useState('');

  const navigateToUserPage = (userId: string, isMe: boolean) => {
    !isMe ? navigate(ROUTES.users + userId) : navigate(ROUTES.myRecipes); // DA RIVEDERE!!!!!
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (userData) {
          const nameParts = userData.name.split(' ');
          let initials = '';
          if (nameParts.length === 1) {
            initials = nameParts[0].charAt(0) + nameParts[0].charAt(nameParts[0].length - 1);
          } else {
            initials = nameParts.map((part: string) => part.charAt(0)).join('');
          }
          setUsername(initials.toUpperCase());
          setIsLoggedIn(true);
          setMeName(userData.name);
        } else {
          setUsername('NR');
          setIsLoggedIn(false);
          setMeName('Non Registrato');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <figure
      className="size-11 flex bg-gray-50 border border-black rounded-full justify-center items-center cursor-pointer"
      onClick={() => userData && userData.id && navigateToUserPage(userData.id, isMe)}
      // eslint-disable-next-line quotes
      title={isLoggedIn ? meName : "Non hai effettuato l'accesso"}>
      <p>{username}</p>
    </figure>
  );
};

export default Avatar;