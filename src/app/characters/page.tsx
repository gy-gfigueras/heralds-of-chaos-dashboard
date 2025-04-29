'use client';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Character } from '@/domain/character';
import { CharacterCard } from '../components/atoms/CharacterCard';
import { useCharacters } from '@/hooks/useCharacters';
import { useWorlds } from '@/hooks/useWorlds';
import { World } from '@/domain/world';
import CharactersFilter from '../components/atoms/CharactersFilter';
import WorldFilter from '../components/atoms/WorldFilter';
import BackButton from '../components/atoms/BackButton';
import CharactersSkeleton from '../components/organisms/skeletons/CharactersSkeleton';

export default function CharactersPage() {
  const [charactersFiltered, setCharactersFiltered] = useState<
    Character[] | undefined
  >();
  const { data, isLoading, error, getCharactersByWorldOrder } = useCharacters();
  const [worldSelected, setWorldSelected] = useState<World | null>(null);
  const {
    data: worlds,
    isLoading: isLoadingWorlds,
    worldsWithCharacters,
  } = useWorlds();
  console.log(charactersFiltered);
  console.log(worldSelected);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    const orderedCharacters = getCharactersByWorldOrder();
    const filteredCharacters = orderedCharacters?.filter((character) => {
      const matchesName = character.name.toLowerCase().includes(value);
      const matchesWorld = worldSelected
        ? character.world === worldSelected.identifier
        : true;
      return matchesName && matchesWorld;
    });
    setCharactersFiltered(filteredCharacters || []);
  };

  useEffect(() => {
    setCharactersFiltered(getCharactersByWorldOrder());
  }, [data]);

  useEffect(() => {
    if (worldSelected) {
      const orderedCharacters = getCharactersByWorldOrder();
      const filteredCharacters = orderedCharacters?.filter(
        (character) => character.world === worldSelected.identifier
      );
      setCharactersFiltered(filteredCharacters || []);
    } else {
      setCharactersFiltered(getCharactersByWorldOrder());
    }
  }, [worldSelected, data]);

  function handleWorldSelected(world: World) {
    if (worldSelected?.identifier === world.identifier) {
      setWorldSelected(null);
      return;
    }
    setWorldSelected(world);
  }

  if (isLoading || error || isLoadingWorlds) {
    return (
      <CharactersSkeleton />
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        height: '100vh',
        flexWrap: 'wrap',
        width: '100vw',
        paddingTop: ["100px", "64px",],
        gap: '1.5rem',
      }}
    >
      <BackButton path={'/'} />

      <CharactersFilter
        worldSelected={worldSelected}
        handleChange={handleChange}
      />

      <Box
        sx={{
          display: ['none', 'flex', 'flex'],
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'center',
          width: '90%',
          height: '75px',
          gap: '20px',
        }}
      >
        {worlds &&
          worldsWithCharacters!.map((world) => (
            <WorldFilter
              key={world.identifier}
              world={world}
              worldSelected={worldSelected}
              handleWorldSelected={handleWorldSelected}
            />
          ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: ['start', 'center', 'center'],
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          overflowY: 'auto',
          width: '90%',
          height: ['80%', '67%', '70%'],
          scrollbarColor: `#997A3E transparent`,
          overflowX: 'hidden',
          borderRadius: '30px',
          zIndex: 2,
          padding: '20px',
        }}
      >
        {charactersFiltered ? (
          charactersFiltered!.map((char) => (
            <CharacterCard
              key={char.identifier}
              id={char.identifier}
              name={char.name}
              image={char.image}
              world={char.world}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </Box>
  );
}
