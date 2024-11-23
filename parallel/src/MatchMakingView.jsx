import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "./AppContext"; // Import the context
import "./styles/MatchmakingView.css";

const MatchmakingView = () => {
  const { likedProfiles, setLikedProfiles, viewedProfiles, setViewedProfiles } =
    useContext(AppContext); // Access context

  const [matches] = useState([
    {
      id: 1,
      name: "Alice",
      photo: "/alice.jpg",
      interests: ["Music", "Traveling"],
      bio: "I love exploring new places and meeting new people. Let's create memories together!",
    },
    {
      id: 2,
      name: "Bob",
      photo: "/bob.jpg",
      interests: ["Gaming", "Cooking"],
      bio: "A gamer and food enthusiast. If you enjoy fun and good food, we might be a match!",
    },
    {
      id: 3,
      name: "Charlie",
      photo: "/charlie.jpg",
      interests: ["Sports", "Reading"],
      bio: "A sports lover who also enjoys a good book. Let's chat and share stories!",
    },
  ]);

  const [currentMatchId, setCurrentMatchId] = useState(null); // Track the current profile by ID

  // Filter matches to exclude viewed profiles
  const unviewedMatches = matches.filter(
    (match) => !viewedProfiles.some((viewed) => viewed.id === match.id)
  );

  // Sync currentMatchId with unviewedMatches
  useEffect(() => {
    if (unviewedMatches.length > 0) {
      // If no currentMatchId, set to the first unviewed match
      if (!currentMatchId || !unviewedMatches.some((match) => match.id === currentMatchId)) {
        setCurrentMatchId(unviewedMatches[0].id);
      }
    }
  }, [unviewedMatches, currentMatchId]);

  // Handle Like Button Click
  const handleLike = () => {
    const currentMatch = unviewedMatches.find((match) => match.id === currentMatchId);
    setLikedProfiles((prev) => [...prev, currentMatch]); // Add to liked profiles
    handleProfileViewed(currentMatch); // Mark profile as viewed
  };

  // Handle Dislike Button Click
  const handleDislike = () => {
    const currentMatch = unviewedMatches.find((match) => match.id === currentMatchId);
    handleProfileViewed(currentMatch); // Mark profile as viewed
  };

  // Mark Profile as Viewed (on Like or Dislike)
  const handleProfileViewed = (profile) => {
    setViewedProfiles((prev) => [...prev, profile]); // Add profile to viewedProfiles
    showNextProfile();
  };

  // Show the Next Profile
  const showNextProfile = () => {
    const currentIndex = unviewedMatches.findIndex((match) => match.id === currentMatchId);
    if (currentIndex < unviewedMatches.length - 1) {
      setCurrentMatchId(unviewedMatches[currentIndex + 1].id);
    } else {
      setCurrentMatchId(null); // No more profiles to show
    }
  };

  // Handle case where no profiles are left
  if (unviewedMatches.length === 0) {
    return (
      <div className="matchmaking-container">
        <h1>No more matches available!</h1>
      </div>
    );
  }

  const currentMatch = unviewedMatches.find((match) => match.id === currentMatchId);

  return (
    <div className="matchmaking-container">
      <h1>Find Your Match</h1>
      {currentMatch && (
        <div className="match-profile-card">
          <img
            src={currentMatch.photo}
            alt={currentMatch.name}
            className="match-photo"
          />
          <h2>{currentMatch.name}</h2>
          <p><strong>Bio:</strong> {currentMatch.bio}</p>
          <p><strong>Interests:</strong> {currentMatch.interests.join(", ")}</p>
        </div>
      )}
      <div className="button-container">
        <button className="dislike-button" onClick={handleDislike}>
          Dislike
        </button>
        <button className="like-button" onClick={handleLike}>
          Like
        </button>
      </div>
    </div>
  );
};

export default MatchmakingView;
