import React from 'react';


const apiKey = 'gHjD30GCv9dHUcSfbRVU5WEPtJ5k-3r4G51jVUxpYHwntGv8laRTcVUCZogUotpMoq2uvDyZLNtwlNCfcSdSdLUSjwvD0vYYsOIf2eYZBm_-k9adZrr2DPsAAF6AX3Yx';

const Yelp = {

    searchYelp(term, location, sortBy) {
            return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}` ,
             {
                headers:{
                    Authorization: `Bearer ${apiKey}`
                }
            }).then( response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map(((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            adress: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    }));
                }
            });
    }

};

export default Yelp;