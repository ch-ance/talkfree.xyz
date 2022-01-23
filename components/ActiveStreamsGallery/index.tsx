import ActiveStreamsList from "./ActiveStreamsList";

const ActiveStreamsGallery = () => {
  const activeStreams: string | any[] = [];
  return (
    <section className="w-full p-8 border-2 border-white">
      {activeStreams.length ? (
        <ActiveStreamsList activeStreams={activeStreams} />
      ) : (
        <h2>No active streams. Click the big red button to start one!</h2>
      )}
    </section>
  );
};

export default ActiveStreamsGallery;
