import React from "react";
import { render } from "@testing-library/react";
import Post from "./Post.jsx";

it("renders the Post component correctly", () => {
  
  const categories = ["treehouse", "tinyhouse", "farmstay", "boat", "camper", "tent", "yurt"];
  const postId = "camper2";
  
  const posts = [ {
      description: "Surrounded by vineyards and walnut orchards in the rugged Santa Lucia mountains west of Paso Robles, you will feel as though you're hours away from humanity, yet you’re just 10 min from downtown Paso Robles and about 1/2 an hour from several beach towns. Also, the Airstream shares the property with a winery and there are four others minutes away.",
      id: "camper2",
      price: 101,
      rating: 4.97,
      subtitle: "4 guests · 2 bedrooms · 2 beds · 1 bath",
      title: "Wine Country Airstream Experience",
      url: "https://a0.muscache.com/im/pictures/f6336eb2-30ca-49d4-9ea4-fdf640409e32.jpg?im_w=1200"
    }
  ]
  
  
  const { container } = render(<Post posts={posts} postId={postId} categories={categories}/>);
  expect(container).toMatchSnapshot();
});
