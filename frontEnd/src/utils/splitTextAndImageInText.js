import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
`;

function textImageToJsxTag(images) {
  if (images === null) {
    return [];
  }
  return images.map((text, id) => {
    const imageSrc = text.replace(/[!\(\{\)\}]/g, '');
    return <Image src={`/images/${imageSrc}`} key={id}></Image>;
  });
}

function isExists(array) {
  return array.length > 0;
}

function moveFirstElement(array, target) {
  if (isExists(array)) {
    target.push(array.shift());
  }
}

function combineTextAndImageTag(text, image) {
  const result = [];
  while (text.length > 0 || image.length > 0) {
    moveFirstElement(text, result);
    moveFirstElement(image, result);
  }
  return result;
}

export default function splitTextAndImageInText(Text) {
  const reg = /!\{\([^)}]*\)\}/g;
  const text = Text.split(reg);
  const image = textImageToJsxTag(Text.match(reg));
  return combineTextAndImageTag(text, image);
}
