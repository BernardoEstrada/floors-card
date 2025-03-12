export interface RegisterCardParams {
  type: string;
  name: string;
  description: string;
}


export default function registerCard(params: RegisterCardParams) {
  const windowWithCards = window as unknown as Window & {
    customCards: unknown[];
  };
  windowWithCards.customCards = windowWithCards.customCards || [];

  windowWithCards.customCards.push({
    ...params,
    preview: true,
    // documentationURL: `${repository.url}/blob/main/docs/cards/${cardPage}.md`,
  });
}