import { getGifs } from "../../controllers/gifs-controller";

describe("Pruebas en controladora getGifs", () => {
  test("Debe retornar 10 elementos", async () => {
	const gifs = await getGifs("Boca Juniors")
    const test_gifsLength = 10;
	expect(gifs.length).toEqual(test_gifsLength);
  });
});
