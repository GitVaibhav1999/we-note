import React from "react";
import { useData } from "../../Context";

function MainCollab() {
  // const { value_collab_notes } = useData();
  // [userCollabNotes, setUserCollabNotes] = value_collab_notes;

  // React.useEffect(() => {
  //   var temp_collab = [];
  //   getCollabNotes(currentUser.email).then((response) => {
  //     var temp_collab = [];
  //     response.forEach((each_CID) => {
  //       getNoteData(each_CID).then((res) => temp_collab.push(res));
  //     });
  //     setUserCollabNotes(temp_collab);
  //   });
  // }, []);

  return <div>Collab</div>;
}

export default MainCollab;
