const Post = ({ title, description, image, creator, email }) => {
  return (
    <div className="border-2 border-gray-700 rounded-lg flex flex-col justify-content h-fit">
      <div className="post-header">
        {/* <img src={image} alt="" className="object-cover" /> */}
        <img
          src={
            "https://images.unsplash.com/photo-1652965062915-51dd307e2f4a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
          }
          alt=""
          className="object-cover"
        />
      </div>
      <div className="post-footer p-2 text-sm">
        <h3>
          <span className="font-bold mr-1">Title: </span>
          {title}
        </h3>
        <p>
          <span className="font-bold mr-1">Description:</span>
          {description}
        </p>
        <h3>
          <span className="font-bold mr-1">Created By:</span>
          {creator}
        </h3>
        <h3>
          <span className="font-bold mr-1">Email:</span>
          {email}
        </h3>
      </div>
    </div>
  );
};

export default Post;
