export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=fSDvxCITLTqhcjPdBgL340UgQHT8xi26`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id,
        title,
        url,
      };
    }
  );
};
