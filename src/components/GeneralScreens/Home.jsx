import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";

import "../../Css/Home.css";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${localStorage.getItem("authToken")}`,
          },
        };

        const { data } = await axios.get(
          "https://blogapp-5mbw.onrender.com/user/getAll-blog",
          config
        );

        setStories(data.approvedBlogs);

        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    getStories();
  }, [setLoading]);

  return (
    <div className="Inclusive-home-page">
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(6)].map(() => {
            return (
              // theme dark :> default : light
              <SkeletonStory key={uuidv4()} />
            );
          })}
        </div>
      ) : (
        <div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ? (
              stories.map((story) => {
                return <CardStory key={uuidv4()} story={story} />;
              })
            ) : (
              <NoStories />
            )}
          </div>
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
