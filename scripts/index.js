/*-----Template for services-----*/

const listOfServices = [
 {
  title: "Lorem ipsum dolor sit",
  image: "../images/Save on it Spend.svg",
  description: "consectetur adipisici elit, sed eiusmod",
 },
 {
  title: "Lorem ipsum dolor sit2",
  image: "../images/Say yes to BYOD.svg",
  description: "consectetur adipisici elit, sed eiusmod",
 },
 {
  title: "Lorem ipsum dolor sit3",
  image: "../images/HappyEmployees.svg",
  description: "consectetur adipisici elit, sed eiusmod",
 },
];

const servicesList = document.querySelector(".top-screen__services")
const servicesTemplate = document.querySelector("#service-template").content.querySelector(".service");;

function servicesDisplay({ title, image, description }) {
 const serviceCard = servicesTemplate.cloneNode(true);
 serviceCard.querySelector(".service__image").src = image;
 serviceCard.querySelector(".service__title").textContent = title;
 serviceCard.querySelector(".service__description").textContent = description;

 return serviceCard;
}

listOfServices.forEach((initialServices) => {
 servicesList.prepend(servicesDisplay(initialServices));
});
