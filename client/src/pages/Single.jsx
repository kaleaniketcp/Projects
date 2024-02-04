import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import moment from "moment";
import Delete from "../images/delete.png";
import Edit from "../images/edit.png";
import Navber from "../components/Navbar";
import Footer from "../components/Footer";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/post/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <Navber />
      {currentUser ? (
        <div className="single">
          <div className="content">
            <img src={`../upload/${post?.img}`} alt="" />
            <div className="user">
              {post.userImg && <img src={post.userImg} alt="" />}
              <div className="info">
                <span>{post.username}</span>
                <p>Posted {moment(post.created).fromNow()}</p>
              </div>
              {currentUser.username === post.username && (
                <div className="edit">
                  <Link to="/write?edit=2" state={post}>
                    <img src={Edit} alt="" />
                  </Link>
                  <img onClick={handleDelete} src={Delete} alt="" />
                </div>
              )}
            </div>
            <h1>{post.title}</h1>
            <p>{getText(post.desc)}</p>
          </div>
          <Menu cat={post.cat} />
        </div>
      ) : (
        navigate("/")
      )}
      <Footer />
    </>
  );
};

export default Single;
