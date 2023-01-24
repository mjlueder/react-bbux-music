import RA from "./RA"
import SS from "./SS"

const Artists = (props) => {
  return (
    <>
      <h4>Musical Artists</h4>
      <RA 
        songs={["Good Left Undone", "The Violence"]}
      />
      <SS 
        songs={["Something, Everything", "Assassin"]}
      />
    </>
  )
}

export default Artists