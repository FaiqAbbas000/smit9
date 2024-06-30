import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // if (data.password.length <= 5) {
    //   errors.password = "At least 6 character required.";
    // } else {
    //   try {
    //     createUserWithEmailAndPassword(auth, data.email, data.password)
    //       .then((userCredential) => {
    //         const user = userCredential.user;
    //         console.log("user", user);
    //         setRain(true);
    //         // console.log("email: ", user.auth.email);
    //         addUser(data);
    //         toast.success("Signup Successfully!");
    //       })
    //       .catch((error) => {
    //         console.log(error.code);
    //         console.log(error.message);
    //         alert(error.message);
    //       });
    //   } catch (err) {
    //     console.log("Error occured from add user method: ", err);
    //   }
    //   // }
  };
  return (
    <>
      <Navbar />
      <h1 className="text-3xl text-center font-bold mt-20 mb-10" >Student SignUp</h1>
      <form
        className="lg:col-span-2 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 mx-32 md:grid-cols-6">
          <div className="md:col-span-3">
            <label>Student Name</label>
            <input
              type="text"
              {...register("sname", { required: true })}
              // name="address"
              // id="address"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              // value=""
              placeholder="Enter Student name"
            />
            {errors.sname && (
              <p className="text-red-500">Full name is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              // name="city"
              // id="city"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              // value=""
              placeholder="Valid email"
            />
            {errors.email && (
              <p className="text-red-500">Valid email is required.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Father Name </label>
            <input
              type="text"
              {...register("fname", { required: true })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Father Name"
            />
            {errors.fname && (
              <p className="text-red-500">Father Name.</p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter Password"
            />
            {errors.password && (
              <p className="text-red-500">
                Password is atleast 6 characters.
              </p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Mobile No</label>
            <input
              type="text"
              {...register("mobile", { required: true, minLength: 12 })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter Mobile No"
            />
            {errors.mobile && (
              <p className="text-red-500">
                Mobile Number Required.
              </p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>CNIC</label>
            <input
              type="text"
              {...register("cnic", { required: true })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter CNIC No"
            />
            {errors.cnic && (
              <p className="text-red-500">
                CNIC is Requidred.
              </p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Batch</label>
            <input
              type="text"
              {...register("batch", { required: true, minLength: 6 })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter Batch No"
            />
            {errors.batch && (
              <p className="text-red-500">
                Enter the Batch Number.
              </p>
            )}
          </div>

          <div className="md:col-span-3">
            <label>Roll No</label>
            <input
              type="text"
              {...register("roll", { required: true, minLength: 6 })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter Roll No"
            />
            {errors.roll && (
              <p className="text-red-500">
                Roll No Required.
              </p>
            )}
          </div>

          <div className="md:col-span-6">
            <label>Address</label>
            <input
              type="text"
              {...register("address", { required: true, minLength: 6 })}
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="Enter Address"
            />
            {errors.address && (
              <p className="text-red-500">
                Enter the permenant address.
              </p>
            )}
          </div>
          <div className="">
            <div className="">
              <button
                // disabled={!pImage}
                className={
                  // !pImage
                  //   ? "bg-gray-200 text-slate-400 font-bold py-2 px-6 rounded"
                  `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mt-2`
                }
              >
                SIGNUP
              </button>
            </div>
          </div>
        </div>
      </form>

    </>
  )
}


export default StudentForm