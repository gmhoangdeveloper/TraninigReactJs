import React, { Component } from "react";
import { RoomContext, RoomProvider } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    console.log(rooms);
    return (
      // <div>
      //   {/* hello from featured rooms
      //   <Room />
      //   <Loading /> */}
      // </div>
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading/>:rooms}
        </div>
        
      </section>
    );
  }
}

export default FeaturedRooms;
