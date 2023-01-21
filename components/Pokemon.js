import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Pokemon = ({ pokemon, index }) => {
  const pokeIndex = ('' + (index + 1)).slice(-3)
  const pokeIndexImage = ('000' + (index + 1)).slice(-3)

  return (
    <Link passHref href={`/pokemon/${pokemon.name}`}>
      <a>
        <div className="flex flex-col justify-center items-center relative">
          <div className='card'>
            <div className='image'>
              <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndexImage}.png`} alt="image" width="230px" height="230px"/>
            </div>
            <div className='content'>
              <h3 className='pancakes-text'>{pokemon.name.toUpperCase()}</h3>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Pokemon;
