import React from 'react';
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from 'next/link';

const Pokemon = ({ pokemon }) => {
  const pokeIndex = ('' + (pokemon.id)).slice(-3)
  const pokeIndexImage = ('000' + (pokemon.id)).slice(-3)
  const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

  const renderTypes = () => (
    pokemon.types.map(type => (
      <li key={type.slot} className="px-2 py-1 rounded text-black types">
        {type.type.name.toUpperCase()}
      </li>
    ))
  )

  const renderStats = () => (
    pokemon.stats.map((stat, index) => (
      <div key={index}>
        <div className="">
          <span>{stat.stat.name.toUpperCase()}</span>: <span className='statNumber'>{stat.base_stat},</span>
        </div>
      </div>
    ))
  )

  return (
    <>
      <div className="logo bg-gray-200">
        <div id="pagegradient"></div>

        <a class="button">
          <Link href="/">
            <span>Go Back</span>
          </Link>

        </a>
        <Image
          alt="logo"
          width={200}
          height={100}
          src={Logo}
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-200">
        <span className="absolute lg:text-[200px] font-bold bg-gray-200 text-black md:text-[170px] pokeName">{pokemon.name}</span>
        <Image
          alt={pokemon.name}
          width={200}
          height={200}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndexImage}.png`}
        />
      </div>

      <div className="bg-gray-200 rounded p-5 text-black">
        <ul className="flex gap-5">
          {renderTypes()}
        </ul>

        <div className='status bg-gray-200'>
          {renderStats()}
        </div>
      </div>
    </>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
  const pokemon = await response.json()

  return {
    props: {
      pokemon
    }
  }
}