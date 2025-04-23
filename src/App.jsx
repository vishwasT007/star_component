import StarRating from "./StarRating";
function App() {
  return (
    <>
      <StarRating
        maxRating={5}
        message={["Terible", "Bad", "Good", "Great", "Amazing"]}
      />
    </>
  );
}

export default App;
