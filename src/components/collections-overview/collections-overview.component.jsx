import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';
import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
