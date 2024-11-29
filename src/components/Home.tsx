import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todos"); // Redirects to the /help path
  };
  return (
    <div className="todo-container home">
      <h2>Streamline your workflow</h2>
      <p>
        stay on top of your tasks with ease. Our task manager helps you
        prioritize, organize, and achieve your goals efficiently. Simplify your
        to-do list and focus on what truly matters!
      </p>
      <div className="home-button">
        <button className="button-5" role="button">
          Sign Up
        </button>
        <button className="button-6" role="button">
          Sign In
        </button>
      </div>

      <div className="home-button">
        <button className="button-57" role="button" onClick={handleClick}>
          <span className="text">How We Can Help You...!</span>
          <span>Click - Me</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
