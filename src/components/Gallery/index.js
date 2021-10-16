import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";
import PhotoList from '../PhotoList';

function Gallery(currentCategory) {
  const currentCategory = { name, description } = currentCategory;
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}
export default Gallery;