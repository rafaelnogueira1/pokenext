import Heading from '@/components/heading/heading';
import ListData from '@/components/listData/listData';
import Title from '@/components/title/title';
import TypeDescription from '@/components/typeDescription/typeDescription';
import { filterUniqueValuesByProperty } from '@/lib/filter-unique-values-by-property';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default async function Ability({
  params,
}: {
  params: { slug: string };
}) {
  const abilities = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/ability/${params.slug}`
  )
    .then((res: Response) => {
      return res.json();
    })
    .then((json) => {
      const language = 'en';

      json.effect_changes = filterUniqueValuesByProperty(
        json.effect_changes[0]?.effect_entries,
        language,
        // @ts-ignore
        'effect'
      );

      json.effect_entries = filterUniqueValuesByProperty(
        json.effect_entries,
        language,
        // @ts-ignore
        'effect'
      );

      json.flavor_text_entries = filterUniqueValuesByProperty(
        json.flavor_text_entries,
        language,
        // @ts-ignore
        'flavor_text'
      );

      return json;
    });

  const { effect_entries, effect_changes, flavor_text_entries, pokemon } =
    abilities;

  return (
    <>
      <Heading title={abilities.name} />
      <section className='w-full'>
        <div className='grid grid-cols-3 gap-4 '>
          <TypeDescription>
            <Title level={2} title='Description' />
            <ListData data={flavor_text_entries} property='flavor_text' />
          </TypeDescription>

          <TypeDescription>
            <Title level={2} title='Effects' />
            <ListData data={effect_entries} property='effect' />
          </TypeDescription>

          <TypeDescription>
            <Title level={2} title='Effects changes' />
            <ListData data={effect_changes} property='effect' />
          </TypeDescription>
        </div>

        <div className='mt-10'>
          <Title level={2} title='Pokemons' />
          <div className='grid grid-cols-10 gap-4'>
            {pokemon.map(({ pokemon }: any) => (
              <div
                key={pokemon.name}
                className='flex justify-between items-center bg-white border border-sky-100 rounded-xl py-3 px-4 text-gray-800 shadow-sm shadow-gray-200 capitalize'
              >
                {pokemon.name}
                <ChevronRightIcon className='w-4 h-4 text-sky-900' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
