import { useForm } from "react-hook-form";

type FormData = {
  hobbies: string[];
};

export const HobbiesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Selected hobbies:", data.hobbies);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Select Your Hobbies:</h3>
        
        <label className="block mb-2">
          <input
            type="checkbox"
            value="Reading"
            {...register("hobbies", {
              required: "Please select at least one hobby"
            })}
            className="mr-2"
          />
          Reading
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            value="Gaming"
            {...register("hobbies", {
              required: "Please select at least one hobby"
            })}
            className="mr-2"
          />
          Gaming
        </label>

        <label className="block mb-2">
          <input
            type="checkbox"
            value="Cooking"
            {...register("hobbies", {
              required: "Please select at least one hobby"
            })}
            className="mr-2"
          />
          Cooking
        </label>

        {errors.hobbies && (
          <p className="text-red-500 text-sm mt-1">
            {errors.hobbies.message}
          </p>
        )}
      </div>

      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};