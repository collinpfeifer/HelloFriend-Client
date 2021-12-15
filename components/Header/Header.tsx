import React from 'react';
import Image from 'next/image';
import Flex from '../Flex';
import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.Header}>
      <Flex container alignItems='center' justifyContent='space-between'>
        <Image
          src='/images/happy-face.png'
          alt='hello friend'
          width={110}
          height={80}
        />
        <Flex container>
          <div className={styles.NavItem}>
            <Link href='/'>Home</Link>
          </div>
          <div className={styles.NavItem}>
            <Link href='/ReleasePage'>Release</Link>
          </div>
          <div className={styles.NavItem}>
            <Link href='/ContactPage'>Contact</Link>
          </div>
          <div className={styles.NavItem}>
            <Link href='/Chat'>Chat</Link>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
