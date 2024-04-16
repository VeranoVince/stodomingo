import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal, Button } from "react-bootstrap";
import { SlideImageStyles } from "../StyledComponents.js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css-assets/SlideImage.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function SlideImage({ branch }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleCardClick = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const branchMembers = {
    Cebu: [
      {
        id: 1,
        name: "Celeste Bongco-Leonardia",
        role: "Employee",
        image: "MembersCebu/Celeste Bongco-Leonardia.png",
        details: "More details about Celeste...",
      },
      {
        id: 2,
        name: "Dann Kristoffer Causing",
        role: "Employee",
        image: "MembersCebu/Dann Kristoffer Causing.png",
        details: "More details about Dann...",
      },
      {
        id: 3,
        name: "Debbie Apuya-Cabrales",
        role: "Employee",
        image: "MembersCebu/Debbie Apuya-Cabrales- Admin.png",
        details: "More details about Debbie...",
      },
      {
        id: 4,
        name: "Edna Liz Medalla Damaso",
        role: "Employee",
        image: "MembersCebu/Edna Liz Medalla Damaso.png",
        details: "More details about Edna...",
      },
      {
        id: 5,
        name: "Gabriel M. Barroso",
        role: "Employee",
        image: "MembersCebu/Gabriel M. Barroso.png",
        details: "More details about Gabriel...",
      },
      {
        id: 6,
        name: "Ivy Alo",
        role: "Employee",
        image: "MembersCebu/Ivy Alo.png",
        details: "More details about Ivy...",
      },
      {
        id: 7,
        name: "James Torregosa Casas",
        role: "Employee",
        image: "MembersCebu/James Torregosa Casas.png",
        details: "More details about James...",
      },
      {
        id: 8,
        name: "Jeshel Villaver",
        role: "Employee",
        image: "MembersCebu/Jeshel Villaver.png",
        details: "More details about Jeshel...",
      },
      {
        id: 9,
        name: "Jhadien Heyrosa",
        role: "Employee",
        image: "MembersCebu/Jhadien Heyrosa.png",
        details: "More details about Jhadien...",
      },
      {
        id: 10,
        name: "Joanne Mendoza Ricamata",
        role: "Employee",
        image: "MembersCebu/Joanne Mendoza Ricamata.png",
        details: "More details about Joanne...",
      },
      {
        id: 11,
        name: "Jomar Gonzales Arenas",
        role: "Employee",
        image: "MembersCebu/Jomar Gonzales Arenas.png",
        details: "More details about Jomar...",
      },
      {
        id: 12,
        name: "Josefino Yocte",
        role: "Employee",
        image: "MembersCebu/Josefino Yocte.png",
        details: "More details about Josefino...",
      },
      {
        id: 13,
        name: "Josh Aurelio",
        role: "Employee",
        image: "MembersCebu/Josh Aurelio.png",
        details: "More details about Josh...",
      },
      {
        id: 14,
        name: "Joy Bulado",
        role: "Employee",
        image: "MembersCebu/Joy Bulado.png",
        details: "More details about Joy...",
      },
      {
        id: 15,
        name: "JP Cabrales",
        role: "Employee",
        image: "MembersCebu/JP Cabrales.png",
        details: "More details about JP...",
      },
      {
        id: 16,
        name: "Laduj Me'Anne",
        role: "Employee",
        image: "MembersCebu/Laduj Me_Anne.png",
        details: "More details about Laduj...",
      },
      {
        id: 17,
        name: "Letecia Morales Davila",
        role: "Employee",
        image: "MembersCebu/Letecia Morales Davila.png",
        details: "More details about Letecia...",
      },
      {
        id: 18,
        name: "Lily Beth Dela Cruz",
        role: "Employee",
        image: "MembersCebu/Lily Beth.png",
        details: "More details about Lily Beth...",
      },
      {
        id: 19,
        name: "Ma Josefa David - Lucero",
        role: "Employee",
        image: "MembersCebu/Ma Josefa David - Lucero.png",
        details: "More details about Ma Josefa...",
      },
      {
        id: 20,
        name: "Maria Griselda F Ruiz",
        role: "Employee",
        image: "MembersCebu/Maria Griselda F Ruiz.png",
        details: "More details about Maria Griselda...",
      },
      {
        id: 21,
        name: "Maylen Alcuirez Tanudra",
        role: "Employee",
        image: "MembersCebu/Maylen Alcuirez Tanudra.png",
        details: "More details about Maylen...",
      },
      {
        id: 22,
        name: "Myrna Sangcupan Solaiman",
        role: "Employee",
        image: "MembersCebu/Myrna Sangcupan Solaiman.png",
        details: "More details about Myrna...",
      },
      {
        id: 23,
        name: "Nolibeth Ligad Enriquez",
        role: "Employee",
        image: "MembersCebu/Nolibeth Ligad Enriquez.png",
        details: "More details about Nolibeth...",
      },
      {
        id: 24,
        name: "Josefino Sto Domingo",
        role: "Founder",
        image: "MembersCebu/Pepot Sto Domingo.png",
        details: "More details about Pepot...",
      },
      {
        id: 25,
        name: "Portia Sto Domingo",
        role: "Business Development Manager",
        image: "MembersCebu/Portia Sto Domingo.png",
        details: `
        <ul>
          <li>Almost Four Decades of Experience in Corporate Life Insurance Industry</li>
      
          <li>Former Head of Philamlife in Strategic Planning, Corporate
            Solutions, Communications, Business Development, Risk
            Management, Agency Training</li>
      
          <li>Currently Operations & Business Development Manager of
            Sto. Domingo Associates, 2015-present</li>
        </ul>
      `,
      },

      {
        id: 26,
        name: "Robbie Sto Domingo",
        role: "Employee",
        image: "MembersCebu/Robbie Sto Domingo.png",
        details: "More details about Robbie...",
      },
      {
        id: 27,
        name: "Sherelle Mae",
        role: "Employee",
        image: "MembersCebu/Sherelle Mae.png",
        details: "More details about Sherelle...",
      },
      {
        id: 28,
        name: "Shirehan Vicente Cabrales",
        role: "Employee",
        image: "MembersCebu/Shirehan Vicente Cabrales.png",
        details: "More details about Shirehan...",
      },
      {
        id: 29,
        name: "John Doe",
        role: "Employee",
        image: "MembersCebu/Shirehan Vicente Cabrales.png",
        details: "More details about Shirehan...",
      },
      {
        id: 30,
        name: "Jane Doe",
        role: "Employee",
        image: "MembersCebu/Shirehan Vicente Cabrales.png",
        details: "More details about Shirehan...",
      },
    ],

    Makati: [
      {
        id: 16,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 17,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 18,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 19,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 20,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 21,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 22,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 23,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 24,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 25,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: `
          <ul>
            <li>Over Two Decades of Experience in Corporate Life Insurance Industry</li>
        
            <li>Former Head of Philamlife in Strategic Planning, Corporate
              Solutions, Communications, Business Development, Risk
              Management, Agency Training</li>
        
            <li>Currently Operations & Business Development Manager of
              Sto. Domingo Associates, 2015-present</li>
          </ul>
        `,
      },
      {
        id: 26,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
      {
        id: 27,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Male.png",
        details: "More details about this person...",
      },
      {
        id: 28,
        name: "Employee of Makati",
        role: "Employee",
        image: "MembersCebu/Female.png",
        details: "More details about this person...",
      },
    ],
    Pampanga: [
      {
        id: 1,
        name: "John Doe",
        role: "Employee",
        image: "MembersCebu/Celeste Bongco-Leonardia.png",
        details: "More details about Celeste...",
      },
      {
        id: 2,
        name: "Jane Doe",
        role: "Employee",
        image: "MembersCebu/Dann Kristoffer Causing.png",
        details: "More details about Dann...",
      },
      {
        id: 3,
        name: "Alice Smith",
        role: "Employee",
        image: "MembersCebu/Debbie Apuya-Cabrales- Admin.png",
        details: "More details about Debbie...",
      },
      {
        id: 4,
        name: "Bob Johnson",
        role: "Employee",
        image: "MembersCebu/Edna Liz Medalla Damaso.png",
        details: "More details about Edna...",
      },
      {
        id: 5,
        name: "Charlie Brown",
        role: "Employee",
        image: "MembersCebu/Gabriel M. Barroso.png",
        details: "More details about Gabriel...",
      },
      {
        id: 6,
        name: "Eva Green",
        role: "Employee",
        image: "MembersCebu/Ivy Alo.png",
        details: "More details about Ivy...",
      },
      {
        id: 7,
        name: "Frank Miller",
        role: "Employee",
        image: "MembersCebu/James Torregosa Casas.png",
        details: "More details about James...",
      },
      {
        id: 8,
        name: "Grace Turner",
        role: "Employee",
        image: "MembersCebu/Jeshel Villaver.png",
        details: "More details about Jeshel...",
      },
      {
        id: 9,
        name: "Harry White",
        role: "Employee",
        image: "MembersCebu/Jhadien Heyrosa.png",
        details: "More details about Jhadien...",
      },
      {
        id: 10,
        name: "Ivy Carter",
        role: "Employee",
        image: "MembersCebu/Joanne Mendoza Ricamata.png",
        details: "More details about Joanne...",
      },
      {
        id: 11,
        name: "Jack Robinson",
        role: "Employee",
        image: "MembersCebu/Jomar Gonzales Arenas.png",
        details: "More details about Jomar...",
      },
      {
        id: 12,
        name: "Josefino Yocte",
        role: "Employee",
        image: "MembersCebu/Josefino Yocte.png",
        details: "More details about Josefino...",
      },
      {
        id: 13,
        name: "Joshua Anderson",
        role: "Employee",
        image: "MembersCebu/Josh Aurelio.png",
        details: "More details about Josh...",
      },
      {
        id: 14,
        name: "Joy Brown",
        role: "Employee",
        image: "MembersCebu/Joy Bulado.png",
        details: "More details about Joy...",
      },
      {
        id: 15,
        name: "John Pierce",
        role: "Employee",
        image: "MembersCebu/JP Cabrales.png",
        details: "More details about JP...",
      },
    ],
    Bohol: [
      {
        id: 1,
        name: "Elijah Adams",
        role: "Employee",
        image: "MembersCebu/Celeste Bongco-Leonardia.png",
        details: "More details about Celeste...",
      },
      {
        id: 2,
        name: "Brianna Baker",
        role: "Employee",
        image: "MembersCebu/Dann Kristoffer Causing.png",
        details: "More details about Dann...",
      },
      {
        id: 3,
        name: "Connor Clark",
        role: "Employee",
        image: "MembersCebu/Debbie Apuya-Cabrales- Admin.png",
        details: "More details about Debbie...",
      },
      {
        id: 4,
        name: "Diana Duncan",
        role: "Employee",
        image: "MembersCebu/Edna Liz Medalla Damaso.png",
        details: "More details about Edna...",
      },
      {
        id: 5,
        name: "Ethan Evans",
        role: "Employee",
        image: "MembersCebu/Gabriel M. Barroso.png",
        details: "More details about Gabriel...",
      },
      {
        id: 6,
        name: "Felicity Foster",
        role: "Employee",
        image: "MembersCebu/Ivy Alo.png",
        details: "More details about Ivy...",
      },
      {
        id: 7,
        name: "Gavin Gardner",
        role: "Employee",
        image: "MembersCebu/James Torregosa Casas.png",
        details: "More details about James...",
      },
      {
        id: 8,
        name: "Hannah Harris",
        role: "Employee",
        image: "MembersCebu/Jeshel Villaver.png",
        details: "More details about Jeshel...",
      },
      {
        id: 9,
        name: "Isaac Ingram",
        role: "Employee",
        image: "MembersCebu/Jhadien Heyrosa.png",
        details: "More details about Jhadien...",
      },
      {
        id: 10,
        name: "Jasmine Jennings",
        role: "Employee",
        image: "MembersCebu/Joanne Mendoza Ricamata.png",
        details: "More details about Joanne...",
      },
      {
        id: 11,
        name: "Connor Clark",
        role: "Employee",
        image: "MembersCebu/Jomar Gonzales Arenas.png",
        details: "More details about Jomar...",
      },
    ],
    Dumaguete: [
      {
        id: 1,
        name: "Jennifer Lawrence",
        role: "Employee",
        image: "MembersCebu/Celeste Bongco-Leonardia.png",
        details: "More details about Celeste...",
      },
      {
        id: 2,
        name: "Tom Hanks",
        role: "Employee",
        image: "MembersCebu/Dann Kristoffer Causing.png",
        details: "More details about Dann...",
      },
      {
        id: 3,
        name: "Charlize Theron",
        role: "Employee",
        image: "MembersCebu/Debbie Apuya-Cabrales- Admin.png",
        details: "More details about Debbie...",
      },
      {
        id: 4,
        name: "Mary Jane",
        role: "Employee",
        image: "MembersCebu/Edna Liz Medalla Damaso.png",
        details: "More details about Edna...",
      },
      {
        id: 5,
        name: "Brad Pitt",
        role: "Employee",
        image: "MembersCebu/Gabriel M. Barroso.png",
        details: "More details about Gabriel...",
      },
      {
        id: 6,
        name: "Angelina Jolie",
        role: "Employee",
        image: "MembersCebu/Ivy Alo.png",
        details: "More details about Ivy...",
      },
      {
        id: 7,
        name: "Chris Hemsworth",
        role: "Employee",
        image: "MembersCebu/James Torregosa Casas.png",
        details: "More details about James...",
      },
      {
        id: 8,
        name: "Scarlett Johansson",
        role: "Employee",
        image: "MembersCebu/Jeshel Villaver.png",
        details: "More details about Jeshel...",
      },
      {
        id: 9,
        name: "Meryl Streep",
        role: "Employee",
        image: "MembersCebu/Jhadien Heyrosa.png",
        details: "More details about Jhadien...",
      },
      {
        id: 10,
        name: "Gal Gadot",
        role: "Employee",
        image: "MembersCebu/Joanne Mendoza Ricamata.png",
        details: "More details about Joanne...",
      },
      {
        id: 11,
        name: "Robert Downey Jr.",
        role: "Employee",
        image: "MembersCebu/Jomar Gonzales Arenas.png",
        details: "More details about Jomar...",
      },
      {
        id: 12,
        name: "Ryan Gosling",
        role: "Employee",
        image: "MembersCebu/Josefino Yocte.png",
        details: "More details about Josefino...",
      },
      {
        id: 13,
        name: "Emma Watson",
        role: "Employee",
        image: "MembersCebu/Josh Aurelio.png",
        details: "More details about Josh...",
      },
      {
        id: 14,
        name: "Emma Stone",
        role: "Employee",
        image: "MembersCebu/Joy Bulado.png",
        details: "More details about Joy...",
      },
      {
        id: 15,
        name: "Bradley Cooper",
        role: "Employee",
        image: "MembersCebu/JP Cabrales.png",
        details: "More details about JP...",
      },
    ],
  };

  const selectedBranchMembers = branchMembers[branch] || [];

  return (
    <>
      <SlideImageStyles />
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {selectedBranchMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <img
                src={member.image}
                alt="slide_image"
                onClick={() => handleCardClick(member)}
                className="rounded-circle "
              />
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "24px",
                }}
              >
                {member.name}
              </h3>
              <p style={{ textAlign: "center" }}>{member.role}</p>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow ">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPerson?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedPerson?.image}
              alt=""
              className="CardSliderImageInModal w-50 mb-3"
            />
            <div
              dangerouslySetInnerHTML={{ __html: selectedPerson?.details }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
