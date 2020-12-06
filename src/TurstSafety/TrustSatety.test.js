import React from "react";
import { render } from "@testing-library/react";
import TrustSafety from "./TrustSafety.jsx";

it("renders the TrustSafety component correctly", () => {
  
  const pageData = {
    "howitworks": {
         "row1": {
          "url": "https://a0.muscache.com/pictures/e3f18889-61ca-445b-94ac-8bc26c71f0f3.jpg",
          "title": "Get to know Unique Stays",
          "subTitle": "Welcome to the Unique Stays community. Wherever you go, we have a place for you."
     },
    "row2": {
          "title": "Simple steps to get started"
     },
     "row3": {
          "url": "https://a0.muscache.com/pictures/1effbe54-be33-4f17-a85f-deac9deaff23.jpg",
          "title": "Filter down to your perfect fit",
          "subTitle": "Personalize your search with filters—like price range or a pool—to get exactly what you want."
     },
    "row4": {
          "url": "https://a0.muscache.com/pictures/3b171a0c-7347-4da7-b89a-38bf675be244.jpg",
          "title": "Dig into the details",
          "subTitle": "Check out the photos. Then, read guest reviews from past reservations to learn what it’s like in person."
     },
    "row5": {
          "url": "https://a0.muscache.com/pictures/8442231d-bd79-4fba-b8e5-b78e49effe63.jpg",
          "title": "Book with peace of mind",
          "subTitle": "We keep your info safe and follow global security standards to process your payments."
     },
    "row6": {
          "url": "https://a0.muscache.com/pictures/5b20c5f2-2bcb-4807-b75c-a05980f588d5.jpg",
          "title": "Arrive and enjoy!",
          "subTitle": "Your host is only a message away if you have any questions. They can also offer local tips and advice."
     }
    },
    "safetytrust": {
        "row1" : {
            "category": "Safety",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        "row2": {
            "category": "Security",
            "text": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32."
        },
        "row3": {
            "category": "Fairness",
            "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
    },
    "aboutus": {
        "row1": {
            "title" : "Thoughtful design",
            "subtitle": "Every Airbnb Plus home is one-of-a-kind, thoughtfully designed, and equipped with a standard set of amenities—whether you’re in a private room or have the entire place to yourself."
        },
        "row2": {
            "img1": "https://a0.muscache.com/4ea/air/v2/pictures/79197f72-a1e4-4ea2-9b3a-92745694722c.jpg?t=n:ope",
            "img2": "https://a0.muscache.com/4ea/air/v2/pictures/185cebca-d168-4740-bc6e-30eeb2dfcc0b.jpg?t=n:ope",
            "img3": "https://a0.muscache.com/4ea/air/v2/pictures/1282f009-f405-4cc9-b280-7c39ff671f7a.jpg?t=n:ope"
        },
        "row3": {
            "title": "In-person quality inspection",
            "subtitle": "Each Airbnb Plus home is verified for quality and design to ensure they have all of the essentials to make you feel at home—no matter where you are in the world."
        },
        "row4": {
            "img1": "https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_designed/original/4475a8f8-5116-4cd4-a7ec-fa9968308af5.jpg?t=n:ope",
            "title": "Thoughtfully designed",
            "subtitle": "Airbnb Plus homes are where high quality meets carefully considered design—down to every last detail. With elegant design and personal character, the homes are as welcoming as they are beautiful."
        },
        "row5": {
            "img1": "https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_equipped/original/6b4893aa-09a2-419c-8acc-da3b09ca8f18.jpg?t=n:ope",
            "title": "Well-equipped",
            "subtitle": "You can expect a consistent set of amenities you need to live like you do at home–from fast wifi and televisions ready for streaming to full kitchens with all the cooking essentials. A few of the other things you’ll get:"
        },
        "row6": {
            "img1": "https://a0.muscache.com/4ea/air/v2/pictures/SelectGuestLandingPage/verified_background_maintained/original/8662ebac-2eb8-4caf-a2cb-83b50f1f49dd.jpg?t=n:ope",
            "title": "Well-maintained",
            "subtitle": "Airbnb Plus hosts take the extra effort to ensure the home is extra clean, clutter-free, and fully functioning–from manicured outdoor spaces to tidy bathrooms with strong water pressure. A few of the other things you’ll get:"
        }
    }
     
}
  
  const { container } = render(<TrustSafety pageData={pageData} />);
  expect(container).toMatchSnapshot();
});
