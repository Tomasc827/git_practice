import { useBook } from "./BookContext";
import { getAllData, getSingleData } from "../helpers/get";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { patchData } from "../helpers/update";

const Homepage = () => {
  const { books, setError, setBooks, update, setUpdate } = useBook();

  console.log(books);
  const fetchData = async () => {
    try {
      const bookData = await getAllData();
      setBooks(bookData);
      setUpdate((prev) => {
        prev + 1;
      });
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const reservedHandler = async (id) => {
    const { reserved } = await getSingleData(id);
    await patchData(id, { reserved: !reserved });
    setUpdate((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <>
      <div className="super-flex">
        <h1 className="text-3xl text-sky-400">Welcome to Books'r'us</h1>
        <p className="text-sky-600 text-xl  pb-10 pt-24">
          Take a look at the selection of our books, we are sure to have
          something for your taste!
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-10 gap-x-5 pb-20">
        {books.map((book) => (
          <div className="bg-indigo-300 p-5 rounded-3xl" key={book.id}>
            <h3 className="font-semibold text-sky-700 pb-3 capitalize">
              {book.title}
            </h3>
            <p className="text-sky-800 capitalize">{book.author}</p>
            <p className="font-bold text-sky-800 capitalize">{book.category}</p>
            <img
              className=" w-[500px] h-[550px] md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] xl:w-[300px] xl:h-[350px]"
              src={book.cover}
              alt={book.title}
            />
            <p className="text-right text-2xl pt-1">€{book.price}</p>
            <div className="flex gap-5 justify-evenly">
              <button
                onClick={() => reservedHandler(book.id)}
                className={
                  book.reserved === false
                    ? "super-btn w-[100px]"
                    : "super-btn w-[100px] from-black via-gray-500 to-white border-black hover:shadow-lg hover:shadow-gray-600 "
                }
              >
                {book.reserved === false ? "Reserve" : "Taken"}
              </button>
              <Link to={`${book.id}`}>
                <button className="super-btn w-[100px]">Edit</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homepage;
