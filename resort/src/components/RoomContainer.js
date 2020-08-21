import React from "react";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </div>
  );
}
export default withRoomConsumer(RoomContainer);

// const RoomContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             Hello from rooms container
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//             <RoomsList></RoomsList>
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomContainer;
