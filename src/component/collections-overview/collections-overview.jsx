import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Shop Collections selector
import { selectCollectionForPreview } from '../../redux/shop/shop-selectors';

// Components
import CollectionPreview from '../collection-preview/collection-preview';

// Stylesheet
import './collections-overview.scss';


function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);