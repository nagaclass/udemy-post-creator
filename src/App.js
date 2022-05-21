import { useState, useId } from "react";
import FormInput from "components/FormInput";
import FormInputErrorMsg from "components/FormInputErrorMsg";
import FormSubmitBtn from "components/FormSubmitBtn";
import Post from "components/Post";

function App() {
  const id = useId();
  const [postList, setPostList] = useState([]);
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    image: "",
    creator: "",
    email: "",
  });

  // ** Form Validation
  const postDataValidation = values => {
    const errors = {};

    if (!values.title.trim() || values.title.length < 10) {
      errors.title = "Post title must be between 10 and 30 characters!";
    }
    if (!values.description.trim() || values.title.length < 10) {
      errors.description = "Post description must be between 10 and 150 characters!";
    }
    if (!values.image.trim()) {
      errors.image = "Image URL is required";
    }
    if (!values.creator.trim()) {
      errors.creator = "Author's name is required";
    }

    if (!values.email.trim()) {
      errors.email = "Author's email is required!";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    return errors;
  };

  const changeHandler = e => {
    const {
      target: { name, value },
    } = e;
    setPost({ ...post, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const renderPosts = () => {
    return (
      <>
        {postList.map((post, idx) => (
          <Post key={id + idx} {...post} />
        ))}
      </>
    );
  };

  // ** onSubmit
  const submitHandler = e => {
    e.preventDefault();

    setErrors(postDataValidation(post));
    if (Object.keys(postDataValidation(post)).length) return;
    setPostList([...postList, post]);

    setPost({
      title: "",
      description: "",
      image: "",
      creator: "",
      email: "",
    });
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
        <FormInput
          id="title"
          label="Title"
          type="text"
          name="title"
          value={post.title}
          onChange={changeHandler}
          errors={errors}
        />
        <FormInputErrorMsg errors={errors} name="title" />

        <FormInput
          id="description"
          label="Description"
          type="text"
          name="description"
          value={post.description}
          onChange={changeHandler}
          errors={errors}
        />
        <FormInputErrorMsg errors={errors} name="description" />

        <FormInput
          id="image"
          label="Image"
          type="text"
          name="image"
          value={post.image}
          onChange={changeHandler}
          errors={errors}
        />
        <FormInputErrorMsg errors={errors} name="image" />

        <FormInput
          id="creator"
          label="Creator"
          type="text"
          name="creator"
          value={post.creator}
          onChange={changeHandler}
          errors={errors}
        />
        <FormInputErrorMsg errors={errors} name="creator" />

        <FormInput
          id="email"
          label="Email"
          type="email"
          name="email"
          value={post.email}
          onChange={changeHandler}
          errors={errors}
        />
        <FormInputErrorMsg errors={errors} name="email" />
        <FormSubmitBtn text="Submit" style={{ backgroundColor: "red" }} />
      </form>
    </div>
  );
}

export default App;
