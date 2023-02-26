import List from "./List";
import Card from "./Card";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function Main() {
  const [search, setSearch] = useState("");
  const [found, setFound] = useState(true);

  const pokemonDetail = `https://pokeapi.co/api/v2/pokemon/${search.id}`;

  if (!search) {
    return (
      <main id="home" className="row-span-6 pt-4">
        <div className="flex flex-col justify-center items-center">
          <div className="inline-flex">
            <img
              src={"/pokeball.svg"}
              alt="pokeball"
              className="inline object-cover h-12 w-12"
            />
            <Formik
              initialValues={{ search: "" }}
              onSubmit={async (e) => {
                const lowerCase = e.search.toLowerCase();
                const response = await fetch(
                  `https://pokeapi.co/api/v2/pokemon/${lowerCase}`
                );
                if (response.ok) {
                  const data = await response.json();
                  setSearch(data);
                  setFound(true);
                } else {
                  setFound(false);
                }
              }}
            >
              <Form>
                <Field
                  className="inline h-12 w-64 bg-red-100 border-solid border-2 border-black rounded-md pl-1 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                  placeholder=" . . ."
                  name="search"
                />{" "}
                {found ? null : (
                  <p className="text-red-500 font-bold text-center">
                    Who's that Pokemon?
                  </p>
                )}
              </Form>
            </Formik>
          </div>
        </div>
        <List />
      </main>
    );
  } else
    return (
      <div className="flex flex-col items-center justify-center mt-32 mb-32">
        <Card pokemonDetail={pokemonDetail} />

        <a href="/">
          <button className="flex w-16 h-8 justify-center items-center mt-4 rounded-md border-2 border-black bg-red-100 px-4 py-2 text-sm font-bold text-gray-700 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            Home
          </button>
        </a>
      </div>
    );
}

export default Main;
