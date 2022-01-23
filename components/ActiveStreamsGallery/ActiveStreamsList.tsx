interface ActiveStreamsListProps {
  activeStreams: any[];
}

const ActiveStreamsList = ({ activeStreams }: ActiveStreamsListProps) => {
  return (
    <section className="w-full p-8 border-2 border-white">
      <ul>
        {activeStreams.map((stream) => (
          <li>{stream.streamer.username}</li>
        ))}
      </ul>
    </section>
  );
};

export default ActiveStreamsList;
