import { FC } from 'react';

import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces/pokemon-list';
import Router, { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = (props) => {
  const router = useRouter();

  const { pokemon } = props;

  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card hoverable clickable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width='100%' height={140} />
          <Card.Footer>
            <Row justify='space-between'>
              <Text transform='capitalize'>{pokemon.name}</Text>
              <Text>#{pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid>
  );
};
