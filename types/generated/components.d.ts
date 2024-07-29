import type { Schema, Attribute } from '@strapi/strapi';

export interface ProjecthighlightsProjecthighlights extends Schema.Component {
  collectionName: 'components_projecthighlights_projecthighlights';
  info: {
    displayName: 'projecthighlights';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    details: Attribute.Blocks;
  };
}

export interface ProjectAssetsProjectAssets extends Schema.Component {
  collectionName: 'components_project_assets_project_assets';
  info: {
    displayName: 'ProjectAssets';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    assets: Attribute.Media<'images', true>;
  };
}

export interface KeydetailsKeydetails extends Schema.Component {
  collectionName: 'components_keydetails_keydetails';
  info: {
    displayName: 'keydetails';
  };
  attributes: {
    map: Attribute.String;
    details: Attribute.Blocks;
  };
}

export interface FurtherdetailsFurtherdetails extends Schema.Component {
  collectionName: 'components_furtherdetails_furtherdetails';
  info: {
    displayName: 'furtherdetails';
  };
  attributes: {
    details: Attribute.Blocks;
  };
}

export interface BuyingreasonBuyingreason extends Schema.Component {
  collectionName: 'components_buyingreason_buyingreasons';
  info: {
    displayName: 'buyingreason';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    details: Attribute.Blocks & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'projecthighlights.projecthighlights': ProjecthighlightsProjecthighlights;
      'project-assets.project-assets': ProjectAssetsProjectAssets;
      'keydetails.keydetails': KeydetailsKeydetails;
      'furtherdetails.furtherdetails': FurtherdetailsFurtherdetails;
      'buyingreason.buyingreason': BuyingreasonBuyingreason;
    }
  }
}
