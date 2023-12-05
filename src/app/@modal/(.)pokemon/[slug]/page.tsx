import ModalPokemon from './modalPokemon';

export default async function Pokemon({
  params,
}: {
  params: { slug: string };
}) {
  const pokemon = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pokemon/${params.slug}`
  ).then((res: Response) => {
    return res.json();
  });

  return <ModalPokemon pokemon={pokemon} />;
}
