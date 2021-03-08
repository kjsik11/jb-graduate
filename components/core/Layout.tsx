import React from 'react';
import styled from 'styled-components';
import { usePreventScroll } from '@react-aria/overlays';

import { useUI } from '@components/ui/context';
import { Header, Head } from '.';

const Root = styled.div``;

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { displayModal, closeModal } = useUI();
  usePreventScroll({ isDisabled: !displayModal });
  const [hasScrolled, setHasScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handler = () => {
      const { scrollTop } = document.documentElement;
      setHasScrolled(scrollTop > 0);
    };

    handler();

    document.addEventListener('scroll', handler);

    return () => document.removeEventListener('scroll', handler);
  }, []);

  return (
    <Root className="font-noto mx-auto h-full pt-20">
      <Header />
      <main className="relative h-full">{children}</main>
      {/* <MenuModal open={displayModal} close={closeModal}>
        children
      </MenuModal> */}
    </Root>
  );
};

export default Layout;
