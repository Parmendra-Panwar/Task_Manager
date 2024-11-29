import React from "react";
import "./TMBenefits.css";

const TaskManagerBenefits: React.FC = () => {
  return (
    <div className="containeres">
      <div className="sub-container">
        <h2 className="title">Why Choose Our Task Manager?</h2>
        <p className="subtitle">
          Experience smarter task management designed to keep you organized and
          productive.
        </p>
        <div className="features">
          {/* Feature 1 */}
          <div className="card">
            <h5 className="card-title">Nested Task Management</h5>
            <p className="card-text">
              Organize your tasks by adding subtasks, making it easy to break
              down big tasks into manageable steps.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card">
            <h5 className="card-title">Scheduled Email Reminders</h5>
            <p className="card-text">
              Never miss a deadline again! Receive timely email reminders based
              on your defined schedule.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card">
            <h5 className="card-title">Clean and Simple UI</h5>
            <p className="card-text">
              Enjoy a clutter-free interface that focuses on your tasks,
              allowing you to stay focused and efficient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagerBenefits;
