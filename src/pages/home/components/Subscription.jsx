import image_7 from "../../../assets/images/image-7.png";
import ExploreBtn from "../../../components/buttons/ExploreBtn";

const Subscription = () => {
  return (
    <section
      className="lg:min-h-[90vh] min-h-[70vh] w-full relative flex"
      style={{ backgroundImage: `url(${image_7})`, backgroundSize: "cover" }}
    >
      <div className="absolute w-full h-full bg-[#000000ae] top-0 flex flex-col justify-center gap-6 text-white lg:px-10 px-6">
        <h2 className="lg:text-5xl text-3xl font-bold lg:w-[60%] w-full lg:leading-[3rem]">
          Stay Informed with Tecterminal Newsletter
        </h2>
        <p className="lg:w-[65%] text-gray-300">
          Stay up to date with the latest news and insights from Tecterminal by
          subscribing to our newsletter. Enter your email below to sign up and
          receive regular updates.
        </p>
        <div>
          <form className="flex lg:gap-2 gap-4 flex-col lg:flex-row">
            <input
              type="email"
              required
              className="py-2 px-4 rounded-md lg:w-[30%]"
              placeholder="Enter your email"
            />
            <ExploreBtn />
          </form>
          <small className="lg:mt-2 mt-4 block text-sm text-gray-300">
            By clicking Sign Up, you agree to our Terms and Conditions.
          </small>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
