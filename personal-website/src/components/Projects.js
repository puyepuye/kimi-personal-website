import React from 'react';

function Projects() {
  return (
    <div className="section">
      <div class="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project">
        <h3  class="title-name2">Kode with Klossy Participant</h3>
        <div class="line-container2">
          <p class="location2">Web Development</p>
          <p class="place">June 2022</p>
        </div>
        <div class="description">
          <p>
            Designed and developed a travel destination website using HTML, CSS, and JavaScript,
            showcasing top global destinations to enhance user engagement and interface design skills.
          </p>
        </div>
      </div>

      <div className="project">
        <h3  class="title-name2">Minesweeper Game</h3>
        <div class="line-container2">
          <p class="location2">Game Development</p>
          <p class="place">May 2021</p>
        </div>
        <div class="description">
          <p>
            Developed a fully functional Minesweeper game in Python using Tkinter, implementing game
            logic, user interface, and interactive features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
