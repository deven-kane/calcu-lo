import React, { ReactComponentElement, ReactElement, ReactNode } from 'react';

export function findAllSpans(children) {
  const spans = [];

  // React.Children.forEach(children, (child) => {
  //   if (
  //     child &&
  //     typeof child === 'object' &&
  //     (child as ReactElement).type === 'span'
  //   ) {
  //     spans.push(child as ReactElement);
  //   }

  //   if (child && (child as ReactElement).props?.children) {
  //     const childSpans = findAllSpans((child as ReactElement).props.children);
  //     spans.push(...childSpans);
  //   }
  // });

  return spans;
}

export function findAllDivs(component) {
	console.log(component)
}


export function MyComponent({ children }) {
  // const allDivs = findAllDivs(children);
  return <div>{children}</div>
}

export function huh(element, elementType){
  // console.log(element.prototype.constructor)
  // console.log('not invoked', element)
  // console.log({elementType})
  let count = 0;

  function countElements(children) {

    children && children.forEach((child) => {
      if (child && child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() === elementType) {
        count++;
      }

      if (child && child.childNodes) {
        countElements(child.childNodes);
      }
    });
  }

  countElements(element.childNodes);

  return count;
}
/*
 pass a compoent, we'll find its class and append the new class to the end of the string. only the end, so beware of order
*/
export function addClassToEl(className, component) {
  const currentClassList = component.props.className;
  const newClassList = currentClassList ? `${currentClassList} ${className}` : className;
  return React.cloneElement(component, { className: newClassList });
}


function generateRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 50;
  const lightness = Math.floor(Math.random() * 20) + 40;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generateAlmostComplimentaryColor() {
  const baseColor = generateRandomColor();

  // Adjust the hue by 180 degrees to get the almost-complimentary color
  const [h, s, l] = baseColor.match(/\d+/g).map(Number);
  const hue = (h + 180) % 360;

  return `hsl(${hue}, ${s}%, ${l}%)`;
}