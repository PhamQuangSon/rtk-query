import "./SongRow.scss";

export function SongRow({ track }: any) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist: any) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}
