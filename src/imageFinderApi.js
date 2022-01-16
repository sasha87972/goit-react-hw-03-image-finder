const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "24205762-ee9a9b5fc8d46ef3eb28a7ab4";

export default function ImagesApiService(searchQuery, pageNum) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&key=${API_KEY}&image_type=photo&orientation=horizontal&page=${pageNum}&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Ничего не найдено по запросу ${searchQuery}`)
    );
  });
}
