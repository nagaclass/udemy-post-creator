import { useState } from "react";
import FormInput from "components/FormInput";
import FormInputErrorMsg from "components/FormInputErrorMsg";
import FormSubmitBtn from "components/FormSubmitBtn";
import Post from "components/Post";
import { postDataValidation } from "validation/postValidation";
import { formInputs } from "utils/formInputs";

function App() {
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });
  const [errors, setErrors] = useState({ ...post });
  const [isError, setIsError] = useState(false);

  const changeHandler = e => {
    const {
      target: { name, value },
    } = e;
    setPost({ ...post, [name]: value });
    setErrors({ ...errors, [name]: "" });
    if (!Object.keys(postDataValidation(post)).length) {
      setIsError(false);
    }
  };

  const renderPosts = () => {
    return (
      <>
        {postList.map((post, idx) => (
          <Post key={idx} {...post} />
        ))}
      </>
    );
  };

  // ** onSubmit
  const submitHandler = e => {
    e.preventDefault();

    setErrors(postDataValidation(post));
    if (Object.keys(postDataValidation(post)).length) {
      setIsError(true);
      return;
    }
    setPostList([...postList, post]);

    setPost({
      title: "",
      description: "",
      image: "",
      creator: "",
      email: "",
    });
    setIsError(false);
  };

  return (
    <div className="flex m-10">
      <div className="w-full">
        {!postList.length ? (
          <div
            className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 w-4/6"
            role="alert"
          >
            <span className="font-medium">Info alert!</span> Change a few things up and try
            submitting again.
          </div>
        ) : (
          <div className="w-4/6 grid gap-3 grid-cols-3">{renderPosts()}</div>
        )}
      </div>

      <form className="ml-5 w-2/6" onSubmit={submitHandler} autoComplete="off">
        {formInputs.map(({ name, label, type }, idx) => (
          <div key={idx}>
            <FormInput
              id={name}
              label={label}
              type={type}
              name={name}
              value={post[name]}
              onChange={changeHandler}
              errors={errors}
            />
            <FormInputErrorMsg errors={errors} name={name} />
          </div>
        ))}

        <FormSubmitBtn text="Submit" isError={isError} />
      </form>
    </div>
  );
}

export default App;
