const flexContainer = document.querySelector('.container');
const flexItemOne = document.querySelector('.one');
const flexItemThree = document.querySelector('.three');

const flex = document.getElementById('flex');
const flexInline = document.getElementById('flex-inline');
const row = document.getElementById('row');
const rowReverse = document.getElementById('row-reverse');
const column = document.getElementById('column');
const columnReverse = document.getElementById('column-reverse');
const noWrap = document.getElementById('no-wrap');
const wrap = document.getElementById('wrap');
const wrapReverse = document.getElementById('wrap-reverse');
const jcStart = document.getElementById('jc-start');
const jcEnd = document.getElementById('jc-end');
const jcCenter = document.getElementById('jc-center');
const jcSpaceBetween = document.getElementById('jc-space-between');
const jcSpaceAround = document.getElementById('jc-space-around');
const jcSpaceEvenly = document.getElementById('jc-space-evenly');
const jcBaseline = document.getElementById('jc-baseline');
const aiStart = document.getElementById('ai-start');
const aiEnd = document.getElementById('ai-end');
const aiCenter = document.getElementById('ai-center');
const aiStretch = document.getElementById('ai-stretch');
const aiBaseline = document.getElementById('ai-baseline');
const shrinkOne = document.getElementById('shrink-one');
const shrinkTwo = document.getElementById('shrink-two');
const shrinkThree = document.getElementById('shrink-three');
const growOne = document.getElementById('grow-one');
const growTwo = document.getElementById('grow-two');
const growThree = document.getElementById('grow-three');
const flexBasisPx = document.getElementById('flex-basis-px');
const flexBasisEm = document.getElementById('flex-basis-em');
const flexBasisPercent = document.getElementById('flex-basis-percent');
const flexOneOneOneHundred = document.getElementById('flex-1-1-100');
const flexTwoOneTen = document.getElementById('flex-2-1-10');
const flexOneTwoFifteen = document.getElementById('flex-1-2-15');
const flexOrderOne = document.getElementById('order-1');
const flexOrderTwo = document.getElementById('order-2');
const flexOrderThree = document.getElementById('order-3');
const asStart = document.getElementById('as-start');
const asEnd = document.getElementById('as-end');
const asCenter = document.getElementById('as-center');
const asStretch = document.getElementById('as-stretch');
const asBaseline = document.getElementById('as-baseline');

flex.addEventListener('click', () => {
  flexContainer.classList.add('flex');
});

flexInline.addEventListener('click', () => {
  flexContainer.classList.add('flex-inline');
});

row.addEventListener('click', () => {
  flexContainer.classList.add('row');
});

rowReverse.addEventListener('click', () => {
  flexContainer.classList.add('row-reverse');
});

column.addEventListener('click', () => {
  flexContainer.classList.add('column');
});

columnReverse.addEventListener('click', () => {
  flexContainer.classList.add('column-reverse');
});

noWrap.addEventListener('click', () => {
  flexContainer.classList.add('no-wrap');
});

wrap.addEventListener('click', () => {
  flexContainer.classList.add('wrap');
});

wrapReverse.addEventListener('click', () => {
  flexContainer.classList.add('wrap-reverse');
});

jcStart.addEventListener('click', () => {
  flexContainer.classList.add('jc-start');
});

jcEnd.addEventListener('click', () => {
  flexContainer.classList.add('jc-end');
});

jcCenter.addEventListener('click', () => {
  flexContainer.classList.add('jc-center');
});

jcSpaceAround.addEventListener('click', () => {
  flexContainer.classList.add('jc-space-around');
});

jcSpaceBetween.addEventListener('click', () => {
  flexContainer.classList.add('jc-space-between');
});

jcSpaceEvenly.addEventListener('click', () => {
  flexContainer.classList.add('jc-space-evenly');
});

jcBaseline.addEventListener('click', () => {
  flexContainer.classList.add('jc-baseline');
});

aiStart.addEventListener('click', () => {
  flexContainer.classList.add('ai-start');
});

aiEnd.addEventListener('click', () => {
  flexContainer.classList.add('ai-end');
});

aiCenter.addEventListener('click', () => {
  flexContainer.classList.add('ai-center');
});

aiStretch.addEventListener('click', () => {
  flexContainer.classList.add('ai-stretch');
});

aiBaseline.addEventListener('click', () => {
  flexContainer.classList.add('ai-baseline');
});

shrinkOne.addEventListener('click', () => {
  flexItemOne.classList.add('shrink-1');
});

shrinkTwo.addEventListener('click', () => {
  flexItemOne.classList.add('shrink-2');
});

shrinkThree.addEventListener('click', () => {
  flexItemOne.classList.add('shrink-3');
});

growOne.addEventListener('click', () => {
  flexItemOne.classList.add('grow-1');
});

growTwo.addEventListener('click', () => {
  flexItemOne.classList.add('grow-2');
});

growThree.addEventListener('click', () => {
  flexItemOne.classList.add('grow-3');
});

flexBasisPx.addEventListener('click', () => {
  flexItemOne.classList.add('flex-basis-px');
});

flexBasisEm.addEventListener('click', () => {
  flexItemOne.classList.add('flex-basis-em');
});

flexBasisPercent.addEventListener('click', () => {
  flexItemOne.classList.add('flex-basis-percent');
});

flexOneOneOneHundred.addEventListener('click', () => {
  flexItemOne.classList.add('flex-1-1-100');
});

flexTwoOneTen.addEventListener('click', () => {
  flexItemOne.classList.add('flex-2-1-10');
});

flexOneTwoFifteen.addEventListener('click', () => {
  flexItemOne.classList.add('flex-1-2-15');
});

flexOrderOne.addEventListener('click', () => {
  flexItemThree.classList.add('order-1');
});

flexOrderTwo.addEventListener('click', () => {
  flexItemOne.classList.add('order-2');
});

flexOrderThree.addEventListener('click', () => {
  flexItemOne.classList.add('order-3');
});

asStart.addEventListener('click', () => {
  flexItemThree.classList.add('as-start');
});

asEnd.addEventListener('click', () => {
  flexItemThree.classList.add('as-end');
});

asCenter.addEventListener('click', () => {
  flexItemThree.classList.add('as-center');
});

asStretch.addEventListener('click', () => {
  flexItemThree.classList.add('as-stretch');
});

asBaseline.addEventListener('click', () => {
  flexItemThree.classList.add('as-baseline');
});
