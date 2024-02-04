import { useEffect,useRef } from "react";
import api from '../../api/axiosConfig'
import { useParams } from "react-router-dom";
import { Row,Col,Container } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

function Reviews({getMovieData,movie,reviews,setReviews}) {
    reviews?.map((r)=>{
        console.log(r.body);
    })
    const  params = useParams();
    console.log(params);
    const revText=useRef();
    const movieId=params.movieId
    const addRview=async(e)=>{
        e.preventDefault();
        const rev=revText.current
        try{
            const response = await api.post('/api/v1/reviews',{reviewBody:rev.value,imdbId:movieId})
            const updateReviews=  [...reviews,{body:rev.value}]
             setReviews(updateReviews)
             rev.value=""
        }catch(err){
            console.log("Error in adding review",err)
        }

    }
    useEffect(()=>{
        getMovieData(movieId)
    },[])
  return (
    <Container>
        <Row className="justify-content-center text-center py-3">
            <Col><h3>Reviews</h3></Col>
        </Row>
        <Row>
            <Col>
                <img src={movie?.poster}></img>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handlSubmit={addRview} revText={revText} labelText="add a review"></ReviewForm>
                            </Col>
                        </Row>
                        <Row>
                            <hr></hr>
                        </Row>
                    </>
                }
                {
                   reviews?.map((r) => {
                    return(
                        <>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>                                
                        </>
                    )
                })
                }
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews