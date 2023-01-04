import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { useMemo, useState } from "react";
import { Input } from "../components/ui/input";
import { Recipe } from "./api/recipes";

const regex = new RegExp(
  "^(https?:\\/\\/)?" + // validate protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
    "(\\#[-a-z\\d_]*)?$", // validate fragment locator
  "i"
);

export default function Browse() {
  const [url, setUrl] = useState("");
  const [recipe, setRecipe] = useState<Recipe>();
  const [error, setError] = useState("");

  const isValidUrl = useMemo(() => {
    return !!regex.test(url);
  }, [url]);

  console.log(isValidUrl);

  return (
    <div>
      <Head>
        <title>Recipe Book | Browse</title>
        <meta name="description" content="Save your recipes here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Input
          icon={faSearch}
          placeholder="Enter a recipe URL"
          onChange={(e) => setUrl(e.currentTarget.value)}
          error={error}
        />
      </div>
    </div>
  );
}
