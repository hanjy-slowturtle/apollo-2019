import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

const GET_MOVIE = gql`
    query getMovie($id: ID!) {
        Movie(id: $id) {
            id
            title
            medium_cover_image
            description_intro
        }
    }
`;

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: { id }
    });
    if(loading) {
        return "Loading...";
    }
    if(data && data.Movie) {
        return data.Movie.title;
    }
    return "Detail";
};

export default Detail;