import React from 'react';
import styled from 'styled-components'
import { useStaticQuery,graphql } from "gatsby";
import Img from 'gatsby-image';
function Trips ( props ) {
    const data = useStaticQuery(graphql`
        query TripsQuery{ 
            allTripsJson {
                edges {
                    node {
                        alt
                        button
                        name
                        img{
                            childImageSharp {
                            fluid{
                            ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const getTrips =()=>{
        const tripsArray=[];
        data.allTripsJson.edges.forEach((edge,index)=>{
            console.log(edge)
                tripsArray.push ( <div key={ index }>
                    <Img src={ edge.node.img.childImageSharp.fluid.src } fluid={ edge.node.img.childImageSharp.fluid }/>
                </div> )

        })
        return tripsArray;
    }
                   
    return (
        <ProductContainer>
            <ProductHeading>
                Heading
            </ProductHeading>
            <ProductWrapper>
                wrapper

            </ProductWrapper>
        </ProductContainer>
    );
}

export default Trips;
const ProductContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px)/2);
  background:red;
  color:white;
`;
const ProductHeading = styled.div`
font-size:clamp(1.2rem,5vw,3rem);
  text-align: center;
  margin-bottom: 5rem;
  color:#000;

`;
const ProductWrapper = styled.div``;