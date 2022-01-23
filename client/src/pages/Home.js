import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../queries";
import Loading from "../component/Loading";
import styled from "styled-components";
export const Button = styled.button`
  background: skyblue;
  padding: 20px;
  border-radius: 20px;
  border: none;
  color: white;
  &:hover {
    opacity: 0.7;
  }
`;
export default function Home() {
  const { loading, error, data } = useQuery(HOME_PAGE);
  if (loading) return <Loading />;
  if (error) return <span>Error..</span>;

  return (
    <>
      <Link to={"/player"}>
        <Button>선수들 보러 가기</Button>
      </Link>
    </>
  );
}
