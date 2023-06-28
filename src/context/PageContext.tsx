import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState
} from 'react';

interface IPageProvider {
  children: ReactNode;
}

export interface IData {
  avatar_url?: string;
  created_at?: string;
  login?: string;
  name?: string;
  html_url?: string;
  company?: string;
  bio?: string;
  location?: string;
  twitter_username?: string;
  blog?: string;
  public_repos?: string;
  followers?: string;
  following?: string;
}

interface IPageContext {
  data: IData;
  error: boolean;
  setData: Dispatch<SetStateAction<IData>>;
  setError: Dispatch<SetStateAction<boolean>>;
}

export const PageContext = createContext<IPageContext>({
  data: {},
  error: false,
  setData: () => [],
  setError: () => false
});

export function usePageContext() {
  return useContext(PageContext);
}

export function PageProvider({ children }: IPageProvider) {
  const [data, setData] = useState<IData>({});
  const [error, setError] = useState(false);

  return (
    <PageContext.Provider
      value={{
        data,
        error,
        setData,
        setError
      }}
    >
      {children}
    </PageContext.Provider>
  );
}
