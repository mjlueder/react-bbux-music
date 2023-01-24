import SSongs from "./SSongs";

const SS = (props) => {
  console.log(props);
  return (
    <div>
      <h4>Sultan & Shepard</h4>
      {props.songs.map(song =>
        <SSongs song={song}/>
      )}
    </div>
  )
}

export default SS