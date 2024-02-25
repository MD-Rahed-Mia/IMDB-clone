import React from "react";
import "./JoinToday.scss";
export default function JoinToday() {
  return (
    <div className="joinToday">
      <div className="joinToday_left">
        <h1>Join Today</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
          commodi adipisci hic nostrum voluptate exercitationem perferendis
          voluptatem corrupti, ducimus delectus nihil explicabo doloremque? Sint
          accusantium delectus dicta laudantium consectetur quae!
        </p>
        <button>Sign up</button>
      </div>
      <div className="joinToday_right">
        <ul>
          <li>Enjoy TMDB ad free</li>
          <li>Maintain a personal watchlist</li>
          <li>
            Filter by your subscribed streaming services and find something to
            watch
          </li>
          <li>Log the movies and TV shows you've seen</li>
          <li>Build custom lists</li>
        </ul>
      </div>
    </div>
  );
}
