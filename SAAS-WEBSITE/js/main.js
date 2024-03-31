// FAQ Accordian
document.addEventListener('DOMContentLoaded', () => {
const faqContainer = document.querySelector('.faq-content');

faqContainer.addEventListener('click', (e) => {
const groupHeader = e.target.closest('.faq-group-header');

if(!groupHeader) return;

const group = groupHeader.parentElement;
const groupbody = group.querySelector('.faq-group-body');
const icon = groupHeader.querySelector('i')

//Toggle Icon
icon.classList.toggle('fa-plus');
icon.classList.toggle('fa-minus');


//Toggle Visibility of body
groupbody.classList.toggle('open');


//Close other open faq bodies
const otherGroups = faqContainer.querySelectorAll('.faq-group');

otherGroups.forEach((otherGroup) => {
  if (otherGroup !== group) {
    const otherGroupBody = otherGroup.querySelector('.faq-group-body');
    const otherIcon = otherGroup.querySelector('.faq-group-body i');

    otherGroupBody.classList.remove('open');
  }
});

 });
});