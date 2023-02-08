import { createStore } from "solid-js/store";
import { onMount } from "solid-js";

const useBlogPosts = () => {
  let url =
    "https://www.googleapis.com/blogger/v3/blogs/1435434888713979579/posts?key=AIzaSyBYYFsSeCGec4RCV6tqzZXuW4mBPASptgY&fetchImages=true&fetchBodies=true";

  let [state, setState] = createStore([], { name: "blog-posts" });

  onMount(() => {
    fetch(url).then(async (response) => {
      let posts = await response.json();

      setState(
        [...state, ...posts.items].sort((a, b) => {
          if (a.updated > b.updated) return -1;
          if (a.updated < b.updated) return 1;

          return 0;
        })
      );
    });
  });

  return state;
};

export default useBlogPosts;
