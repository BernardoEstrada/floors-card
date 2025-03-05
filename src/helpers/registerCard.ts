export interface RegisterCardParams {
  type: string;
  name: string;
  description: string;
}

export default function registerCard(params: RegisterCardParams) {
  window.customCards = window.customCards || [];

  window.customCards.push({
    ...params,
    preview: true,
    // documentationURL: `${repository.url}/blob/main/docs/cards/${cardPage}.md`,
  });
}