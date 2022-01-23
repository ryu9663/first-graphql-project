import { useQuery } from "@apollo/client";
import React from "react";
import PlayersInfo from "../component/PlayersInfo";
import { HOME_PAGE } from "../queries";
import Loading from "../component/Loading";
import { Button } from "./Home";
import { Link } from "react-router-dom";

export default function PlayerPage() {
  const { loading, error, data } = useQuery(HOME_PAGE);
  if (loading) return <Loading />;
  if (error) return <span>Error..</span>;

  return (
    <>
      <Link to="/">
        <Button>홈</Button>
      </Link>
      {data.players.map((player) => {
        console.log(player);
        return (
          <div key={player.id}>
            <PlayersInfo
              name={player.name}
              image={player.image}
              position={player.position}
              nationality={player.nationality}
            />
          </div>
        );
      })}
    </>
  );
}
