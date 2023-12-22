import React from "react";
import "./FirstBirdDetails.css"
import { Container,Row,Col } from "react-bootstrap";
const MoreDetails=()=>{
    const birdDetail=[
        {
        name:"FISCHER LOVE BIRD",
        image1:"https://i0.wp.com/www.birdbaron.com/wp-content/uploads/2019/10/how-many-types-of-lovebird-are-there_.jpg?fit=1200%2C800&ssl=1",
        image2:"https://a-z-animals.com/media/2022/06/Lovebird-in-cage.jpg",
        image3:"https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL055YXNhLWxvdmViaXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19",
         commonName:"Fischer's lovebird, black-masked lovebird, yellow-collared lovebird, peach-faced lovebird, pocket parrot",
         scientificName:"Agapornis fischeri, Agapornis personata, Agapornis roseicollis",
         size:"5 to 6 inches",
         lifeExpectancy:"10 to 15 years, potentially more with great care",
         habitat1:"Fischer's Lovebird is native to a specific region in East Africa, primarily found in Tanzania",
         habitat2:"Its natural habitat includes savannas, woodlands, and scrublands",
         breed1:"Abyssinian or black-winged lovebird (Agapornis taranta)",
         breed2:"Black-cheeked lovebird  (Agapornis nigrigenis)",
         breed3:"Madagascar or grey-headed lovebird (Agapornis cana)",
         breed4:"Nyasa or Lillian's lovebird (Agapornis lilianae)",
         identification:"Fischer lovebirds get their name from the German explorer GustaveFischer. Another name for them is the eye-ring lovebird because they have white rings around their eyes. This characteristic is not found among other lovebird species. Their characteristic color pattern is a green body, red forehead, and orange face and throat. They can also come in color mutations of lutino, sea green, pied, and yellow. Fischers lovebirds have a reputation for being more aggressive to other species than other lovebirds",
         food:"After sunflower seeds and cracked peanuts, cracked corn is the most inexpensive food source favored by many birds",
        },
        {
          name:"Sulpher - Crested Cockatatoo",
          image1:"https://qph.cf2.quoracdn.net/main-qimg-896a30881b647e94e145e418599159f2-lq",
          image2:"https://www.thesprucepets.com/thmb/mM9ajuBgNAAs-2QvuEn8KnIMn9E=/5200x0/filters:no_upscale():strip_icc()/two-white-cockatooes-643467100-db35b6ee10af4e579f7b77683d0b7fda.jpg",
          image3:"https://s3.animalia.bio/animals/photos/full/1.25x1/sulphur-crested-cockatoo-perfect-profile.webp",
           commonName:"Cacatua galerita",
           scientificName:"Cacatua galerita",
           size:"17.5 to 51.5 inches",
           lifeExpectancy:"20 to 40 years , potentially more with great care",
           habitat1:"Cockatoos are members of the Cacatuidae family, which contains 21 different species",
           habitat2:"Australia, Australasia, Indonesia, the Solomon Islands, and New Guinea are the native ranges of the various cockatoo species",
           breed1:"Triton cockatoo ( triton)",
           breed2:"Eleonora cockatoo  ( eleonora)",
           breed3:"Mathews cockatoo (fitzroyi)",
           breed4:"reater sulphur-crested cockatoo (galerita)",
           identification:"The Sulphur-crested Cockatoo is a large white parrot. It has a dark grey-black bill, a distinctive sulphur-yellow crest and a yellow wash on the underside of the wings. Sexes are similar, although the female can be separated at close range by its red-brown eye (darker brown in the male). This is a noisy and conspicuous cockatoo, both at rest and in flight. Young Sulphur-crested Cockatoos resemble the adults ",
           food:"The Sulphur-crested Cockatoo's normal diet consists of berries, seeds, nuts and roots. It also takes handouts from humans. Feeding normally takes place in small to large groups, with one or more members of the group watching for danger from a nearby perch. When not feeding, birds will bite off smaller branches and leaves from trees. These items are not eaten, however. The activity may help to keep the bill trimmed and from growing too large",
          },
          {
            name:"",
            image1:"",
            image2:"",
            image3:"",
             commonName:"",
             scientificName:"",
             size:"",
             lifeExpectancy:"",
             habitat1:"",
             habitat2:"",
             breed1:"",
             breed2:"",
             breed3:"",
             breed4:"",
             identification:" ",
             food:"",
            },
    ]

    
return(
    <div id="bird">
         {
         birdDetail.map((bird,i) => ( 
    <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active"  interval={2}>
      <img class="d-block w-100" src={bird.image1} alt="First slide"/>
    </div>
    <div class="carousel-item"  interval={2}>
      <img class="d-block w-100" src={bird.image2} alt="Second slide"/>
    </div>
    <div class="carousel-item"  interval={2}>
      <img class="d-block w-100" src={bird.image3} alt="Third slide"/>
    </div>
    <div class="carousel-caption">
    <h5 className="fst-italic"> {bird.name} </h5>
  </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3><a className="fs-5 p-10">Breed Overview:</a></h3>
    <ul>
      <li>COMMON NAMES: {bird.commonName}</li><br></br>
      <li> SCIENTIFIC NAME: {bird.scientificName}</li><br></br>
        <li> ADULT SIZE: {bird.size}</li><br></br>
        <li>LIFE EXPECTANCY: {bird.lifeExpectancy}</li><br></br></ul>
        <div className="p-3 ps-0">
        <h3><a className="fs-5">Habitat</a></h3>
          <ul>
            <li>{bird.habitat1}.</li><br></br>
            <li>{bird.habitat2}.</li><br></br>
            </ul>
            <h3><a className="fs-5">Breeds</a></h3>
            <ul>
              <li>{bird.breed1}</li><br></br>
            <li> {bird.breed2}</li><br></br>
            <li>{bird.breed3}</li><br></br>
            <li>{bird.breed4}</li><br></br></ul>
          <h3><a className="fs-5">Identification</a></h3>
          <ul>
          <li>{bird.identification}.</li></ul>
<h3><a className="fs-5">Food</a></h3>
          <ul>
          <li class="food">{bird.food}.</li></ul>
          </div>
</div>
 ))}

</div>
    );

}
export default MoreDetails;