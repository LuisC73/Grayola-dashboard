'use client';

import { getUser } from '@services';
import { User, UserContextProps } from '@types';
import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [user, setUser] = useState<User>({ name: '', role: '' });

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const { name, role } = await getUser();
        setUser({ name, role });
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserName();
  }, []);

  const setUserData = (name: string, role: string) => {
    setUser({ name, role });
  };

  return <UserContext.Provider value={{ user, setUserData }}>{children}</UserContext.Provider>;
};
