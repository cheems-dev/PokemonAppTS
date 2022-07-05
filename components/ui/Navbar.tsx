import NextLink from 'next/link';
import Image from 'next/image';

import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
        alt='Icono de la app'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link>
          <Text
            h2
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight='bold'
          >
            P
          </Text>
          <Text
            h3
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
          >
            okémon
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
