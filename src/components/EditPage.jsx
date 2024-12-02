import { useForm } from "react-hook-form";
import { useBook } from "./BookContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchData } from "../helpers/update";

const EditPage = () => {
  const { bookID } = useParams();

  const { setError, setBooks, navigate, books } = useBook();
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const book = books.find((book) => book.id.toString() === bookID.toString());

  const onSubmit = async (data) => {
    try {
      const updatedBook = await patchData(bookID, data);
      setBooks((prev) =>
        prev.map((book) =>
          book.id.toString() === bookID.toString() ? updatedBook : book
        )
      );

      setMessage("Your book has been succesfully updated");
      setTimeout(() => {
        setMessage("You will be redirected to homepage");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }, 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  useEffect(() => {
    if (book) {
      const { title, author, category, price, cover } = book;
      setValue("title", title);
      setValue("author", author);
      setValue("category", category);
      setValue("price", price);
      setValue("cover", cover);
    }
  }, [book]);

  return (
    <>
      <div className="super-flex">
        <h3 className="pb-10 text-lg font-semibold">
          You can edit your book below.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p className="font-bold">Specify Title:</p>
            <input
              className="super-input"
              placeholder="Enter the books title"
              type="text"
              id="title"
              {...register("title", {
                required: "You need to specify a title for a book",
                pattern: {
                  value: /^.{3,100}$/,
                  message: "title must contain at least 3 symbols up to a 100",
                },
              })}
            ></input>
            {errors && (
              <p className="text-red-500 text-sm pt-1">
                {errors.title?.message}
              </p>
            )}
          </label>
          <label>
            <p className="font-bold">Type in Author:</p>
            <input
              className="super-input"
              placeholder="Enter the authors name"
              type="text"
              id="author"
              {...register("author", {
                required: "Type in authors name, please",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "This field does only allows letters and spaces",
                },
              })}
            ></input>
            {errors && (
              <p className="text-red-500 text-sm pt-1">
                {errors.author?.message}
              </p>
            )}
          </label>

          <label>
            <p className="font-bold">Select a genre:</p>
            <select
              className="super-input border-blue-700 border-2"
              defaultValue=""
              id="genre"
              {...register("category", {
                required: "you must select a genre for a book",
              })}
            >
              <option value="" disabled>
                Available genres
              </option>
              <option value="fiction">Fiction</option>
              <option value="science">Science</option>
              <option value="biography">Biography</option>
              <option value="science fiction">Science Fiction</option>
              <option value="dystopian">Dystopian</option>
              <option value="romance">Romance</option>
              <option value="fantasy">Fantasy</option>
              <option value="adventure">Adventure</option>
            </select>
            {errors && (
              <p className="text-red-500 text-sm pt-1">
                {errors.category?.message}
              </p>
            )}
          </label>
          <label>
            <p className="font-bold">Enter Price:</p>
            <input
              className="super-input"
              placeholder="Enter price here"
              type="number"
              id="price"
              step=".01"
              {...register("price", {
                required: "You must designate a price",
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message:
                    "The price cannot be a negative number, and only include up to two decimals",
                },
              })}
            ></input>
            {errors && (
              <p className="text-red-500 text-sm pt-1">
                {errors.price?.message}
              </p>
            )}
          </label>

          <label>
            <p className="font-bold">Pick an Image:</p>
            <input
              className="super-input"
              placeholder="URL goes here"
              type="text"
              id="cover"
              {...register("cover", {
                required: "You need to pick a cover for a book",
                pattern: {
                  value:
                    /^(https?:\/\/)?([\w\d\.-]+)\.([a-z\.]{2,256})([\/\w\d\.-]*)\/?$/,
                  message: "Invalid url format",
                },
              })}
            ></input>
            {errors && (
              <p className="text-red-500 text-sm pt-1">
                {errors.cover?.message}
              </p>
            )}
          </label>
          <button type="submit" value="submit" className="super-btn mt-10 w-[100px]">
            Update
          </button>
          <button  className="super-btn mt-10 ms-5 w-[100px]" onClick={()=> navigate(-1)}>
            Cancel
          </button>
          {message !== "" && (
            <p className="text-xl pt-10 font-bold text-green-600">{message}</p>
          )}
        </form>
      </div>
    </>
  );
};

export default EditPage;
