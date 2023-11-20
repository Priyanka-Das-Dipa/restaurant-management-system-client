import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

// image hosting url
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const { name, category, price, recipe, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the database`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }

    console.log("with img url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="whats up"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full py-6">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-bordered w-full py-6"
            />
          </div>

          <div className="flex gap-5">
            {/* category */}
            <div className="form-control w-full py-6">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-info w-full "
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full py-6">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          {/* text-area */}
          <div className="form-control w-full py-6">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <div className="py-6 w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Update Item <FaUtensils className="ml-2"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
