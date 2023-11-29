import Heading from '@/components/heading/heading';
import ListData from '@/components/listData/listData';
import Title from '@/components/title/title';
import TypeDescription from '@/components/typeDescription/typeDescription';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default async function Type({ params }: { params: { slug: string } }) {
  const type = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/type/${params.slug}`
  ).then((res: Response) => {
    return res.json();
  });

  const { damage_relations, move_damage_class, pokemon } = type;

  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  } = damage_relations;

  return (
    <>
      <Heading title={type.name} />
      <section className='w-full'>
        <div className='grid grid-cols-4 gap-4 '>
          <TypeDescription className='flex flex-col justify-center items-center'>
            <Title level={2} title='Move Damage Class' />
            <p className='text-3xl uppercase text-yellow-400 mt-4'>
              {move_damage_class.name}
            </p>
          </TypeDescription>

          <TypeDescription>
            <Title level={2} title='Double Damage' />
            <div className='flex justify-between'>
              <div>
                <Title level={3} title='To' className='text-green-600' />
                <ListData data={double_damage_to} />
              </div>
              <div>
                <Title level={3} title='From' className='text-red-600' />
                <ListData data={double_damage_from} />
              </div>
            </div>
          </TypeDescription>

          <TypeDescription>
            <Title level={2} title='Half Damage' />
            <div className='flex justify-between'>
              <div>
                <Title level={3} title='To' className='text-green-600' />
                <ListData data={half_damage_to} />
              </div>
              <div>
                <Title level={3} title='From' className='text-red-600' />
                <ListData data={half_damage_from} />
              </div>
            </div>
          </TypeDescription>

          <TypeDescription>
            <Title level={2} title='No Damage' />
            <div className='flex justify-between'>
              <div>
                <Title level={3} title='To' className='text-green-600' />
                <ListData data={no_damage_to} />
              </div>
              <div>
                <Title level={3} title='From' className='text-red-600' />
                <ListData data={no_damage_from} />
              </div>
            </div>
          </TypeDescription>
        </div>

        <div className='mt-10 w-full'>
          <Title level={2} title='Pokemons' />
          <div className='flex flex-wrap gap-4'>
            {pokemon.map(({ pokemon }: any) => (
              <div
                key={pokemon.name}
                className='flex w-fit justify-between items-center bg-white border border-sky-100 rounded-xl py-3 px-4 text-gray-800 shadow-sm shadow-gray-200 capitalize'
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
