import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecurePublic from "../../../hooks/useAxiosSecurePublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const item = useLoaderData();
    const { name, price, recipe,category, _id } = item;

    const { register, handleSubmit, reset } = useForm();
    const axiosSecurePublic = useAxiosSecurePublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {

        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosSecurePublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (res.data.success) {
            // now send the menuitem data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                // show menu item update success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is an updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <SectionTitle
                heading="Update Item"
                subHeading="Ready to Update"
            ></SectionTitle>
            <div className="card w-full shrink-0 shadow-2xl mt-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 bg-slate-200">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Recipe name*</span>
                        </label>
                        <input defaultValue={name} type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                    </div>
                    <div className="flex items-center w-full gap-4">
                        {/* category field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Category*</span>
                            </label>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", { required: true })}>
                                <option disabled value="default">All Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price field */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Price*</span>
                            </label>
                            <input defaultValue={price} type="number" placeholder="Price" className="input input-bordered" {...register("price", { required: true })} />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Recipe Details*</span>
                        </div>
                        <textarea defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details" {...register("recipe", { required: true })}></textarea>
                    </div>
                    <div className="form-control">
                        <input defaultValue={""} type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: true })} />
                    </div>
                    <div>
                        <button className="btn-grad bg-gradient-to-r from-[#FF512F] via-[#ffa15d] to-[#f14a29] p-3 text-center uppercase transition duration-500 bg-[200%_auto] text-white shadow-[0_0_20px_rgba(238,238,238,1)] rounded-lg hover:bg-right hover:text-white font-bold flex items-center gap-6">
                            Update an Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;