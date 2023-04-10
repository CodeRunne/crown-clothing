import image1 from '../../assets/images/img-5.jpg';
import image2 from '../../assets/images/img-4.jpg';
import image3 from '../../assets/images/img-12.jpg';
import image4 from '../../assets/images/img-16.jpg';
import image5 from '../../assets/images/img-6.jpg';

const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: image1,
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: image2,
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: image3,
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: image4,
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: image5,
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
};


function directoryReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        default:
            return state
    }
}

export default directoryReducer;