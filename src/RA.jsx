import RSongs from "./RSongs"

const RA = (props) => {
  console.log(props.songs);
  return (
    <div>
      <h4>Rise Against</h4>
      {props.songs.map(song =>
        <RSongs song={song}/>
      )}
    </div>
  )
}

export default RA